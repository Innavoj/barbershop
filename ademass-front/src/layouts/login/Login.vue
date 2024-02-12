<template>
  <v-app>
    <v-layout class="rounded rounded-md">

      <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
        <slot name="main"></slot>
      </v-main>
    </v-layout>
  </v-app>
</template>

<script lang="ts" setup>
</script>

<style scoped></style>
