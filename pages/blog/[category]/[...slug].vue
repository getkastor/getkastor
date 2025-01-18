<script setup>
const { path } = useRoute()
const { data } = await useAsyncData(`content-${path}`, () => queryContent(path).findOne())

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
      <div class="header-content py-8">
        <blogBreadcrumb :current-title="data?.title"/>

        <div
          v-if="data"
          class="post-header"
        >
          <h1 class="text-h2 mb-4">{{ data.title }}</h1>

          <p class="text-subtitle-1 text-medium-emphasis mb-8">
            {{ formatDate(data.date) }}
          </p>

          <v-divider class="mb-8"></v-divider>
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
            :to="`/blog/${path.split('/')[2]}`"
            prepend-icon="mdi-arrow-left"
            variant="text"
            color="primary"
            class="font-weight-bold"
          >
            Back to {{ path.split('/')[2] }}
          </v-btn>

          <v-btn
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


/* Typography improvements for the content */
.article-content {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  line-height: 1.7;
  color: rgba(0, 0, 0, 0.85);
}

.article-content h2 {
  font-size: 1.75rem;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  color: rgba(0, 0, 0, 0.9);
}

.article-content h3 {
  font-size: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 0.75rem;
  color: rgba(0, 0, 0, 0.9);
}

.article-content p {
  margin-bottom: 1.5rem;
  font-size: 1.125rem;
}

.article-content ul,
.article-content ol {
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;
}

.article-content li {
  margin-bottom: 0.5rem;
}

.article-content img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin: 2rem 0;
}

.article-content pre {
  background: #f8fafc;
  padding: 1rem;
  border-radius: 8px;
  overflow-x: auto;
  margin: 1.5rem 0;
}

.article-content code {
  background: #f1f5f9;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-size: 0.9em;
}

.article-content blockquote {
  border-left: 4px solid #00B3C5;
  margin: 1.5rem 0;
  padding: 0.5rem 0 0.5rem 1.5rem;
  background: #f0f4f8;
  border-radius: 0 8px 8px 0;
  font-style: italic;
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
