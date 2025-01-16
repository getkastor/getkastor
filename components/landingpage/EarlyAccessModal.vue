<!-- components/EarlyAccessModal.vue -->
<template>
  <v-dialog
    v-model="dialog"
    width="500"
    persistent
    :scrim="loading ? '#000000' : undefined"
  >
    <v-card class="auth-card pb-8">
      <!-- Close button -->
      <v-btn
        icon="mdi-close"
        variant="text"
        size="small"
        class="close-btn"
        @click="handleClose"
        :disabled="loading"
      ></v-btn>

      <!-- Step 1: Email Collection -->
      <v-card-title
        v-if="!submitted"
        class="text-center text-h5 font-weight-bold pt-6 pb-8"
      >
        {{ type === 'beta_access' ? 'Join the Beta for Free' : 'Join the Waitlist' }}
      </v-card-title>

      <v-card-text class="px-4 py-2">
        <!-- Step 1: Email Form -->
        <v-form
          v-if="!submitted"
          @submit.prevent="handleEmailSubmit"
          v-model="isEmailValid"
        >
          <v-text-field
            v-model="email"
            label="Email"
            type="email"
            :rules="[rules.required, rules.email]"
            required
            variant="outlined"
            density="compact"
            bg-color="grey-lighten-5"
            :disabled="loading"
          />
          <p class="text-caption text-medium-emphasis mb-8">
            We'll never share your email or send you spam.
          </p>

          <v-alert
            v-if="error"
            type="error"
            variant="tonal"
            class="my-2"
            density="compact"
            closable
          >
            {{ error }}
          </v-alert>

          <v-btn
            block
            color='primary'
            type="submit"
            size="large"
            :loading="loading"
            :disabled="!isEmailValid"
            class="mt-12 px-6"
          >
            {{ type === 'beta_access' ? 'Apply for Beta Access' : 'Join Waitlist' }}
          </v-btn>
        </v-form>

        <!-- Step 2: Additional Details -->
        <v-form
          v-else
          @submit.prevent="handleDetailsSubmit"
          class="details-form"
        >
          <div
            v-if="!detailsSubmitted"
            class="text-center mb-6"
          >
            <v-icon
              color="success"
              size="64"
              icon="mdi-check-circle"
              class="mb-4"
            />
            <h3 class="text-h5 font-weight-bold mb-2">Thank you!</h3>
            <p
              class="text-body-1 text-medium-emphasis"
              v-html="detailsMessage"
            ></p>
          </div>

          <div
            v-else
            class="text-center"
          >
            <v-icon
              color="success"
              size="64"
              icon="mdi-check-circle"
              class="mb-4"
            />
            <h3 class="text-h5 font-weight-bold mb-2">Thank you!</h3>
            <p class="text-body-1 text-medium-emphasis">{{ finalMessage }}</p>
          </div>

          <template v-if="!detailsSubmitted">
            <v-textarea
              v-model="applicationDetails"
              label="Your message"
              variant="outlined"
              density="comfortable"
              rows="4"
              :disabled="detailsSubmitted || loading"
              class="mb-4"
              :counter="DETAILS_LIMIT"
              :rules="[rules.detailsLimit]"
              @input="applicationDetails = ($event.target as HTMLTextAreaElement).value.slice(0, DETAILS_LIMIT)"
            />

            <v-btn
              v-if="!detailsSubmitted"
              block
              color="primary"
              type="submit"
              size="large"
              :loading="loading"
              class="px-6 mt-12"
            >
              Submit Additional Details
            </v-btn>
          </template>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>


<script setup lang="ts">
import { ref } from 'vue'
import { AccessRequestType } from '~/types/accessRequest'


const props = defineProps<{
  modelValue: boolean
  type: AccessRequestType
}>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

// Form state
const dialog = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})
const email = ref('')
const applicationDetails = ref('')
const loading = ref(false)
const error = ref('')
const isEmailValid = ref(false)
const submitted = ref(false)
const detailsSubmitted = ref(false)
const DETAILS_LIMIT = 1000;

