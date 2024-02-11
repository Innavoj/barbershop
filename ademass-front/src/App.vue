<template>
  <div v-if="isLayoutA()">
    <v-layout class="rounded rounded-md">
      <v-app-bar title="Título de la app"><img src="../src/assets/ademass-logo.png" alt="Logo" width="200"
          style=" padding-right: 10px;"></v-app-bar>
      <Menu></Menu>
      <v-main class="d-flex align-center justify-center">
        <v-col>
          <router-view />
        </v-col>
      </v-main>

    </v-layout>
  </div>
  <div v-else>
    <Login>
      <template #main>
        <router-view></router-view>
      </template>
    </Login>
  </div>
</template>

<script setup lang="ts">
import Menu from './layouts/default/Menu.vue'
import { useRoute } from 'vue-router';
import Login from '@/layouts/login/Login'

const isLayoutA = () => {
  const route = useRoute();
  return route.meta.requiredAuth;
};
</script>
<style></style>

