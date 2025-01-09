<template>
  <v-app>
    <v-app-bar>
      <v-container class="d-flex align-center">
        <v-app-bar-title>
          <NuxtLink to="/" class="text-decoration-none">Your Site Name</NuxtLink>
        </v-app-bar-title>
        <v-spacer></v-spacer>
        <v-btn to="/" variant="text">Home</v-btn>
        <v-btn to="/blog" variant="text">Blog</v-btn>
      </v-container>
    </v-app-bar>

    <v-main>
      <v-container>
        <slot />
      </v-container>
    </v-main>

    <v-footer app>
      <v-container>
        <div class="text-center">
          © {{ new Date().getFullYear() }} Your Site Name
        </div>
      </v-container>
    </v-footer>
  </v-app>
</template>
