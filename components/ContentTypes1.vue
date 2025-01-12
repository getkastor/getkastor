<!-- components/ContentTypesSection.vue -->
<template>
  <v-container fluid class="bg-surface-light py-16">
    <div class="main-container">
      <h2 class="text-h3 text-center font-weight-black mb-12">Create What You Need</h2>

      <!-- Desktop View with Slide Group -->
      <v-slide-group
        v-model="model"
        class="hidden-sm-and-down"
        show-arrows
        center-active
      >
        <v-slide-group-item
          v-for="type in contentTypes"
          :key="type.title"
          v-slot="{ isSelected, toggle, selectedClass }"
        >
          <v-card
            :class="['ma-4', selectedClass]"
            width="400"
            @click="toggle"
            elevation="2"
            :elevation="isSelected ? 8 : 2"
            class="content-card transition-swing"
          >
            <v-img
              :src="type.image"
              height="400"
              cover
              class="align-end"
              gradient="to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.7) 60%"
            >
              <div class="card-overlay pa-6">
                <h3 class="text-h5 font-weight-bold text-white mb-3">{{ type.title }}</h3>
                <p class="text-subtitle-1 text-white">{{ type.description }}</p>
              </div>
            </v-img>
          </v-card>
        </v-slide-group-item>
      </v-slide-group>

      <!-- Mobile View with Stacked Cards -->
      <v-row class="hidden-md-and-up">
        <v-col
          v-for="type in contentTypes"
          :key="type.title"
          cols="12"
        >
          <v-card
            elevation="2"
            class="content-card mx-auto"
            max-width="400"
          >
            <v-img
              :src="type.image"
              height="300"
              cover
              class="align-end"
              gradient="to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.7) 60%"
            >
              <div class="card-overlay pa-6">
                <h3 class="text-h5 font-weight-bold text-white mb-3">{{ type.title }}</h3>
                <p class="text-subtitle-1 text-white">{{ type.description }}</p>
              </div>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';

const model = ref(null);

const contentTypes = [
  {
    title: 'Social Posts',
    description: 'Create engaging social media content that resonates with your audience and drives meaningful interactions.',
    image: '/content-type.png'
  },
  {
    title: 'Blog Articles',
    description: 'Generate well-structured blog posts that establish your expertise and keep readers coming back for more.',
    image: '/content-type.png'
  },
  {
    title: 'Marketing Emails',
    description: 'Craft compelling email campaigns that connect with subscribers and drive conversions.',
    image: '/content-type.png'
  },
  {
    title: 'LinkedIn Posts',
    description: 'Build your professional brand with thought leadership content that speaks to your network.',
    image: '/content-type.png'
  }
];
</script>

<style scoped>
.content-card {
  transition: all 0.3s ease;
}

.content-card:hover {
  transform: translateY(-4px);
}

/* Ensure consistent card width on mobile */
@media (max-width: 959px) {
  .content-card {
    width: 100%;
  }
}

/* Add some breathing room between stacked cards */
.v-col {
  padding-bottom: 24px;
}

/* Smooth transitions for elevation changes */
.transition-swing {
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
}
</style>
