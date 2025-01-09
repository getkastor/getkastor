<script setup>
const { data: articles } = await useAsyncData('articles', () => queryContent('blog').find(), {
  // Add cache options
  watch: true,
  // Refresh on route change
  refresh: true
});
const categories = [...new Set(articles.value.map(article => article._path.split('/')[2]))]
</script>

<template>
  <div>
    <h1 class="text-h2 mb-6">Blog</h1>
    
    <!-- Categories -->
    <v-row class="mb-6">
      <v-col>
        <v-chip-group>
          <v-chip
            v-for="category in categories"
            :key="category"
            :to="`/blog/${category}`"
            link
          >
            {{ category }}
          </v-chip>
        </v-chip-group>
      </v-col>
    </v-row>

    <!-- Articles -->
    <v-row>
      <v-col
        v-for="article in articles"
        :key="article._path"
        cols="12"
        md="6"
        lg="4"
      >
        <v-card :to="article._path" height="100%">
          <v-card-title>{{ article.title }}</v-card-title>
          <v-card-subtitle>{{ new Date(article.date).toLocaleDateString() }}</v-card-subtitle>
          <v-card-text>
            {{ article.description }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
