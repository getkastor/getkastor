# Setting up a Nuxt 3 + Vuetify project with GitHub Pages deployment

## Initial Project Setup

1. Create a new Nuxt project:
```bash
npx nuxi init my-website
cd my-website
```

2. Follow documentation to setup Vuetify 3 with Nuxt 3:
https://vuetifyjs.com/en/getting-started/installation/#manual-setup
the steps I followed with more comments are in ./vuetify-3-for-Nuxt.md


3. Configure `nuxt.config.ts` for GitHub Pages deployment:
```typescript
export default defineNuxtConfig({
  /* ... */
  app: {
    baseURL: '/your-repo-name/' // Add this for GitHub Pages
  },
/* ... */
})
``` 


## Project Structure
Basic project structure should look like this:
```
.
├── README.md
├── app.vue
├── nuxt.config.ts
├── package.json
├── pages/
│   └── index.vue
├── plugins/
│   └── vuetify.ts
├── public/
│   ├── favicon.ico
│   └── robots.txt
├── server/
│   └── tsconfig.json
├── tsconfig.json
└── yarn.lock
```

## GitHub Pages Deployment Setup

1. Create a new repository on GitHub

2. Create GitHub Actions workflow file:
```bash
mkdir -p .github/workflows
```

3. Create `.github/workflows/deploy.yml`:
You can copy the one in this directory, no customization needed
it's also available at
https://nuxt.com/deploy/github-pages


4. Configure GitHub Repository Settings:
- Go to repository Settings > Pages
  - Under "Build and deployment", select "GitHub Actions"
- Go to Settings > Actions > General
  - Under "Workflow permissions", select "Read and write permissions"
  - Save changes

## Deployment

The site will automatically deploy when you push to the main branch if you have uncommented the line 

```yml
  # push:
  #   branches:
  #     - main
```


To deploy manually:
1. Go to Actions tab on GitHub
2. Click "Deploy to GitHub Pages" workflow
3. Click "Run workflow" button
4. Select main branch and click "Run workflow"

Your site will be available at: `https://your-username.github.io/your-repo-name`
You'll see the url in settings > pages

## Adding Blog Functionality (Optional)

If you want to add a blog later:

1. Install Nuxt Content:
```bash
yarn add @nuxt/content
```

2. Update `nuxt.config.ts`:
```typescript
export default defineNuxtConfig({
  modules: [
    'vuetify-nuxt-module',
    '@nuxt/content'
  ],
  content: {
    highlight: {
      theme: 'github-light'
    }
  },
  // ... rest of your config
})
```

3. Create content structure:
```bash
mkdir -p content/blog
```

This will allow you to write blog posts in Markdown format in the `content/blog` directory.