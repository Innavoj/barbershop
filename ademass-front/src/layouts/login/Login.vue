<template>
  <v-app>
    <v-layout class="rounded rounded-md">
      <v-app-bar color="surface-variant">

        <v-app-bar-title>Barbershop</v-app-bar-title>

        <template v-slot:append>

          <v-btn :to="{ name: 'login' }" append-icon="mdi-login">Login</v-btn>

          <v-btn :to="{ name: 'register' }" append-icon="mdi-account-plus">Register</v-btn>
        </template>
      </v-app-bar>

      <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
        <slot name="main"></slot>
      </v-main>
    </v-layout>
  </v-app>
</template>

<script lang="ts" setup>
</script>

<style scoped></style>
