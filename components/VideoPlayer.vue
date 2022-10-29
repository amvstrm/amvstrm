<template>
  <div
    v-video-player:myVideoPlayer="playerOptions"
    class="video-player-box"
    :playsinline="playsinline"
    @play="onPlayerPlay($event)"
    @pause="onPlayerPause($event)"
    @ended="onPlayerEnded($event)"
    @loadeddata="onPlayerLoadeddata($event)"
    @waiting="onPlayerWaiting($event)"
    @playing="onPlayerPlaying($event)"
    @timeupdate="onPlayerTimeupdate($event)"
    @canplay="onPlayerCanplay($event)"
    @canplaythrough="onPlayerCanplaythrough($event)"
    @ready="playerReadied"
    @statechanged="playerStateChanged($event)"
  ></div>
</template>

<script>
// eslint-disable no-console
export default {
  props: {
    hlssrc : {
      type : Array,
      required : true
    }
  },
  data() {
    return {
      // component options
      playsinline: true,

      // videojs options
      playerOptions: {
        muted: true,
        language: 'en',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [
          {
            type: 'application/x-mpegURL',
            src: 'https://cdn.jwplayer.com/manifests/yWlOI96y.m3u8',
          },
        ],
        // poster: "/static/images/author.jpg",
      },
    }
  },

  mounted() {
    console.log('this is current player instance object', this.myVideoPlayer)
  },
  methods: {
    // listen event
    onPlayerPlay(player) {
      // console.log('player play!', player)
    },
    onPlayerPause(player) {
      // console.log('player pause!', player)
    },
    onPlayerEnded(player) {
      // console.log('player ended!', player)
    },
    onPlayerLoadeddata(player) {
      // console.log('player Loadeddata!', player)
    },
    onPlayerWaiting(player) {
      // console.log('player Waiting!', player)
    },
    onPlayerPlaying(player) {
      // console.log('player Playing!', player)
    },
    onPlayerTimeupdate(player) {
      // console.log('player Timeupdate!', player.currentTime())
    },
    onPlayerCanplay(player) {
      // console.log('player Canplay!', player)
    },
    onPlayerCanplaythrough(player) {
      // console.log('player Canplaythrough!', player)
    },
    // or listen state event
    playerStateChanged(playerCurrentState) {
      console.log('player current update state', playerCurrentState)
    },
    // player is ready
    playerReadied(player) {
      console.log('example 01: the player is readied', player)
    },
  },
}
</script>
<style>
.video-player-box {
  aspect-ratio: 16/9;
}
</style>
