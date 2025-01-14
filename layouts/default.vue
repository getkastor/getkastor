<script setup lang="ts">
</script>

<template>
  <v-app>
    <NavBar />

    <v-main>
      <slot />
    </v-main>

    <v-footer class="bg-primary">
      <v-container>
        <div class="bg-primary">
          © {{ new Date().getFullYear() }} Kastor
        </div>
      </v-container>
    </v-footer>
  </v-app>
</template>

<style>
.main-container {
  max-width: 1200px !important;
  margin-left: auto !important;
  margin-right: auto !important;
  width: 100%;
  padding: 0 1rem;
}

@media (max-width: 600px) {
  .main-container {
    padding: 0 0.5rem;
  }
}

.v-main {
  padding-top: 0px !important;
  font-size: 1.125rem;
}

.v-container main-container {
  max-width: 1200px;
}
</style>