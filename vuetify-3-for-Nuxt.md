# Detailed Vuetify Setup in Nuxt 3
Note: this comes from
https://vuetifyjs.com/en/getting-started/installation/#manual-setup
but I'm adding some comments

## Creating a New Nuxt Project

1. Initialize a new Nuxt project:
```bash
npx nuxi@latest init <project-name>
cd <project-name>
yarn
```

## Installing Vuetify Dependencies

Install the required Vuetify modules:
```bash
yarn add -D vuetify vite-plugin-vuetify
yarn add @mdi/font
```

## Configuration

### Nuxt Configuration
Create or update your `nuxt.config.ts`:

```typescript
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})
```

### Vuetify Plugin Setup

Create `~/plugins/vuetify.ts`(you may need to create the `plugins` directory):

```typescript
// Import Material Design Icons
import '@mdi/font/css/materialdesignicons.css'

// Import Vuetify styles
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    // Your Vuetify configuration here
  })
  app.vueApp.use(vuetify)
})
```

## App Layout Setup

Create or update `app.vue`:

```vue
<template>
  <NuxtLayout>
    <v-app>
      <NuxtPage />
    </v-app>
  </NuxtLayout>
</template>

```
Note: it will complain about NuxtPae until you create pages/index.vue

## Notes

- The `vite-plugin-vuetify` plugin is configured to handle asset URLs automatically through `transformAssetUrls`
- Material Design Icons are included via `@mdi/font` package
- Vuetify styles are imported in the plugin file
- The plugin is automatically loaded by Nuxt since it's in the `plugins` directory

## Directory Structure

After setup, your project structure should look like this:
```
your-project/
├── app.vue
├── layouts/
│   └── default.vue (optional)
├── plugins/
│   └── vuetify.ts
├── nuxt.config.ts
└── package.json
```