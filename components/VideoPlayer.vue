<template>
  <div ref="artRef"></div>
</template>

<script>
import Artplayer from "artplayer";
import artplayerPluginHlsQuality from "artplayer-plugin-hls-quality";

export default {
  props: {
    option: {
      type: Object,
      required: true,
    },
  },
  emits: ["get-instance"],
  data() {
    return {
      instance: null,
      artPlayer: null,
      art: null,
    };
  },
  mounted() {
    this.instance = new Artplayer({
      ...this.option,
      container: this.$refs.artRef,
      whitelist: ["*"],
      plugins: [
        artplayerPluginHlsQuality({
          control: false,
          setting: true,
          title: "Quality",
          auto: "Auto",
        }),
      ],
      icons: {
        loading: `<?xml version="1.0" encoding="utf-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: none; display: block; shape-rendering: auto;" width="100px" height="100px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
<circle cx="50" cy="50" fill="none" stroke="#ff312d" stroke-width="9" r="32" stroke-dasharray="150.79644737231007 52.26548245743669">
  <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
</circle>
</svg>`,
      },
      contextmenu: [
        {
          html: "amvplay 1.0v",
          click: function () {
            window.open("https://amvstr.ml");
          },
        },
      ],
      playerInline: true,
      autoSize: true,
      setting: true,
      fullscreen: true,
      fullscreenWeb: true,
      playbackRate: true,
      fastForward: false,
      autoPlayback: true,
      autoOrientation: true,
      autoMini: true,
      customType: {
        m3u8: async function (video, url) {
          const { default: Hls } = await import("hls.js");
          if (Hls.isSupported()) {
            window.hls = new Hls();
            window.hls.loadSource(url);
            window.hls.attachMedia(video);
          } else {
            const canPlay = video.canPlayType("application/vnd.apple.mpegurl");
            if (canPlay === "probably" || canPlay == "maybe") {
              video.src = url;
            } else {
              window.art.notice.show = "Does not support playback of m3u8";
            }
          }
        },
      },
    });
    this.$nextTick(() => {
      this.$emit("get-instance", this.instance);
    });
  },
  beforeUnmount() {
    if (this.instance && this.instance.destroy) {
      this.instance.destroy(false);
    }
  },
};
</script>
