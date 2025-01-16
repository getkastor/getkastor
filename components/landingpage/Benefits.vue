<!-- components/Benefits.vue -->

<script setup lang="ts">
interface Benefit {
  title: string;
  description: string[];
  icon: string;
}

const benefits: Benefit[] = [
  {
    title: 'Instant Content, Effortlessly',
    description: [
      'Start creating in minutes',
      'Give Kastor an idea or a full brief',
      'Get perfect posts in seconds',
    ],
    icon: 'mdi-creation'
  },
  {
    title: 'Sounds Just Like You',
    description: [
      'Show Kastor your style or brand',
      'Your authentic voice in every post',
      'Stand out from AI-generated noise'
    ],
    icon: 'mdi-account-voice'
  },
  {
    title: 'Amplify Your Impact',
    description: [
      'Generate ideas and content in bulk',
      'Full campaigns in a few clicks',
      'Multiply content across every channel'
    ],
    icon: 'mdi-lightning-bolt'
  }
];
</script>

<template>
  <v-container
    fluid
    class="benefits-section py-16"
  >
    <div class="main-container">
      <h2 class="text-h3 text-center font-weight-black mb-12">Why Choose Kastor?</h2>
      <!-- <p class="text-subtitle-1 text-grey-darken-1 text-center mb-12 benefits-subtitle" >
        Create authentic content at scale without compromising your unique voice
      </p> -->
      <v-row
        justify="center"
        align="stretch"
      >
        <v-col
          v-for="benefit in benefits"
          :key="benefit.title"
          cols="12"
          md="4"
        >
          <div class="benefit-wrapper">
            <div class="benefit-icon-container">
              <v-icon
                :icon="benefit.icon"
                size="32"
                color="primary"
              />
            </div>
            <h3 class="text-h5 font-weight-bold mb-4">{{ benefit.title }}</h3>
            <ul class="benefit-list">
              <li
                v-for="(item, i) in benefit.description"
                :key="i"
                class="benefit-item"
              >
                <v-icon
                  size="16"
                  color="secondary"
                  class="mr-2"
                >mdi-check-circle</v-icon>
                {{ item }}
              </li>
            </ul>
          </div>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<style scoped>
.benefit-wrapper {
  position: relative;
  padding: 1rem;
  height: 100%;
}

.benefit-icon-container {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 72px;
  border-radius: 16px;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg,
      rgba(0, 179, 197, 0.15),
      rgba(0, 179, 197, 0.05));
}

.benefits-subtitle {
  font-size: 1.125rem;
}

.benefit-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.benefit-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 1rem;
  color: rgba(0, 66, 77, 0.9);
  font-size: 1.1rem;
  line-height: 1.5;
}

.benefit-item .v-icon {
  margin-top: 0.25rem;
  /* Align icon with first line of text */
}

.benefit-item:last-child {
  margin-bottom: 0;
}

@media (max-width: 960px) {
  .benefit-wrapper {
    padding: 1.5rem;
  }

  .benefit-item {
    font-size: 1rem;
  }
}
</style>
