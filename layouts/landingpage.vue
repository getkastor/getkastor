<script setup lang="ts">
import { ref } from 'vue'
import { AccessRequestType } from '~/types/accessRequest'

const contactEmail = "team@getkastor.com"
const emailRecentlyCopied = ref(false);


const showBetaModal = ref(false)
const showWaitlistModal = ref(false)

const clickToCopyEmail = () => {
  navigator.clipboard.writeText(contactEmail);
  emailRecentlyCopied.value = true;
  setTimeout(() => {
    emailRecentlyCopied.value = false;
  }, 3000);
};

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
        <div class="bg-primary d-flex flex-column flex-md-row ga-4">
          <span>
            © {{ new Date().getFullYear() }} Kastor
          </span>
          <v-spacer class="d-none d-md-block" />
          <div class="contact-links d-flex ga-4 flex-column flex-md-row ">
            <a
              href="/terms.html"
              target="_blank"
            >Terms and Conditions</a>
            <a
              href="/privacy.html"
              target="_blank"
            >Privacy Policy</a>

            <v-tooltip bottom>
              <template v-slot:activator="{ props }">
                <span
                  v-bind="props"
                  @click="clickToCopyEmail"
                >
                  team@getkastor.com
                </span>
              </template>
              <span v-if="emailRecentlyCopied">Email copied to clipboard!</span>
              <span v-else>Click to copy email</span>
            </v-tooltip>

          </div>
          <div>

          </div>
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

.contact-links span,
a {
  color: white;
  text-decoration: none;
  cursor: pointer;
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