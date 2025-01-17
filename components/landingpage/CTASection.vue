<script setup lang="ts">
import { inject } from 'vue';

interface CTAOption {
  title: string;
  buttonText: string;
  buttonColor: string;
  benefits: string[];
  type: 'beta' | 'waitlist';
}

const props = defineProps<{
  title?: string;
}>();

const ctaOptions: CTAOption[] = [
  {
    title: 'Get Beta Access',
    buttonText: 'Apply for Beta Access',
    buttonColor: 'tertiary-darken-1',
    benefits: [
      'Use Kastor for free during the beta',
      'Help shape the product',
      'Early access to all features',
      // 'Limited spots available'
    ],
    type: 'beta'
  },
  {
    title: 'Join the Waitlist',
    buttonText: 'Join Waitlist',
    buttonColor: 'secondary',
    benefits: [
      'Be first to know when we launch',
      'Get exclusive early-bird pricing',
      'Stay updated on our progress',
      // ''
    ],
    type: 'waitlist'
  }
];

// Type the injected functions
const openBetaModal = inject('openBetaModal', () => {}) as () => void
const openWaitlistModal = inject('openWaitlistModal', () => {}) as () => void

const handleClick = (type: 'beta' | 'waitlist') => {
  if (type === 'beta') {
    openBetaModal()
  } else {
    openWaitlistModal()
  }
};

</script>

<template>
  <v-container
    fluid
    class="bg-primary py-16"
  >
    <div class="main-container cta-section">
      <h2 class="text-h3 text-white text-center mb-12 font-weight-bold">
        {{ title || 'Join Kastor Early' }}
      </h2>
      <v-row class="justify-center">
        <v-col
          v-for="option in ctaOptions"
          :key="option.type"
          cols="12"
          sm="6"
          md="5"
          class="px-4"
        >
          <v-card
            class="h-100 elevation-3"
            rounded="lg"
            :class="option.type"
          >
            <v-card-item class="pa-8">
              <div class="text-center">
                <h3 class="text-h5 font-weight-bold mb-6">{{ option.title }}</h3>
              </div>
              <div class="d-flex justify-center">
                <v-list
                  class="bg-transparent"
                  max-width="350px"
                >
                  <v-list-item
                    v-for="(benefit, i) in option.benefits"
                    :key="i"
                    :title="benefit"
                    :slim="true"
                  >
                    <template v-slot:prepend>
                      <v-icon :color="option.buttonColor">
                        mdi-check-circle
                      </v-icon>
                    </template>
                  </v-list-item>
                </v-list>
              </div>
              <div class="d-flex justify-center">
                <v-btn
                  :color="option.buttonColor"
                  class="mt-8 text-button-large w-75"
                  :class="option.type"
                  height="56"
                  @click="handleClick(option.type)"
                >
                  {{ option.buttonText }}
                </v-btn>
              </div>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<style scoped>
.text-button-large {
  font-size: 1.1rem;
  letter-spacing: 0.5px;
  text-transform: none;
  font-weight: 700;
  padding: 0 32px;
  min-width: 250px;
}


/* .waitlist .v-list-item:last-child .v-icon {
  display: none;
} */

@media (max-width: 600px) {
  .text-button-large {
    min-width: 300px;
  }
}
</style>
