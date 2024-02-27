<template>
  <v-radio-group v-model="radio" inline>
    <v-radio label="Excelente" value="Excelente"></v-radio>
    <v-radio label="Muy Buena" value="MBuena"></v-radio>
    <v-radio label="Buena" value="Buena"></v-radio>
    <v-radio label="Mala" value="Mala"></v-radio>
  </v-radio-group>
</template>

<script setup>
import { ref } from "vue";

let radio = ref();
</script>
