<template>
  <v-form>
    <div class="d-flex flex-wrap justify-center mt-6">
      <v-btn icon="mdi-cart-outline" size="x-large" variant="flat"></v-btn>
    </div>
    <div class="d-flex flex-wrap justify-center mt-6">
      <v-col class="d-column flex-wrap justify-center" col="12" sm="2">
        <v-text-field
          v-model="username"
          label="Usuario"
          required
        ></v-text-field>
        <v-text-field v-model="email" label="E-mail" required> </v-text-field>
      </v-col>
    </div>

    <v-sheet class="d-flex flex-wrap justify-center mt-4">
      <v-card
        v-for="producto in productos"
        :key="producto.id"
        class="ma-4 mb-4"
        elevation="8"
        height="340"
        width="340"
      >
        <v-img
          class="align-end text-white"
          height="100"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          cover
        >
        </v-img>
        <v-card-title>{{ producto.name }}</v-card-title>
        <v-card-subtitle class="pt-4">
          Precio: {{ producto.precio }} Euros
        </v-card-subtitle>
        <v-card-text>
          <div>{{ producto.desc }}</div>
        </v-card-text>
        <v-card-actions class="d-flex flex-wrap justify-center">
          <v-btn
            size="x-small"
            elevation="4"
            class="ma-2"
            variant="flat"
            color="warning"
          >
            Recojer en Tienda
            <v-icon end icon="mdi-checkbox-marked-circle"></v-icon
          ></v-btn>
          <v-btn
            size="x-small"
            elevation="4"
            class="my-2"
            variant="flat"
            color="error"
          >
            Enviar a Domicílio
            <v-icon end icon="mdi-checkbox-marked-circle"></v-icon
          ></v-btn>
        </v-card-actions>
      </v-card>
    </v-sheet>
  </v-form>
</template>

<script setup>
import { ref } from "vue";

const productos = ref([
  {
    id: 1,
    name: "Crema Afeitar",
    imagen: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
    desc: "lorem iso descripcion",
    precio: 120,
  },
  {
    id: 2,
    name: "Locion Afeitar",
    imagen: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
    desc: "lorem iso descripcion",
    precio: 220,
  },
]);
</script>
