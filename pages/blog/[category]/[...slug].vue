<script setup>
const { path } = useRoute()
const { data } = await useAsyncData(`content-${path}`, () => queryContent(path).findOne())
</script>

<template>
  <article>
    <v-btn
      :to="`/blog/${path.split('/')[2]}`"
      prepend-icon="mdi-arrow-left"
      variant="text"
      class="mb-4"
    >
      Back to Category
    </v-btn>

    <div v-if="data">
      <h1 class="text-h2 mb-4">{{ data.title }}</h1>
      
      <div class="d-flex align-center mb-6">
        <v-chip>{{ path.split('/')[2] }}</v-chip>
        <div class="ml-4 text-subtitle-1">
          {{ new Date(data.date).toLocaleDateString() }}
        </div>
      </div>

      <div class="prose">
        <ContentRenderer :value="data" />
      </div>
    </div>
  </article>
</template>

<style>
.prose {
  max-width: 65ch;
  margin: 0 auto;
}

.prose img {
  max-width: 100%;
  height: auto;
}

.prose h2 {
  margin-top: 2em;
  margin-bottom: 1em;
}

.prose p {
  margin-bottom: 1.5em;
  line-height: 1.6;
}
</style>
