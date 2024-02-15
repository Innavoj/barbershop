<template>

  <div v-if="isLayoutA()">
    <v-layout class="rounded rounded-md">
      <v-app-bar class="bg-black" title="BarberShop">
        <router-link class="router-link" to="/login" style="color: #fff;">
          <v-btn prepend-icon="mdi mdi-login">
            <template v-slot:prepend>
              <v-icon color="primary"></v-icon>
            </template>
            Iniciar sesión
          </v-btn>
        </router-link>
        <router-link class="router-link" to="/register" style="color: #fff;">
          <v-btn prepend-icon="mdi mdi-account-plus">
            <template v-slot:prepend>
              <v-icon color="primary"></v-icon>
            </template>
            Regristrarse
          </v-btn>
        </router-link>
    </v-app-bar>
      <Menu v-if="!isLayoutA"></Menu>
      <v-main class="d-flex align-center justify-center">
        <v-col class="pa-0">
          <router-view />
          <Footer/>
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
import Footer from './components/Footer.vue'

const isLayoutA = () => {
  const route = useRoute();
  console.log('route', route);
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

