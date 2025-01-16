<!-- components/ContentTypes.vue -->
<script setup lang="ts">
interface ContentType {
  title: string;
  icon: string;
  description: string;
}

const contentTypes: ContentType[] = [
  {
    title: 'LinkedIn Posts',
    icon: 'mdi-linkedin',
    description: 'Professional content that builds authority'
  },
  {
    title: 'Tweets',
    icon: 'mdi-twitter',
    description: 'Engaging tweets that drive conversation'
  },
  {
    title: 'Marketing Emails',
    icon: 'mdi-email-newsletter',
    description: 'Emails that get opened and clicked'
  },
  {
    title: 'Blog Posts',
    icon: 'mdi-post-outline',
    description: 'SEO-optimized articles that convert'
  },
  {
    title: 'Full Campaigns',
    icon: 'mdi-view-grid-plus-outline',
    description: 'Coordinated content across channels'
  }
];
</script>

<template>
  <v-container
    fluid
    class="content-types-section py-16"
  >
    <div class="main-container">
      <h2 class="text-h3 text-center font-weight-black mb-12">Create Any Content</h2>


      <div class="d-flex flex-wrap justify-center">
        <v-hover
          v-for="type in contentTypes"
          :key="type.title"
          v-slot="{ isHovering, props }"
        >
          <div
            class="content-type-tile"
            v-bind="props"
            :class="{ 'tile-hover': isHovering }"
          >
            <div
              class="icon-wrapper"
              :class="{ 'icon-hover': isHovering }"
            >
              <v-icon
                :icon="type.icon"
                size="32"
                color="primary"
                class="icon-transition"
              ></v-icon>
            </div>
            <h3 class="text-h6 font-weight-bold text-center mt-4 mb-2">
              {{ type.title }}
            </h3>
            <p class="text-subtitle-2 text-center description-text">
              {{ type.description }}
            </p>
          </div>
        </v-hover>
      </div>
    </div>
  </v-container>
</template>

<style scoped>
.content-type-tile {
  padding: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.icon-wrapper {
  background: linear-gradient(135deg,
      rgba(var(--v-theme-primary), 0.12),
      rgba(var(--v-theme-primary), 0.05));
  width: 88px;
  height: 88px;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  margin-bottom: 0.5rem;
}

.icon-hover {
  transform: scale(1.05);
}

.icon-transition {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.description-text {
  max-width: 180px;
  margin: 0 auto;
  line-height: 1.5;
  transition: color 0.3s ease;
}



@media (max-width: 600px) {


  .icon-wrapper {
    width: 72px;
    height: 72px;
    border-radius: 20px;
  }

  .description-text {
    font-size: 0.875rem;
    max-width: 150px;
  }
}
</style>
