<template>

  <div v-if="isLayoutA()">
    <v-layout class="rounded rounded-md">
      <v-app-bar class="bg-black" title="BarberShop">
      <v-btn
        prepend-icon="mdi-account"
      >
        <template v-slot:prepend>
          <v-icon color="success"></v-icon>
        </template>
        Hola Usuario
      </v-btn>
      <v-btn
        prepend-icon="mdi-power"
      >
        <template v-slot:prepend>
          <v-icon color="success"></v-icon>
        </template>
        Cerrar Sesión
      </v-btn>



      </v-app-bar>
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
import Login from './layouts/login/Login.vue'

const isLayoutA = () => {
  const route = useRoute();
  return route.meta.requiredAuth;
};


</script>

<style>
:root {
  --color-primary: white;
  --color-secondary: black;
  --color-tertiary: #ccc;
  --aqua: #33b5bd;
}

.custom-link {
  text-decoration: none;
  color: var(--aqua);
}

nav {
  display: flex;
  justify-content: space-between;
}


</style>

