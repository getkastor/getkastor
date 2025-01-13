<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const appBarHeight = 64 // Default v-app-bar height in pixels

const handleScroll = () => {
  isScrolled.value = window.scrollY > appBarHeight
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
      :class="{
        'bg-transparent': !isScrolled,
        'bg-white': isScrolled,
        'transition-all': true
      }"
    >
      <v-container class="d-flex align-center main-container">
        <v-app-bar-title>
          <NuxtLink 
            to="/" 
            class="text-decoration-none"
          >
            Kastor
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

@media (max-width: 600px) {
  .main-container {
    padding: 0 0.5rem;
  }
}

.v-app-bar {
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
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

.bg-white {
  background-color: white !important;
}

.transition-all {
  transition: all 0.3s ease;
}
</style>