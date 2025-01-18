<template>
  <v-app>
    <NavBar :isBlog="true"/>

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
.v-main {
  padding-top: 68px !important;
  font-size: 1.125rem;
}

a {
  color: rgb(var(--v-theme-secondary-darken-1)) !important;
}
</style>