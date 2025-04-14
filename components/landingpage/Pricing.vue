<!-- components/landingpage/Pricing.vue -->
<template>
  <v-container
    fluid
    id="pricing"
    class="pricing-section py-16"
  >
    <div class="main-container">
      <div class="text-center mb-12">
        <h2 class="text-h3 font-weight-black">Start Your Free Trial</h2>
        <p class="text-subtitle text-medium-emphasis mt-4">
          7-day free trial. No credit card required
        </p>
      </div>

      <!-- Billing Toggle -->
      <div class="d-flex justify-center align-center mb-16">
        <span
          :class="{ 'text-primary font-weight-bold': !isAnnual }"
          @click="isAnnual = false"
        >
          Monthly
        </span>
        <v-switch
          v-model="isAnnual"
          class="mx-4"
          color="primary"
          hide-details
        ></v-switch>
        <span
          :class="{ 'text-primary font-weight-bold': isAnnual }"
          @click="isAnnual = true"
        >
          Yearly (Save 20%)
        </span>
      </div>

      <!-- Pricing Cards -->
      <v-row
        justify="center"
        align="stretch"
      >
        <v-col
          v-for="plan in plans"
          :key="plan.name"
          cols="12"
          md="4"
          class="d-flex"
        >
          <v-card
            :class="{ 'popular': plan.popular }"
            class="w-100 pricing-card pt-4"
            elevation="4"
          >
            <v-card-item>
              <div class="text-center pricing-header">
                <h3 class="text-h4 font-weight-bold mb-4">{{ plan.name }}</h3>
                <div class="pricing-content">
                  <template v-if="plan.name !== 'Enterprise'">
                    <div class="text-h3 font-weight-bold mb-2">
                      ${{ isAnnual ? plan.yearlyPrice : plan.monthlyPrice }}
                      <span class="text-body-1 font-weight-regular">/mo</span>
                    </div>
                    <div class="text-body-2 text-medium-emphasis">
                      {{ isAnnual ? 'Billed annually' : 'Billed monthly' }}
                    </div>
                  </template>
                  <template v-else>
                    <div class="enterprise-pricing mb-2 d-flex align-center justify-center">
                      <v-icon
                        size="x-large"
                        color="primary"
                        class="mr-2"
                      >mdi-office-building-cog</v-icon>
                      <span class="custom-pricing-text">Custom</span>
                    </div>
                    <div class="text-body-2 text-medium-emphasis">
                      Pricing tailored to your needs
                    </div>
                  </template>
                </div>

                <v-btn
                  block
                  :color="plan.name === 'Enterprise' ? 'secondary' : 'primary'"
                  size="x-large"
                  class="mt-8"
                  :class="plan.name.toLowerCase()"
                  @click="selectPlan(plan)"
                >
                  {{ plan.name === 'Enterprise' ? 'Contact Us' : 'Start Free Trial' }}
                </v-btn>
              </div>

              <v-divider class="my-6"></v-divider>

              <v-list
                density="comfortable"
                class="feature-list"
              >
                <v-list-item
                  v-for="(feature, index) in plan.features"
                  :key="index"
                  class="feature-item"
                >
                  <template v-slot:prepend>
                    <v-icon
                      color="primary"
                      size="small"
                    >mdi-check-circle</v-icon>
                  </template>
                  <v-list-item-title>
                    <div class="d-flex align-center">
                      {{ feature }}
                      <v-chip
                        v-if="feature.includes('Up to 5 seats')"
                        color="info"
                        size="small"
                        class="ml-2"
                      >
                        Coming Soon
                      </v-chip>
                      <span
                        v-if="feature.includes('unlimited content') && plan.name !== 'Enterprise'"
                        class="ml-1 text-caption"
                      >*</span>
                    </div>
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>
      <!-- Global Fair Use Disclaimer -->
      <div class="text-center mt-8 text-medium-emphasis text-body-2">
        * Unlimited content generation within fair use (approximately 50 long-form pieces or 500 short-form posts
        monthly).
        Higher usage may be rate-limited.
      </div>
    </div>
  </v-container>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router';

