import { Deta } from "deta"; 

export default defineEventHandler(async () => {
  // if you want alert for your site, use this...
  const deta = Deta(useRuntimeConfig().DETA_BASE_KEY)
  const db = deta.Base("amv_alert")
  const alerts = await db.get("notice_alert");
  return {
    status: 200,
    alerts
  };
});
