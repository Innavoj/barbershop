<template>
  <v-radio-group v-model="radio" inline>
    <v-radio label="Amable - Profesional" value="AP"></v-radio>
    <v-radio label="Amable - No Profesional" value="ANP"></v-radio>
    <v-radio label="Ingrato" value="Ingrato"></v-radio>
  </v-radio-group>
</template>

<script setup>
import { ref } from "vue";
const radio = ref("");
</script>
