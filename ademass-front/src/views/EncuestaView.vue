<template>
  <v-sheet
    class="d-flex flex-wrap justify-center mx-auto mt-4 overflow-auto"
    elevation="4"
    rounded
    max-width="90%"
    color="grey-lighten-2"
  >
    <h1 class="d-flex flex-wrap text-center overflow-auto">
      <v-icon icon="mdi-playlist-check" /> Encuesta de satisfación
    </h1>
    <v-divider></v-divider>
    <v-form class="d-flex flex-wrap justify-center overflow-auto">
      <!--  Tarjeta Encuesta-->
      <v-card
        v-for="pregunta in preguntas"
        :key="pregunta.title"
        class="ma-4 d-column flex-wrap justify-start"
        elevation="4"
        width="40vw"
      >
        <v-card-title>
          {{ pregunta.title }}
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text v-for="(i, index) in pregunta.quest" :key="index">
          <strong>{{ i.quests }}</strong>
          <!-- Componente dinamico-->
          <v-col col="10" sm="11">
            <component :is="i.componente"></component>
          </v-col>
        </v-card-text>
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
    </v-form>
  </v-sheet>
</template>

<script setup>
import { computed, ref, defineAsyncComponent } from "vue";

const InputTime = defineAsyncComponent(() =>
  import("@/components/layouts/ImputTime.vue")
);
const RadioAP = defineAsyncComponent(() =>
  import("@/components/layouts/RadioAP.vue")
);

const RadioCalf = defineAsyncComponent(() =>
  import("@/components/layouts/RadioCalf.vue")
);

const RadioSatisface = defineAsyncComponent(() =>
  import("@/components/layouts/RadioSatisface.vue")
);
const RadioSN = defineAsyncComponent(() =>
  import("@/components/layouts/RadioSN.vue")
);
const SelectFR = defineAsyncComponent(() =>
  import("@/components/layouts/SelectFR.vue")
);

const TextArea = defineAsyncComponent(() =>
  import("@/components/layouts/TextArea.vue")
);

const layout = ref();
const handleLayout = (cmp) => (layout.value = cmp);

const preguntas = [
  {
    title: "Experiencia general:",
    quest: [
      {
        quests: "¿Cómo calificaría su experiencia general en la peluquería?",
        componente: handleLayout(RadioCalf),
      },
      {
        quests: "¿Con qué frecuencia visita nuestra peluquería?",
        componente: handleLayout(SelectFR),
      },
      {
        quests: "¿Recomendaría nuestra peluquería a amigos/familiares?",
        componente: handleLayout(RadioSN),
      },
    ],
  },
  {
    title: "Servicios específicos:",
    quest: [
      {
        quests: "Calidad del corte/peinado.",
        componente: handleLayout(RadioCalf),
      },
      {
        quests: "Tiempo de espera.",
        componente: handleLayout(InputTime),
      },
      {
        quests: "Amabilidad y profesionalismo del personal.",
        componente: handleLayout(RadioAP),
      },
      {
        quests: "Limpieza e higiene del salón.",
        componente: handleLayout(RadioCalf),
      },
    ],
  },
  {
    title: "Comunicación:",
    quest: [
      {
        quests: "¿El peluquero/a comprendió sus preferencias?",
        componente: handleLayout(RadioSN),
      },
      {
        quests: "¿Hubo una comunicación clara sobre los servicios y precios?",
        componente: handleLayout(RadioSN),
      },
    ],
  },
  {
    title: "Atención al cliente:",
    quest: [
      {
        quests: "¿Recibió una cálida bienvenida al llegar?",
        componente: handleLayout(RadioSN),
      },
      {
        quests: "¿El personal fue atento y cortés durante su visita?",
        componente: handleLayout(RadioSN),
      },
    ],
  },
  {
    title: "Satisfacción con el resultado:",
    quest: [
      {
        quests: "¿Está satisfecho con su corte/peinado?",
        componente: handleLayout(RadioSatisface),
      },
      {
        quests: "¿El resultado final cumplió con sus expectativas?",
        componente: handleLayout(TextArea),
      },
    ],
  },
  {
    title: "Comentarios adicionales:",
    quest: [
      {
        quests: "comentarios",
        componente: handleLayout(TextArea),
      },
      {
        quests: "sugerencias",
        componente: handleLayout(TextArea),
      },
    ],
  },
];

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
}
</style>