const runtimeConfig = useRuntimeConfig()
const API_BASE_URL = runtimeConfig.public.apiBase


// Form validation rules
const rules = {
  required: (v: string) => !!v || 'This field is required',
  email: (v: string) => /.+@.+\..+/.test(v) || 'Please enter a valid email',
  detailsLimit: (v: string) => v.length <= DETAILS_LIMIT || `Maximum ${DETAILS_LIMIT} characters`
}

const benefits = computed(() => {
  return props.type === AccessRequestType.beta_access
    ? [
      'Use Kastor for free during the beta',
      'Help shape the product',
      'Early access to all features',
    ]
    : [
      'Be first to know when we launch',
      'Get exclusive early-bird pricing',
      'Stay updated on our progress'
    ]
})

const benefitsColor = computed(() => {
  return props.type === AccessRequestType.beta_access
    ? 'tertiary-darken-1'
    : 'secondary'
})


const waitlistDetailsMessage = `
    We'll notify you when we launch. <br>
    Optionally: please tell us why you're excited to use Kastor!
`

const betaDetailsMessage = `
    Please tell us why you're interested and how you'd be planning on using Kastor.
`

const detailsMessage = computed(() => {
  return props.type === AccessRequestType.beta_access ? betaDetailsMessage : waitlistDetailsMessage
})

const finalMessage = computed(() => {
  return props.type === AccessRequestType.beta_access
    ? "We'll review your application and get back to you within 48 hours."
    : "We'll notify you when we launch."
})

// Handle initial email submission
async function handleEmailSubmit() {
  if (!isEmailValid.value) return

  loading.value = true
  error.value = ''

  try {
    const response = await fetch(`${API_BASE_URL}/api/early-access-request/create`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email.value,
        request_type: props.type
      })
    })

    if (!response.ok) throw new Error('Failed to submit request')

    submitted.value = true
  } catch (e) {
    error.value = 'Something went wrong. Please try again.'
    console.error('Error submitting email:', e)
  } finally {
    loading.value = false
  }
}

// Handle additional details submission
async function handleDetailsSubmit() {
  if (!applicationDetails.value) return

  loading.value = true
  error.value = ''

  try {
    const response = await fetch(`${API_BASE_URL}/api/early-access-request/update`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email.value,
        application_details: applicationDetails.value
      })
    })

    if (!response.ok) throw new Error('Failed to submit details')

    detailsSubmitted.value = true
  } catch (e) {
    error.value = 'Something went wrong. Please try again.'
    console.error('Error submitting details:', e)
  } finally {
    loading.value = false
  }
}

// Handle dialog close
function handleClose() {
  dialog.value = false
  // Reset form state after animation completes
  setTimeout(() => {
    email.value = ''
    applicationDetails.value = ''
    error.value = ''
    submitted.value = false
    detailsSubmitted.value = false
  }, 300)
}
</script>

<style scoped>
.auth-card {
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1) !important;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  padding-left: 24px;
  padding-right: 24px;
}

.modal-gradient {
  background: linear-gradient(135deg,
      rgb(255, 255, 255) 0%,
      rgb(248, 250, 252) 100%);
}

.close-btn {
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 1;
}

.details-form {
  animation: fadeIn 0.3s ease-out;
}


@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Improved Typography */
.v-card-title {
  letter-spacing: -0.5px;
}

.auth-card .v-card-title {
  padding-left: 4px;
  padding-right: 4px;
}

.v-card-text {
  padding-top: 24px;
  padding-bottom: 24px;

}

@media (max-width: 700px) {
  .auth-card {
    padding-left: 4px;
    padding-right: 4px;
  }

  .v-dialog {
    margin: 0px;
    width: 100%;
  }

  .v-card-text {
    padding: 16px;
  }
}
</style>
