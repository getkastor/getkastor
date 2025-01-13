<!-- components/EarlyAccessModal.vue -->
<template>
  <v-dialog
    v-model="dialog"
    max-width="500"
    persistent
    :scrim="loading ? '#000000' : undefined"
  >
    <v-card class="auth-card">
      <!-- Step 1: Email Collection -->
      <v-card-title
        v-if="!submitted"
        class="text-center text-h5 font-weight-bold pt-6 pb-2"
      >
        {{ type === 'beta_access' ? 'Join the Beta' : 'Join the Waitlist' }}
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
            class="mb-2"
            :disabled="loading"
          />

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
            :color="type === 'beta_access' ? 'secondary' : 'primary'"
            type="submit"
            size="large"
            :loading="loading"
            :disabled="!isEmailValid"
            class="mt-4 mb-2"
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
          <div class="text-center mb-6">
            <v-icon
              color="success"
              size="64"
              icon="mdi-check-circle"
              class="mb-4"
            />
            <h3 class="text-h5 font-weight-bold mb-2">Thank you!</h3>
            <p class="text-body-1 text-medium-emphasis">
              {{ type === 'beta_access'
                ? "We'll review your application and get back to you soon."
                : "We'll notify you when we launch." }}
            </p>
          </div>

          <v-textarea
            v-model="applicationDetails"
            label="Optionally, tell us why you're interested and how you'd be planning on using Kastor"
            variant="outlined"
            density="comfortable"
            bg-color="grey-lighten-5"
            rows="4"
            :disabled="detailsSubmitted || loading"
            class="mb-4"
          />

          <v-btn
            v-if="!detailsSubmitted"
            block
            color="primary"
            type="submit"
            size="large"
            :loading="loading"
            class="mb-2"
          >
            Submit Additional Details
          </v-btn>
        </v-form>
      </v-card-text>

      <!-- Close button -->
      <v-card-actions class="justify-center pb-4">
        <v-btn
          variant="text"
          @click="handleClose"
          :disabled="loading"
        >
          Close
        </v-btn>
      </v-card-actions>
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
// TO DO: check how to edit for production
const API_BASE_URL = 'http://localhost:3001'

// Form validation rules
const rules = {
  required: (v: string) => !!v || 'This field is required',
  email: (v: string) => /.+@.+\..+/.test(v) || 'Please enter a valid email'
}

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

/* Make form inputs stand out a bit */
:deep(.v-field) {
  border-radius: 8px;
  transition: transform 0.2s, box-shadow 0.2s;
}

:deep(.v-field:hover) {
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

/* Reduce input height for compact look */
:deep(.v-field .v-field__input) {
  min-height: 40px;
  padding-top: 0;
  padding-bottom: 0;
}
</style>
