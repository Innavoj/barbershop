<template>
  <div v-if="isLayoutA">
    <v-layout class="rounded rounded-md">
      <v-app-bar class="custom-bg-color" title="BarberShop">
        <!-- <router-link class="router-link" :to="{ name: 'login' }" style="color: #fff;">
          <v-btn prepend-icon="mdi mdi-login">
            <template v-slot:prepend>
              <v-icon color="primary"></v-icon>
            </template>
            <span v-if="!isUser">Iniciar sesión</span>
            <span v-if="isUser">Cerrar sesión</span>
          </v-btn>
        </router-link> -->
        <router-link class="router-link" :to="{ name: 'login' }" style="color: #fff;" v-if="!isUser">
          <v-btn prepend-icon="mdi mdi-login">
            <template v-slot:prepend>
              <v-icon color="primary"></v-icon>
            </template>
            <span>Iniciar sesión</span>
            <!-- <span v-if="isUser">Cerrar sesión</span> -->
          </v-btn>
        </router-link>
          <v-btn prepend-icon="mdi mdi-login" v-else @click="logoutUser">
            <template v-slot:prepend>
              <v-icon color="primary"></v-icon>
            </template>
            <!-- <span v-if="!isUser">Iniciar sesión</span> -->
            <span>Cerrar sesión</span>
          </v-btn>
        <router-link class="router-link" to="/register" style="color: #fff;">
          <v-btn prepend-icon="mdi mdi-account-plus" v-if="!isUser">
            <template v-slot:prepend>
              <v-icon color="primary"></v-icon>
            </template>
            Registrarse
          </v-btn>
        </router-link>
      </v-app-bar>
      <Menu v-if="!isUser"></Menu>
      <v-main class="d-flex align-center justify-center">
        <v-col class="pa-0">
          <router-view />
          <Footer />
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
import { useRoute } from "vue-router";
import Login from "@/components/login/Login.vue";
import Footer from "@/components/layouts/Footer.vue";
import Menu from "./components/layouts/Menu.vue";
import { useAppStore } from "./store/appStore";
import { ref, watchEffect } from "vue";

const isLayoutA = () => {
  const route = useRoute();
  //console.log('route', route);
  return route.meta.requiredAuth;
};

const isUser = ref(true)
console.log(isUser)

const store = useAppStore();
let token = store.token;

const logoutUser = async () => {
  const response = await store.logout()

  console.log(response)
  if (response === "") {
    alert("logout exitoso")
    token = store.token;
  } else {
    alert("logout falló")
  }

  console.log(response)
}


// console.log('token desde app.vue', token)
watchEffect(() => {
  token = store.token;
    console.log('Token actualizado en app.vue', token);
    if (token) {
      isUser.value = true;
      console.log(isUser)
    } else {
      isUser.value = false;
  }
});
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
.custom-bg-color {
  background-color: rgb(80, 75, 75) !important;
  color: white !important;
}

nav {
  display: flex;
  justify-content: space-between;
}

/** Animaciones **/
@keyframes clipPath {
  from {
    clip-path: polygon(0% 72%, 25% 99%, 100% 65%, 100% 0%, 0% 0%);
  }
  to {
    opacity: 1;
  }
}

@keyframes show {
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0%);
  }
}
@keyframes showIcons {
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0%);
  }
}
@keyframes opacity {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes show-X {
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 0.5;
    transform: translateX(0%);
  }
}
/** Animaciones **/
</style>
./store/appStore
