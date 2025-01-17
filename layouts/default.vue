<script setup lang="ts">
import { ref } from 'vue'
import { AccessRequestType } from '~/types/accessRequest'

const showBetaModal = ref(false)
const showWaitlistModal = ref(false)

// Provide both the state and the methods to open modals
provide('showBetaModal', showBetaModal)
provide('showWaitlistModal', showWaitlistModal)
provide('openBetaModal', () => showBetaModal.value = true)
provide('openWaitlistModal', () => showWaitlistModal.value = true)
</script>


<template>
  <v-app>
    <NavBar />

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
    <!-- Early Access Modals -->
    <landingpageEarlyAccessModal
      v-model="showBetaModal"
      :type="AccessRequestType.beta_access"
    />
    <landingpageEarlyAccessModal
      v-model="showWaitlistModal"
      :type="AccessRequestType.ga_waitlist"
    />
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

.v-main {
  padding-top: 0px !important;
  font-size: 1.125rem;
}

.v-container main-container {
  max-width: 1200px;
}
</style>