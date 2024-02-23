<template>
  <v-text-field type="time" v-model="tiempo" label="Tiempo"></v-text-field>
</template>

<script setup>
import { ref } from "vue";
const tiempo = ref();
</script>
