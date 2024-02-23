<template>
  <v-radio-group v-model="radio" inline="">
    <v-radio label="Si" value="Si"></v-radio>
    <v-radio label="No" value="No"></v-radio>
  </v-radio-group>
</template>

<script setup>
import { ref } from "vue";
let radio = ref();
</script>
