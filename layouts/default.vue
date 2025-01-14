<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const showWhiteBg = ref(false) // New ref for background color

const appBarHeight = 150 // Default v-app-bar height in pixels

const handleScroll = () => {
  const isNowScrolled = window.scrollY > appBarHeight

  if (isNowScrolled !== isScrolled.value) {
    isScrolled.value = isNowScrolled

    if (!isNowScrolled) {
      // When scrolling back to top, remove dark bg immediately
      showWhiteBg.value = false
    } else {
      // When scrolling down, delay the dark bg slightly
      setTimeout(() => {
        if (isScrolled.value) { // Check if still scrolled
          showWhiteBg.value = true
        }
        // Adjust this timing to match your hide animation
      }, 150)
    }
  }
}

// Add scroll event listener when component is mounted
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

// Clean up event listener when component is unmounted
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <v-app>
    <v-app-bar
      :elevation="isScrolled ? 1 : 0"
      scroll-behavior="hide"
      scroll-threshold="100"
      :class="{
        'bg-transparent': !showWhiteBg,
        'bg-white': showWhiteBg,
        'bg-transition': true
      }"
    >
      <v-container class="d-flex align-center main-container">
        <v-app-bar-title>
          <NuxtLink
            to="/"
            class="text-decoration-none d-flex align-center"
          >
            <img
              src="/Kastor_wordmark_light_bg.svg"
              alt="Kastor Logo"
              height="32"
              class="logo"
            />
          </NuxtLink>
        </v-app-bar-title>
        <v-spacer></v-spacer>
        <v-btn
          to="/"
          variant="text"
        >
          Home
        </v-btn>
        <v-btn
          to="/blog"
          variant="text"
        >
          Blog
        </v-btn>
      </v-container>
    </v-app-bar>

    <v-main>
      <slot />
    </v-main>

    <v-footer class="bg-primary">
      <v-container>
        <div class="bg-primary">
          © {{ new Date().getFullYear() }} Kastor
        </div>
      </v-container>
    </v-footer>
  </v-app>
</template>

<style>
.main-container {
  max-width: 1200px !important;
  margin-left: auto !important;
  margin-right: auto !important;
  width: 100%;
  padding: 0 1rem;
}

.logo {
  height: 32px;
  width: auto;
  transition: opacity 0.3s ease;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
  -webkit-font-smoothing: antialiased;
  shape-rendering: geometricPrecision;
  will-change: transform;
  stroke-width: 1px;
}


@media (max-width: 600px) {
  .main-container {
    padding: 0 0.5rem;
  }
}

.bg-transition {
  transition: background-color 0.3s ease !important;
}

.v-main {
  padding-top: 0px !important;
  font-size: 1.125rem;
}

.v-container main-container {
  max-width: 1200px;
}

.bg-transparent {
  background-color: transparent !important;
}
</style>