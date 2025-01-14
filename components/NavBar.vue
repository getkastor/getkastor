<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { AccessRequestType } from '~/types/accessRequest'

const isScrolled = ref(false)
const showWhiteBg = ref(false)
const showBetaModal = ref(false)
const showWaitlistModal = ref(false)
const drawer = ref(false)
const windowWidth = ref(0)

import { useDisplay } from 'vuetify'

const { width } = useDisplay()

const appBarHeight = 150 // Default v-app-bar height in pixels
const drawerWidth = computed(() => {
  // If mobile breakpoint (< 600px), return full width
  // Otherwise return default width (256px is Vuetify's default)
  return width.value < 700 ? width.value : 256
})


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
  <!-- Navigation drawer for mobile -->
  <v-navigation-drawer
    v-model="drawer"
    location="right"
    :width="drawerWidth"
    temporary
  >

    <div class="drawer-header">
      <NuxtLink
        to="/"
        class="text-decoration-none drawer-logo pl-2"
        @click="drawer = false"
      >
        <img
          src="/Kastor_wordmark_light_bg.svg"
          alt="Kastor Logo"
          height="32"
          class="logo"
        />
      </NuxtLink>
      <v-btn
        icon="mdi-close"
        size="small"
        variant="text"
        @click="drawer = false"
        class="close-btn"
      ></v-btn>
    </div>

    <v-list>
      <v-list-item>
        <v-btn
          block
          color="secondary"
          class="navButton beta my-4"
          variant="elevated"
          size="x-large"
          @click="showBetaModal = true"
        >
          <v-icon start>mdi-rocket-launch</v-icon>
          Join Beta
        </v-btn>
      </v-list-item>

      <v-list-item>
        <v-btn
          block
          variant="outlined"
          size="x-large"
          class="navButton waitlist"
          :class="{ 'border-primary text-primary': showWhiteBg }"
          @click="showWaitlistModal = true"
        >
          <v-icon start>mdi-email-outline</v-icon>
          Join Waitlist
        </v-btn>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>


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
          class="text-decoration-none d-flex align-center pl-4"
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

      <!-- Desktop buttons -->
      <div class="d-none d-md-flex">
        <v-btn
          color="secondary"
          class="navButton beta"
          variant="elevated"
          @click="showBetaModal = true"
        >
          <v-icon start>mdi-rocket-launch</v-icon>
          Join Beta
        </v-btn>
        <v-btn
          variant="outlined"
          class="ml-6 navButton waitlist"
          :class="{ 'border-primary text-primary': showWhiteBg }"
          @click="showWaitlistModal = true"
        >
          <v-icon start>mdi-email-outline</v-icon>
          Join Waitlist
        </v-btn>
      </div>

      <!-- Mobile menu icon -->
      <v-app-bar-nav-icon
        class="d-md-none"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
    </v-container>

    <!-- Modals -->
    <EarlyAccessModal
      v-model="showBetaModal"
      :type="AccessRequestType.beta_access"
    />
    <EarlyAccessModal
      v-model="showWaitlistModal"
      :type="AccessRequestType.ga_waitlist"
    />
  </v-app-bar>
</template>

<style scoped>
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

.bg-transition {
  transition: background-color 0.3s ease !important;
}


.opacity-0 {
  opacity: 0;
}

.navButton {
  text-transform: none;
  font-weight: 700;
  min-width: 170px;
  font-size: 1rem;
}

.navButton.waitlist {
  color: rgb(var(--v-theme-primary-darken-1)) !important;
  border: 2px solid rgb(var(--v-theme-primary)) !important;
  background-color: white !important;
}


.v-navigation-drawer .navButton {
  width: 100%;
  margin: 0;
}

.v-toolbar-title {
  /* logo width + some padding */
  min-width: 200px;
}

.drawer-header {
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  background: white;
  z-index: 1;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}

/* Responsive adjustments */
@media (max-width: 960px) {
  .v-btn {
    padding: 0 12px !important;
  }

  .v-divider {
    display: none;
  }
}

@media (max-width: 600px) {
  .main-container {
    padding: 0 0.5rem;
  }

}
</style>