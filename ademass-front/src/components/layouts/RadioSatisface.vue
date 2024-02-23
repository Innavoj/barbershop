<template>
  <v-radio-group v-model="radio">
    <v-radio label="Satisfecho" value="Satisfecho"></v-radio>
    <v-radio label="No Satisfecho" value="NoSatisfecho"></v-radio>
  </v-radio-group>
</template>

<script setup>
import { ref } from "vue";
let radio = ref();
</script>
