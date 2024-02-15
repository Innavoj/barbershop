<template>
  <v-app>
    <v-layout class="rounded rounded-md">
      <AppBar>
        <template v-slot>
          <v-btn prepend-icon="mdi-account">
            <template v-slot:prepend>
              <v-icon color="success"></v-icon>
            </template>
            Hola Usuario
          </v-btn>
          <v-btn prepend-icon="mdi-power">
            <template v-slot:prepend>
              <v-icon color="success"></v-icon>
            </template>
            Cerrar Sesión
          </v-btn>
        </template>
      </AppBar>
      <Menu></Menu>
      <v-main class="d-flex align-center justify-center">
        <v-col>
          <slot name="main"></slot>

        </v-col>
      </v-main>
    </v-layout>
  </v-app>
</template>

<script lang="ts" setup>
import AppBar from '../../components/AppBar.vue'
import Menu from '../../components/Menu.vue'
import Footer from '../../components/Footer.vue'
</script>

<style scoped></style>
