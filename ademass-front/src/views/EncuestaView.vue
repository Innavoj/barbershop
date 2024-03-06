<template>
  <v-form class="d-flex flex-wrap align-center justify-center mt-4">
    <v-sheet
      class="d-flex flex-wrap align-center justify-center"
      elevation="4"
      rounded
      max-width="80%"
      color="grey-lighten-2"
    >
      <h1 class="d-flex flex-wrap text-center overflow-auto">
        <v-icon icon="mdi-playlist-check" /> Encuesta de satisfación
      </h1>
      <v-divider></v-divider>

      <v-card
        class="d-flex flex-wrap flex-column justify-start overflow-auto mt-4 mb-4"
        elevation="10"
        height="600"
        width="70%"
      >
        <div
          class="d-flex flex-wrap justify-start overflow-auto text-h6 ma-4 mt-4"
        >
          <div
            class="d-flex flex-wrap justify-start text-h6 ma-4 mt-4"
            v-for="(pregunta, index) in preguntas"
            :key="index"
          >
            <strong class="d-flex flex-wrap">{{ pregunta.title }}</strong>
            <v-rating
              class="d-flex flex-wrap"
              v-model="pregunta.rating"
              size="large"
              color="yellow-darken-3"
              hover
              half-increments
            ></v-rating>
            <span>{{ pregunta.rating }}</span>
            <v-progress-linear
              class="d-flex flex-wrap"
              v-model="pregunta.power"
              :model-value="pregunta.rating * pregunta.power"
              color="cyan"
              height="20"
              striped
              ><strong class="d-flex flex-wrap text-h6"
                >{{ pregunta.rating * pregunta.power }} %</strong
              ></v-progress-linear
            >
          </div>
        </div>
      </v-card>
      <v-divider></v-divider>
      <v-tooltip :location="location" :origin="origin" no-click-animation>
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" class="ma-2" color="cyan"
            >Aceptar <v-icon end icon="mdi-checkbox-marked-circle"></v-icon
          ></v-btn>
          <v-btn class="ma-2">
            <v-icon start icon="mdi-minus-circle"></v-icon>
            Cancel
          </v-btn>
        </template>

        <div>Enviar Encuesta</div>
      </v-tooltip>
    </v-sheet>
  </v-form>
</template>

<script setup>
import { computed, reactive, ref } from "vue";

const preguntas = reactive([
  {
    title: "Experiencia general:",
    rating: 1,
    power: 20,
  },
  {
    title: "Servicios específicos:",
    rating: 1,
    power: 20,
  },
  {
    title: "Comunicación:",
    rating: 1,
    power: 20,
  },
  {
    title: "Atención al cliente:",
    rating: 1,
    power: 20,
  },
  {
    title: "Satisfacción con el resultado:",
    rating: 1,
    power: 20,
  },
]);

const locationSide = ref("top");
const locationAlign = ref("center");
const originSide = ref("auto");
const originAlign = ref("");

const location = computed(() => {
  return `${locationSide.value} ${locationAlign.value}`;
});
const origin = computed(() => {
  return originDisabled.value
    ? originSide.value
    : `${originSide.value} ${originAlign.value}`;
});
const code = computed(() => {
  return `<v-tooltip location="${location.value}" origin="${origin.value}" />`;
});
const originDisabled = computed(() => {
  return ["auto", "overlap"].includes(originSide.value);
});
</script>

<style scoped>
.v-card:hover {
  background-color: rgb(236, 235, 213);
}

@media only screen and (max-width: 320px) {
  .v-sheet {
    max-width: 100%;
    flex-direction: flex;
    flex-wrap: wrap;
  }
  v-form {
    max-width: 100%;
    flex-direction: flex;
    flex-wrap: wrap;
  }
  .v-card {
    max-width: 100%;
    background-color: rgb(112, 218, 218);
    flex-direction: column;
    flex-wrap: wrap;
  }
  .v-progress-linear {
    color: brown;
  }
}
</style>
