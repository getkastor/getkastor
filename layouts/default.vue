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
      <v-container class="d-flex align-center">
        <v-app-bar-title>
          <NuxtLink 
            to="/" 
            class="text-decoration-none"
            :class="{ 'text-white': !isScrolled }"
          >
            Kastor
          </NuxtLink>
        </v-app-bar-title>
        <v-spacer></v-spacer>
        <v-btn 
          to="/" 
          variant="text"
          :class="{ 'text-white': !isScrolled }"
        >
          Home
        </v-btn>
        <v-btn 
          to="/blog" 
          variant="text"
          :class="{ 'text-white': !isScrolled }"
        >
          Blog
        </v-btn>
      </v-container>
    </v-app-bar>

    <v-main>
      <slot />
    </v-main>

    <v-footer app>
      <v-container>
        <div class="text-center">
          © {{ new Date().getFullYear() }} Kastor
        </div>
      </v-container>
    </v-footer>
  </v-app>
</template>

<style scoped>
.v-app-bar {
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.v-main {
  padding-top: 0px;
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