<template>
  <div v-if="isLayoutA()">
    <DashBoard>
      <template #main>
        <router-view></router-view>
      </template>
    </DashBoard>
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

import { useRoute } from 'vue-router';
import Login from './layouts/login/Login.vue'
import DashBoard from './layouts/dashboard/Dashboard.vue'

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


