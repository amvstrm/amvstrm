<template>
  <div ref="artRef" />
</template>
<script>
import Artplayer from "artplayer";
import artplayerPluginHlsQuality from "artplayer-plugin-hls-quality";
import artplayerPluginVttThumbnail from "artplayer-plugin-thumbnail";
import Hls from "hls.js";

export default {
  props: {
    option: {
      type: Object,
      required: true,
    },
    // eslint-disable-next-line vue/require-default-prop
    vtt: {
      type: String,
      required: false,
    },
  },
  emits: ["get-instance"],
  data() {
    return {
      instance: null,
      artPlayer: null,
      art: null,
      browser: "",
    };
  },
  async mounted() {
    window.hls = new Hls();
    this.instance = new Artplayer({
      ...this.option,
      container: this.$refs.artRef,
      whitelist: ["*"],
      plugins: [
        artplayerPluginHlsQuality({
          control: false,
          setting: true,
          auto: "Auto",
        }),
        artplayerPluginVttThumbnail({
          vtt: this.vtt,
        }),
      ],
      icons: {
        loading: `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: none; display: block; shape-rendering: auto;" width="100px" height="100px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
<circle cx="50" cy="50" fill="none" stroke="#ff312d" stroke-width="5" r="32" stroke-dasharray="150.79644737231007 52.26548245743669">
  <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
</circle>
</svg>`,
      },
      contextmenu: [
        {
          html: `© amvstrm ${new Date().getFullYear()}`,
          click: function () {
            window.open("/");
          },
        },
      ],
      layers: [
        {
          name: "amv_logo",
          html: `<img src="/logo.png" width="100px">`,
          style: {
            position: "absolute",
            top: "20px",
            right: "20px",
          },
        },
      ],
      screenshot: true,
      miniProgressBar: true,
      airplay: true,
      autoSize: true,
      setting: true,
      fullscreen: true,
      fullscreenWeb: true,
      playbackRate: true,
      fastForward: false,
      autoPlayback: true,
      autoOrientation: true,
      pip: navigator.userAgent.match(/(chrome|edg|safari|opr)/i) ? true : false,
      playsInline: true,
      autoplay: true,
      autoMini: false,
      customType: {
        m3u8: async function (video, url) {
          if (Hls.isSupported()) {
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
