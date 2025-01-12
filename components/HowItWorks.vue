<script setup lang="ts">
import { ref, onMounted } from 'vue';



interface Steps {
  title: string;
  subtitle: string;
  details: string[];
  image: string;
}

// How it works
const steps: Steps[] = [
  {
    title: 'Show Kastor your style',
    subtitle: 'One-time, 5 minutes',
    details: [
      'Create a voice (or several)',
      'Share example content',
      'Tell Kastor your do\'s and don\'ts'
    ],
    image: '/how-it-works.png'
  },
  {
    title: 'Create a Brief',
    subtitle: 'In seconds',
    details: [
      'Pick what you want to create',
      'Choose your topic',
      'Give as little or as much detail as you want'
    ],
    image: '/how-it-works.png'
  },
  {
    title: 'Get your content in seconds',
    subtitle: 'No waiting',
    details: [
      'Choose from multiple options',
      'Edit, tweak, or publish as is',
      'Get more content whenever you want'
    ],
    image: '/how-it-works.png'
  }
];
</script>

<template>

    <v-container
      fluid
      class="bg-surface-light py-16"
    >
      <div class="main-container">
        <h2 class="text-h3 text-center font-weight-black mb-12">How it Works</h2>
        <div
          v-for="(type, index) in steps"
          :key="type.title"
          class="content-row"
        >
          <div class="content-text">
            <h3 class="text-h4 font-weight-bold mb-4">{{ type.title }}</h3>
            <p class="text-subtitle-1 mb-6">{{ type.subtitle }}</p>
            <v-list>
              <v-list-item
                v-for="(detail, i) in type.details"
                :key="i"
                :title="detail"
                density="comfortable"
              >
                <template v-slot:prepend>
                  <v-icon
                    color="secondary"
                    size="small"
                  >mdi-check-circle</v-icon>
                </template>
              </v-list-item>
            </v-list>
          </div>
          <div class="content-image">
            <v-img
              :src="type.image"
              
              cover
              class="rounded-lg"
            ></v-img>
          </div>
        </div>
      </div>
    </v-container>

</template>

<style scoped>

/* Content card styles */
.content-row {
  display: flex;
  gap: 2rem;
  margin-bottom: 6rem;
  align-items: center;
}

.content-row:nth-child(even) {
  flex-direction: row-reverse;
}

.content-text {
  flex: 0 0 30%;
  padding: 2rem;
}

.content-image {
  flex: 0 0 70%;
  max-width: 70%;
  /* This ensures the image container doesn't overflow */
}

@media (max-width: 959px) {
  .content-row {
    flex-direction: column !important;
    margin-bottom: 4rem;
    gap: 1rem;
  }

  .content-text {
    flex: 0 0 auto;
    width: 100%;
    order: -1;
    padding: 1rem;
  }

  .content-image {
    flex: 0 0 auto;
    width: 100%;
    max-width: 100%;
  }
}

/* Utility classes */
.gap-4 {
  gap: 1rem;
}

</style>