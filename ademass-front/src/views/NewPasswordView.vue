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
      <h3 class="text-center pa-2">Restablecer la Password</h3>
      <v-form class="mt-5 mb-5" @submit.prevent>
        <v-text-field
          type="password"
          v-model="nuevapassword"
          label="New Password"
          prepend-inner-icon="mdi-lock-outline"
          :rules="Rules"
          required
          clearable
        ></v-text-field>

        <v-text-field
          type="password"
          v-model="confirmpassword"
          label="Confirm New Password"
          prepend-inner-icon="mdi-lock-outline"
          :rules="Rules"
          clearable
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

const Rules = [
  (v) => !!v || "Password is required",
  (v) => (v && v.length > 8) || "Password debe ser mayor que 8 characters",
  (v) => v.newpassword != v.confirmpassword || "La Password deben ser iguales",
];

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
