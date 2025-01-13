<!-- components/ContentTypesSection.vue -->
<template>
  <v-container fluid class="bg-surface-light py-16">
    <div class="content-type-section">
      <h2 class="text-h3 text-center font-weight-black mb-12">Create What You Need</h2>

      <!-- Desktop View (4 cards) - Show only on lg and up -->
      <v-row class="d-none d-xl-flex content-type-container-large">
        <v-col
          v-for="type in contentTypes"
          :key="type.title"
          cols="12"
          lg="3"
        >
          <v-card
            elevation="2"
            class="content-card h-100"
          >
          <!-- <div class="img-container pa-4">
            <v-img
              :src="type.image"
              height="300"
              cover
              class="align-end contained-img"
              gradient="to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 85%"
            >
              <div class="card-overlay pa-4">
                <h3 class="text-h5 font-weight-bold text-white mb-1">{{ type.title }}</h3>
                <p class="text-subtitle-2 text-white">{{ type.description }}</p>
              </div>
            </v-img>
          </div> -->
          <v-img
              :src="type.image"
              height="250"
              cover
              class="align-end"

            >
            </v-img>
            <v-card-title class="text-h5 pt-4">{{ type.title }}</v-card-title>
            <v-card-text>
              <p class="text-subtitle-1">{{ type.description }}</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <!-- Desktop View with Slide Group -->
      <v-slide-group
        v-model="model"
        class="d-none d-md-flex d-xl-none align-center"
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
            elevation="2"
            :elevation="isSelected ? 8 : 2"
            class="content-card transition-swing"
          >
            <v-img
              :src="type.image"
              height="300"
              cover
              class="align-end"
              gradient="to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 85%"
            >
              <div class="card-overlay pa-4">
                <h3 class="text-h5 font-weight-bold text-white mb-1">{{ type.title }}</h3>
                <p class="text-subtitle-2 text-white">{{ type.description }}</p>
              </div>
            </v-img>
          </v-card>
        </v-slide-group-item>
      </v-slide-group>

      <!-- Mobile View with Stacked Cards -->
      <v-row class="d-flex d-md-none">
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
              height="250"
              cover
              class="align-end"
              gradient="to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 85%"
            >
              <div class="card-overlay pa-4">
                <h3 class="text-h5 font-weight-bold text-white mb-1">{{ type.title }}</h3>
                <p class="text-subtitle-2 text-white">{{ type.description }}</p>
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
    description: 'Engaging content that resonates with your audience.',
    image: '/final-tweet.png'
  },
  {
    title: 'Blog Articles',
    description: 'Well-structured posts that establish expertise.',
    image: '/final-blog.png'
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

.content-type-container-large {
  max-width: 1800px;
  margin-left: auto;
  margin-right: auto;
}
.content-card {
  transition: all 0.3s ease;
  overflow: hidden;
}

.card-overlay {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.img-container {
  position: relative;
  width: 100%;
  height: 300px;
}

.contained-img {
  object-fit: contain !important;
  width: 100%;
  height: 100%;
}

:deep(.v-slide-group__content) {
  justify-content: center;
  
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
/* .transition-swing {
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
} */
</style>