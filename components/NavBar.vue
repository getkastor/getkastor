<script setup lang="ts">
import { ref, onMounted, onUnmounted, inject, watch } from 'vue'
import { useDisplay } from 'vuetify'
import { useGoTo } from 'vuetify'
import { useRoute, useRouter } from 'vue-router'

// define prop optional:isblog
const props = defineProps({
  isBlog: {
    type: Boolean,
    default: false
  }
})

const route = useRoute()
const router = useRouter()
const goTo = useGoTo()

const isHydrated = ref(false)

const isScrolled = ref(false)
const showWhiteBg = ref(false)
const drawer = ref(false)

// Inject modal states and methods


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
    updateBackground()
  }
}

const updateBackground = () => {
  // Show white background if either scrolled down or any modal is open
  if (isScrolled.value || props.isBlog) {
    showWhiteBg.value = true
  } else {
    // Only hide background if we're at the top and no modal is open
    showWhiteBg.value = false
  }
}

const scrollToPricing = () => {
  goTo('.pricing-section', {
    duration: 500,
    offset: 0,
    easing: 'easeInOutCubic'
  })
}

const handleTryItFree = () => {
  // if we're on the home page, scroll to the pricing section
  if (route.path === '/') {
    scrollToPricing()
  } else {
    // otherwise, navigate to the pricing page
    router.push('/')
  }
}

// Add scroll event listener when component is mounted
onMounted(() => {
  handleScroll()
  updateBackground()
  // Small delay to ensure all Vuetify styles are applied
  setTimeout(() => {
    isHydrated.value = true
  }, 50)
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

    <v-list class="mt-6">
      <v-list-item class="blog-list-item">
        <NuxtLink
          to="/blog"
          class="text-decoration-none blog-link d-block text-center py-2"
          @click="drawer = false"
        >
          BLOG
        </NuxtLink>
        <NuxtLink
          to="/contact"
          class="text-decoration-none blog-link d-block text-center py-2"
          @click="drawer = false"
        >
          Contact us
        </NuxtLink>
      </v-list-item>
      <v-list-item>
        <v-btn
          block
          color="secondary"
          class="navButton beta my-4"
          variant="elevated"
          size="x-large"
          @click="handleTryItFree"
        >
          <v-icon start>mdi-rocket-launch</v-icon>
          Free Trial
        </v-btn>
      </v-list-item>

      <!-- <v-list-item>
        <v-btn
          block
          variant="outlined"
          size="x-large"
          class="navButton waitlist"
          :class="{ 'border-primary text-primary': showWhiteBg }"
          @click="openWaitlistModal"
        >
          <v-icon start>mdi-email-outline</v-icon>
          Join Waitlist
        </v-btn>
      </v-list-item> -->
    </v-list>
  </v-navigation-drawer>


  <v-app-bar
    :elevation="isScrolled || isBlog ? 1 : 0"
    scroll-behavior="hide"
    scroll-threshold="100"
    :class="{
      'bg-transparent': !showWhiteBg && !isBlog,
      'bg-white': showWhiteBg || isBlog,
      'bg-transition': true,
      'navbar-ready': isHydrated
    }"
  >
    <v-container class="navbar-content main-container">
      <!-- Logo section -->
      <v-app-bar-title class="flex-grow-0">
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
      <div class="d-none d-md-flex button-container align-center">
        <NuxtLink
          to="/blog"
          class="text-decoration-none blog-link mr-8"
        >
          BLOG
        </NuxtLink>
        <NuxtLink
          to="/contact"
          class="text-decoration-none blog-link mr-8"
        >
          Contact us
        </NuxtLink>
        <v-btn
          color="secondary"
          class="navButton beta"
          variant="elevated"
          @click="handleTryItFree"
        >
          <v-icon start>mdi-rocket-launch</v-icon>
          Free Trial
        </v-btn>
        <!-- <v-btn
          variant="outlined"
          class="ml-6 navButton waitlist"
          :class="{ 'border-primary text-primary': showWhiteBg }"
          @click="openWaitlistModal"
        >
          <v-icon start>mdi-email-outline</v-icon>
          Join Waitlist
        </v-btn> -->
      </div>

      <!-- Mobile menu icon -->
      <v-app-bar-nav-icon
        class="d-md-none mobile-menu"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
    </v-container>
  </v-app-bar>
</template>

<style scoped>
/* Initial state - entire navbar content is invisible */
.navbar-content {
  display: flex !important;
  justify-content: space-between !important;
  align-items: center !important;
  opacity: 0;
  transition: opacity 0.3s ease;
}

/* After hydration - fade in everything */
.navbar-ready .navbar-content {
  opacity: 1;
}

/* Make logo area non-flexible */
.v-app-bar-title {
  flex: 0 0 auto !important;
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

.blog-link {
  color: rgba(var(--v-theme-surface-dark)) !important;
  font-weight: 700 !important;
  transition: opacity 0.2s ease !important;
}

.blog-link:hover {
  opacity: 0.8;
}

/* For mobile */
.v-list-item .blog-link {
  font-size: 1rem;
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
