<template>
  <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
  <v-sheet width="600" class="mx-auto">
    <v-btn type="submit" :to="{ name: 'login' }" prepend-icon="mdi-scissors-cutting" size="x-large" rounded="lg" block class="mt-2 bg-black"><h1>BarberShop</h1></v-btn>
    <v-form class="mt-10 mb-5" @submit.prevent>
      <v-text-field v-model="name" label="Name"></v-text-field>
      <v-text-field v-model="lastname" label="Lastname"></v-text-field>

      <v-text-field v-model="email" label="Email"></v-text-field>
      <v-text-field v-model="password" label="Password"></v-text-field>
      <v-btn type="submit" rounded="lg" block  class="mt-2 bg-black" @click.prevent="registerUser">Register</v-btn>
    </v-form>

    <nav>
      <router-link class="custom-link" :to="{ name: 'login' }">¿Tienes una cuenta? Inicia Sesión</router-link>
      <router-link class="custom-link" :to="{ name: 'forgot-password' }">Olvide mi contraseña</router-link>
    </nav>

  </v-sheet>
</v-main>
</template>

<script lang="ts"  setup>
import { Ref, ref } from 'vue';
import { useAppStore } from '@/store/app';

const name: Ref<string> = ref('');
const lastname: Ref<string> = ref('');
const email: Ref<string> = ref('');
const password: Ref<string> = ref('');
const feedback: Ref<string> = ref('');
const store = useAppStore();

const registerUser = async () => {
  feedback.value = "..."
  const response = await store.register(name.value, name.value, email.value, password.value)
  if (response === false) {
    feedback.value = "Login error"
  } else {
    feedback.value = "Login Succeded"
  }
}

</script>

<style scoped></style>
@/store/appStore