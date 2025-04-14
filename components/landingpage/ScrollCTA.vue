<!-- components/CTAs.vue -->
<script setup lang="ts">
import { useGoTo } from 'vuetify'

const goTo = useGoTo()

const scrollToCTA = () => {
  goTo('.pricing-section', {
    duration: 500,
    offset: 0,
    easing: 'easeInOutCubic'
  })
}
</script>

<template>
  <div class="d-flex justify-center align-center py-16">
    <v-btn
      color="secondary"
      size="x-large"
      class="text-button-large"
      elevation="4"
      :ripple="false"
      @click="scrollToCTA"
    >
      <v-icon start>mdi-rocket-launch</v-icon>
      Try Kastor Free
    </v-btn>
  </div>
</template>

<style scoped>
.text-button-large {
  font-size: 1.1rem;
  letter-spacing: 0.5px;
  text-transform: none;
  font-weight: 700;
  min-width: 250px;
}
</style>
