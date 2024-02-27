<template>
  <v-select
    label="Frecuencia"
    :items="frecuencia"
    variant="solo-filled"
  ></v-select>
</template>

<script setup>
import { ref } from "vue";
const frecuencia = ref(["Semanal", "Quincenal", "Mensual", "Anual"]);
</script>
