<script setup>
const { path } = useRoute()
const { data } = await useAsyncData(`content-${path}`, () => queryContent(path).findOne())

useHead(() => ({
  title: data.value?.title ? `${data.value.title} | Kastor Blog` : 'Kastor Blog',
  meta: [
    { name: 'description', content: data.value?.description || '' },
    { property: 'og:title', content: data.value?.title || '' },
    { property: 'og:description', content: data.value?.description || '' },
  ]
}))



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
    <v-container>
      <!-- Header Section -->
      <div class="header-content py-8  mt-16">
        <blogBreadcrumb :current-title="data?.title" />

        <div
          v-if="data"
          class="post-header"
        >
          <h1 class="text-h2 mb-4">{{ data.title }}</h1>

          <p class="text-subtitle-1 text-medium-emphasis mb-8">
            {{ formatDate(data.date) }}
          </p>
        </div>
      </div>

      <!-- Article Content -->
      <div
        v-if="data"
        class="article-container"
      >
        <ContentRenderer :value="data" />
      </div>

      <!-- Navigation Footer -->
      <div class="navigation-footer mt-16 mb-8">
        <v-divider class="mb-8"></v-divider>

        <div class="d-flex justify-space-between align-center">
          <v-btn
            :to="`/blog`"
            prepend-icon="mdi-arrow-left"
            variant="text"
            color="primary"
            class="font-weight-bold"
          >
            Back to blog
          </v-btn>

          <v-btn
            v-if="false"
            to="/blog"
            append-icon="mdi-post"
            variant="text"
            color="primary"
            class="font-weight-bold"
          >
            All Posts
          </v-btn>
        </div>
      </div>
    </v-container>
  </div>
</template>

<style>
.blog-wrapper {
  min-height: calc(100vh - 64px);
  padding-top: 64px;
  width: 100%;
  padding: 1px;
  background: #f8fafc;
}

/* Header and footer max width */
.header-content,
.navigation-footer {
  max-width: 900px;
  margin: 0 auto;
}

/* Article container and content styling */
.article-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0;
}

.post-header h1 {
  color: rgba(0, 0, 0, 0.95);
  text-shadow: 0 1px 1px rgba(255, 255, 255, 0.5);
  line-height: 1.2;
}


/* Typography improvements for MDC Prose components */
/* Direct element targeting for content */
.article-container p {
  margin: 1.5rem 0 !important;
  font-size: 1.125rem !important;
  line-height: 1.8 !important;
  color: rgba(0, 0, 0, 0.85) !important;
}

.article-container h1 {
  font-size: 2.5rem !important;
  font-weight: 700 !important;
  margin: 3rem 0 2rem 0 !important;
  color: rgb(var(--v-theme-primary-darken-1)) !important;
  cursor: default !important;
  pointer-events: none !important;
}

.article-container h2 {
  font-size: 1.875rem !important;
  font-weight: 600 !important;
  margin: 3.5rem 0 1.5rem 0 !important;
  color: rgb(var(--v-theme-primary-darken-1)) !important;
  cursor: default !important;
  pointer-events: none !important;
}

.article-container h3 {
  font-size: 1.5rem !important;
  font-weight: 600 !important;
  margin: 2.5rem 0 1.25rem 0 !important;
  color: rgb(var(--v-theme-primary-darken-1)) !important;
  cursor: default !important;
  pointer-events: none !important;
}

/* To prevent any anchor behavior in headings */
.article-container h1 a,
.article-container h2 a,
.article-container h3 a {
  color: inherit !important;
  text-decoration: none !important;
  pointer-events: none !important;
  cursor: default !important;
}

.article-container ul,
.article-container ol {
  margin: 1.5rem 0 !important;
  padding-left: 2.5rem !important;
}

.article-container li {
  margin: 0.75rem 0 !important;
  padding-left: 0.5rem !important;
}



.article-container blockquote {
  margin: 2rem 0 !important;
  padding: 1rem 1.5rem !important;
  border-left: 4px solid var(--v-primary-base) !important;
  background: rgba(0, 0, 0, 0.03) !important;
  font-style: italic !important;
  color: rgba(0, 0, 0, 0.7) !important;
}

/* Responsive adjustments */
@media (max-width: 600px) {
  .article-content {
    padding: 1.5rem;
  }

  .post-header h1 {
    font-size: 2rem;
  }
}
</style>
