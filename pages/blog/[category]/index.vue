<script setup>
const route = useRoute()
const category = route.params.category

const { data: articles } = await useAsyncData(
  `articles-${category}`,
  () => queryContent('blog', category).find()
)
</script>

<template>
  <div>
    <v-btn
      to="/blog"
      prepend-icon="mdi-arrow-left"
      variant="text"
      class="mb-4"
    >
      Back to Blog
    </v-btn>

    <h1 class="text-h2 mb-6 text-capitalize">{{ category }}</h1>

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
