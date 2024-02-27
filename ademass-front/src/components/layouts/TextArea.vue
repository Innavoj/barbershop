<template>
  <v-textarea
    prepend-icon="mdi-comment-processing"
    clearable
    label="comentarios"
    v-model="text"
    variant="outlined"
  ></v-textarea>
</template>

<script setup>
import { ref } from "vue";
const text = ref("");
</script>
