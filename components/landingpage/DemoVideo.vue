<!-- components/DemoVideo.vue -->

<template>
  <v-container
    fluid
    class="py-16"
  >
    <div class="main-container ">
    <v-sheet
      class="mx-auto video-sheet"
      max-width="800"
      elevation="4"
      rounded="lg"
    >
      <video
        controls
        class="demo-video"
        width="800"
        playsinline
        autoplay
        muted
        loop
      >
        <source
          src="/kastor-demo-800.mp4"
          type="video/mp4"
        >
        Your browser does not support the video tag.
      </video>
    </v-sheet>
    </div>
  </v-container>
</template>

<style scoped>
.video-container {
  position: relative;
  z-index: 2;
  line-height: 0;
  font-size: 0;
}

.video-sheet {
  padding: 0 !important;
  line-height: 0;
  font-size: 0;
  overflow: hidden;
}

.demo-video {
  display: block;
  width: 100%;
  height: auto;
  line-height: 0;
  margin: 0;
  padding: 0;
}
</style>