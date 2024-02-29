<template>
  <v-main class="d-flex align-center justify-center" style="min-height: 300px">
    <v-sheet width="600" class="mx-auto">
      <v-btn
        prepend-icon="mdi-scissors-cutting"
        size="x-large"
        rounded="lg"
        block
        class="mt-2 bg-black"
        ><h1>BarberShop</h1></v-btn
      >
      <v-form class="mt-10 mb-5" @submit.prevent>
        <v-text-field
          type="password"
          v-model="nuevapassword"
          label="New Password"
        ></v-text-field>
        <v-text-field
          type="password"
          v-model="confirmpassword"
          label="Confirm New Password"
        ></v-text-field>
        <v-btn
          type="submit"
          rounded="lg"
          block
          class="mt-2 bg-black"
          @click.prevent="newpassword"
          >Aceptar</v-btn
        >
      </v-form>

      <nav>
        <router-link class="custom-link" :to="{ name: 'login' }"
          >¿Tienes una cuenta? Inicia Sesión</router-link
        >
      </nav>
    </v-sheet>
  </v-main>
</template>

<script setup>
import { ref } from "vue";
import { useAppStore } from "@/store/app";

const nuevapassword = ref("");
const confirmpassword = ref("");
const feedback = ref("");
const store = useAppStore();

const newpassword = async () => {
  feedback.value = "...";
  const response = await store.newpassword(
    nuevapassword.value,
    confirmpassword.value
  );
  if (response === false) {
    feedback.value = "Password error";
  } else {
    feedback.value = "Password Succeded";
  }
};
</script>

<style scoped></style>
