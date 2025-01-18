<script setup>
const route = useRoute()
const category = route.params.category

const { data: articles } = await useAsyncData(
  `articles-${category}`,
  () => queryContent('blog', category).find()
)


const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<template>
  <div class="blog-wrapper">
    <v-container class="main-content">
      <!-- Header Section -->
      <div class="header-content py-16">
        <blogBreadcrumb />

        <h1 class="text-h2 mb-4 text-capitalize">{{ category }}</h1>
        <p class="text-subtitle-1 text-medium-emphasis">
          Articles in the {{ category }} category
        </p>
      </div>

      <!-- Articles List -->
      <div class="articles-list">
        <div
          v-for="article in articles"
          :key="article._path"
          class="article-item pa-6 mb-4"
        >
          <NuxtLink 
            :to="article._path"
            class="text-decoration-none"
          >
            <div class="d-flex flex-column flex-md-row align-md-center justify-space-between">
              <div>
                <h2 class="text-h5 mb-2 text-surface-dark">{{ article.title }}</h2>
                <p class="text-subtitle-2 text-medium-emphasis mb-2">
                  {{ formatDate(article.date) }}
                </p>
                <p class="text-body-1 text-medium-emphasis">{{ article.description }}</p>
              </div>
              <v-btn
                color="primary"
                variant="text"
                class="mt-2 mt-md-0 ml-md-4 font-weight-bold"
                density="comfortable"
              >
                Read More
                <v-icon end>mdi-arrow-right</v-icon>
              </v-btn>
            </div>
          </NuxtLink>
        </div>
      </div>
    </v-container>
  </div>
</template>

<style>
.blog-wrapper {
  min-height: calc(100vh - 64px);
  width: 100%;
  padding: 1px;
  background: #f8fafc;
}

.header-content,
.articles-list {
  max-width: 900px;
  margin: 0 auto;
}

.article-item {
  background: #f0f4f8;
  border-radius: 8px;
  transition: all 0.3s ease;
  margin-bottom: 1rem;
  border-left: 4px solid #00B3C5;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
}

.article-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.article-item h2 {
  color: rgba(0, 0, 0, 0.95);
  text-shadow: 0 1px 1px rgba(255, 255, 255, 0.5);
}

.article-item .text-medium-emphasis {
  color: rgba(0, 0, 0, 0.75) !important;
}

.article-item .primary--text {
  color: rgb(0, 99, 144) !important;
}

.article-item a {
  color: inherit;
}

.header-content h1,
.header-content p {
  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.8);
}
</style>
