<template>
  <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
    <v-sheet width="600" class="mx-auto">
    <v-btn type="submit" :to="{ name: 'login' }" prepend-icon="mdi-scissors-cutting" size="x-large" rounded="lg" block class="mt-2 bg-black" ><h1>BarberShop</h1></v-btn>
    <v-form class="mt-10 mb-5" @submit.prevent>

      <h2>Recuperar la contraseña</h2>
      <p>Introduce tu correo electronico, te enviaremos información del proceso de recuperación</p>
      <v-text-field class="mt-5"  label="Email"></v-text-field>

      <v-btn type="submit" block class="mt-2 bg-black">Recuperar</v-btn>
    </v-form>

    <nav>
      <router-link class="custom-link" :to="{ name: 'register' }">¿No tienes una cuenta? Registrate</router-link>
      <router-link class="custom-link" :to="{ name: 'login' }">¿Tienes una cuenta? Inicia Sesión</router-link>
    </nav>
  </v-sheet>
</v-main>

</template>


<script lang="ts" setup>
</script>

<style>
</style>
