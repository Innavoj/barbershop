<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar title="Título de la app" ><img src="../src/assets/ademass-logo.png" alt="Logo" width="200" style=" padding-right: 10px;"></v-app-bar>
     <Menu></Menu>
    <v-main class="d-flex align-center justify-center" >
      <v-col>
     <router-view />

  </v-col>
    </v-main>
  
  </v-layout>
</template>

<script setup lang="ts">
import Menu from './layouts/default/Menu.vue'
</script>
<style>

</style>