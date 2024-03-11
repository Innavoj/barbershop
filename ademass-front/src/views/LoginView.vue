<template>
  <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
  <v-sheet width="600" class="mx-auto">
    <v-btn type="submit" :to="{ name: 'login' }" prepend-icon="mdi-scissors-cutting" size="x-large" rounded="lg" block class="mt-2 bg-black" ><h1>BarberShop</h1></v-btn>
    <v-form class="mt-10 mb-5" @submit.prevent>
      <v-text-field v-model="email" label="Email"></v-text-field>

      <v-text-field v-model="password" label="Password"></v-text-field>
      <v-btn type="submit" block class="mt-2 bg-black"  @click.prevent="loginUser">Login</v-btn>
    </v-form>
    <nav>
      <router-link class="custom-link" :to="{ name: 'register' }">¿No tienes una cuenta? Registrate</router-link>
      <router-link class="custom-link" :to="{ name: 'forgot-password' }">Olvide mi contraseña</router-link>
    </nav>

  </v-sheet>
</v-main>

</template>

<script lang="ts"  setup>
import { Ref, ref } from 'vue';
import { useAppStore } from '@/store/appStore';
// import { useRouter } from 'vue-router';
import router from '@/router';


const email: Ref<string> = ref('');
const password: Ref<string> = ref('');
const feedback: Ref<string> = ref('');
const store = useAppStore();

const loginUser = async () => {
  feedback.value = "..."
  const response = await store.login(email.value, password.value)
  if (response) {
    feedback.value = "Successful login"
    router.push('/')
  } else {
    feedback.value = "Login error"
  }

  console.log(response)
}



</script>

<style scoped></style>
@/store/appStore