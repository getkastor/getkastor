<script setup>
import { computed } from 'vue'
const route = useRoute()

const items = computed(() => {
  const pathSegments = route.path.split('/').filter(segment => segment)
  const breadcrumbs = [
    {
      title: 'Blog',
      href: '/blog',
      disabled: false
    }
  ]

  if (pathSegments.length > 1) {
    // Add category
    const category = pathSegments[1]
    breadcrumbs.push({
      title: category.charAt(0).toUpperCase() + category.slice(1),
      href: `/blog/${category}`,
      disabled: pathSegments.length === 2
    })
  }

  if (pathSegments.length > 2) {
    // Add article title - we'll pass this as a prop since we need to get it from the content
    if (props.currentTitle) {
      breadcrumbs.push({
        title: props.currentTitle,
        href: route.path,
        disabled: true
      })
    }
  }

  return breadcrumbs
})

const props = defineProps({
  currentTitle: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <v-breadcrumbs
    :items="items"
    class="px-0 py-4"
  >
    <template #divider>
      <v-icon
        icon="mdi-chevron-right"
        size="small"
        class="d-flex align-center"
      ></v-icon>
    </template>

    <template #title="{ item }">
      <NuxtLink
        v-if="!item.disabled"
        :to="item.href"
        class="text-primary text-decoration-none"
      >
        {{ item.title }}
      </NuxtLink>
      <span
        v-else
        class="text-medium-emphasis"
      >
        {{ item.title }}
      </span>
    </template>
  </v-breadcrumbs>
</template>

<style scoped>
.v-breadcrumbs {
  font-size: 0.875rem;
}


a.text-primary {
  color: rgb(var(--v-theme-primary)) !important;
  text-decoration: none;
}

:deep(a.text-primary) {
  color: rgb(var(--v-theme-primary)) !important;
  text-decoration: none;
  display: inline-block;
  /* Make the link a block to contain the hover area */
  padding-bottom: 2px;
  /* Add some space for the underline */
}

:deep(a.text-primary:hover) {
  color: rgb(var(--v-theme-primary)) !important;
  text-decoration: underline !important;
  text-decoration-color: rgb(var(--v-theme-primary)) !important;
  text-underline-offset: 2px;
  /* Align the underline with our padding */
}
</style>
