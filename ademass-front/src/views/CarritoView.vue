<template>
  <v-form>
    <div class="d-flex flex-wrap justify-center mt-6">
      <v-btn icon="mdi-cart-outline" size="x-large" variant="flat">
        <v-badge :content="productos.length" color="error"
          ><v-icon>mdi-cart-outline</v-icon></v-badge
        >
      </v-btn>
    </div>

    <v-sheet class="d-flex flex-column flex-wrap justify-center mt-4">
      <h2 v-show="(productos.length == 0)"
        class="flex-wrap text-center justify-center"
        style="color: rgb(255, 81, 0)"
      >
        La Cesta esta Vacia
      </h2>
      <h2 v-show="(productos.length > 0)"
        class="flex-wrap text-center justify-center"
        style="color: rgb(255, 81, 0)"
      >
        Productos en la Cesta
      </h2>
      <div class="d-flex flex-row flex-wrap justify-center">
        <v-card
          v-for="cesta in productos"
          :key="cesta.id"
          class="ma-4 mb-4 flex-wrap justify-center"
          elevation="8"
          height="210"
          width="180"
        >
          <div class="d-flex flex-wrap justify-center">
            <img
              class="pa-2 justify-center"
              height="90vh"
              :src="cesta.src"
            >
            </img>
            <span v-if="cesta.rebaja" style="color: red;"><strong>10% dcto</strong></span>
          </div>
          <v-card-title>{{ cesta.name }}</v-card-title>
          <v-card-subtitle class="bg-cyan">
            Precio: {{ cesta.precio }} €
          </v-card-subtitle>
          <v-btn
            @click="eliminarcesta(cesta.id)"
            class="ma-4"
            size="x-small"
            rounded="lg"
            color="error"
            ><v-icon start icon="mdi-minus-circle"></v-icon>Eliminar</v-btn
          >
        </v-card>
      </div>
      <h3 class="flex-wrap text-center" style="color: rgb(255, 81, 0)">
        Total a pagar: <span>{{ pagototal }} €</span>
      </h3>

      <v-divider></v-divider>
      <div class="d-flex flex-row flex-wrap justify-center">
        <v-btn @click="recojertienda()" class="ma-2" color="warning"
          >Recojer en Tienda<v-icon
            end
            icon="mdi-checkbox-marked-circle"
          ></v-icon
        ></v-btn>
        <v-btn
          @click="enviardomicilio()"
          variant="outlined"
          class="ma-2"
          color="success"
          >Envio a Domicilio<v-icon
            end
            icon="mdi-checkbox-marked-circle"
          ></v-icon
        ></v-btn>
      </div>
    </v-sheet>
  </v-form>
</template>

<script setup>
import { computed, ref, reactive } from "vue";

const productos = reactive([
  {
    id: 1,
    name: "Crema Afeitar",
    src: "https://m.media-amazon.com/images/I/51qHyIgmwQL.__AC_SX300_SY300_QL70_ML2_.jpg",
    desc: "La mejor Crema de Afeitar",
    precio: 480,
    rebaja: true,
  },
  {
    id: 2,
    name: "Locion Afeitar",
    src: "https://m.media-amazon.com/images/I/71DNKjC51VL._SX522_.jpg",
    desc: "La mejor locion de afeitar barbas",
    precio: 320,
    rebaja: false,
  },
  {
    id: 3,
    name: "Maquina Afeitar",
    src: "https://images-eu.ssl-images-amazon.com/images/I/71jzVn57g6L._AC_UL160_SR160,160_.jpg",
    desc: "La mejor maquina de afeitar barbas",
    precio: 120,
    rebaja: true,
  },
  {
    id: 3,
    name: "Maquina Afeitar",
    src: "https://images-eu.ssl-images-amazon.com/images/I/71jzVn57g6L._AC_UL160_SR160,160_.jpg",
    desc: "La mejor maquina de afeitar barbas",
    precio: 120,
    rebaja: true,
  },
]);

let cant = ref(0);

const pagototal = computed(() => {
  let suma = 0;
  for (let key = 0; key < productos.length; key++) {
    suma = suma + productos[key].precio;
  }
  return suma;
});
function eliminarcesta(id) {
  alert("eliminar id: " + id);
}
</script>


<style scoped>
.v-card:hover{
  background-color: blueviolet;
}
</style>