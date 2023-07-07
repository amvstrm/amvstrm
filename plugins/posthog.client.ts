import { defineNuxtPlugin } from "#app";
import posthog from "posthog-js";

export default defineNuxtPlugin(() => {
  const runtimeConfig = useRuntimeConfig();
  if (!runtimeConfig.public.posthogPublicKey) {
    return;
  }
 
  const posthogClient = posthog.init(runtimeConfig.public.posthogPublicKey, {
    api_host: runtimeConfig.public.posthogHost || "https://app.posthog.com",
    loaded: (posthog) => {
      if (import.meta.env.MODE === "development") posthog.debug();
    },
  });
  const router = useRouter();
  router.afterEach((to) => {
    posthog.capture("$pageview", {
      current_url: to.fullPath,
    });
  });

  return {
    provide: {
      posthog: () => posthogClient,
    },
  };
});
