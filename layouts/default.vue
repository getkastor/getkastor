<template>
  <v-app>
    <NavBar :isBlog="true"/>

    <v-main>
      <v-container>
        <slot />
      </v-container>
    </v-main>

    <v-footer app>
      <v-container>
        <div class="text-center">
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
</style>