const dataLayer = useDataLayer()
const router = useRouter()

const isAnnual = ref(false);

const runtimeConfig = useRuntimeConfig()
const SITE_URL = runtimeConfig.public.siteURL

const plans = [
  {
    name: 'Creator',
    monthlyPrice: 49,
    yearlyPrice: 39,
    features: [
      'Create unlimited content',
      '1 user seat',
      '1 Voice',
      '3 campaigns / month',
      'Email support',
    ]
  },
  {
    name: 'Team',
    popular: true,
    monthlyPrice: 99,
    yearlyPrice: 79,
    features: [
      'Create unlimited content',
      'Up to 5 seats',
      '3 Voices',
      '10 campaigns / month',
      'Priority support',
    ]
  },
  {
    name: 'Enterprise',
    monthlyPrice: null,
    yearlyPrice: null,
    features: [
      'Create unlimited content',
      'Custom user seats',
      'Unlimited voices',
      'Unlimited campaigns',
      'Priority 24/7 support',
      'Custom onboarding',
    ]
  }
];

const selectPlan = (plan) => {
  const planPrice = isAnnual.value ? plan.yearlyPrice : plan.monthlyPrice
  const billingCycle = isAnnual.value ? 'yearly' : 'monthly'

  // Track plan selection
  dataLayer.push({
    event: 'pricing_interaction',
    event_category: 'Pricing',
    event_action: plan.name === 'Enterprise' ? 'enterprise_contact' : 'plan_selected',
    plan_name: plan.name.toLowerCase(),
    plan_price: planPrice,
    billing_cycle: billingCycle
  })

  if (plan.name === 'Enterprise') {
    router.push('/contact')
    return;
  }

  // Construct register URL with plan parameters
  const params = new URLSearchParams({
    plan: plan.name.toLowerCase(),
    billing: isAnnual.value ? 'yearly' : 'monthly',
  });

  // Redirect to the app's register page with parameters
  window.location.href = `${NUXT_PUBLIC_API_BASE_URL}/register?${params.toString()}`;
};

// Track billing cycle toggle
watch(isAnnual, (newValue) => {
  dataLayer.push({
    event: 'pricing_interaction',
    event_category: 'Pricing',
    event_action: 'billing_cycle_view_change',
    billing_cycle: newValue ? 'yearly' : 'monthly'
  })
})

// Track pricing section visibility
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        dataLayer.push({
          event: 'pricing_interaction',
          event_category: 'Pricing',
          event_action: 'section_view'
        })
        // Only track first view
      }
      observer.disconnect()
    })
    // Trigger when 50% visible
  }, { threshold: 0.5 })

  const pricingSection = document.getElementById('pricing')
  if (pricingSection) {
    observer.observe(pricingSection)
  }
})

</script>

<style scoped>
.pricing-section {
  background: linear-gradient(135deg, rgb(248, 250, 252) 0%, rgb(255, 255, 255) 100%);
}

.pricing-card {
  position: relative;
  border-radius: 16px;
  height: 100%;
  transition: transform 0.3s ease;
}

.pricing-card:hover {
  transform: translateY(-5px);
}

.popular {
  border: 2px solid rgb(var(--v-theme-primary));
}

.pricing-header {
  display: flex;
  flex-direction: column;
}

.pricing-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 120px;
}

.enterprise-pricing {
  height: 60px;
  align-items: center;
}

.custom-pricing-text {
  font-size: 2rem;
  font-weight: bold;
}

.feature-list {
  background: transparent;
}

.feature-item {
  padding-left: 0;
}

/* Switch styling */
.v-switch {
  margin-top: 8px;
}

@media (max-width: 960px) {
  .pricing-card {
    margin-bottom: 20px;
  }

  .pricing-content {
    min-height: auto;
  }

  .enterprise-pricing {
    height: auto;
  }
}

.v-switch :deep(.v-switch__track:not(.bg-primary)) {
  background-color: rgb(var(--v-theme-primary)) !important;
}

.v-switch :deep(.v-switch__track.bg-primary) {
  background-color: rgb(var(--v-theme-primary)) !important;
}
</style>
