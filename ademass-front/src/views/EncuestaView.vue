<template>
  <v-sheet
    class="d-flex flex-wrap justify-center mx-auto mt-4"
    elevation="4"
    rounded
    max-width="90vw"
    color="grey-lighten-3"
  >
    <h1 class="text-center">Encuesta de satisfación</h1>
    <v-divider></v-divider>
    <!-- Primera Tarjeta Encuesta-->
    <v-card
      class="ma-4 d-column flex-wrap justify-start"
      elevation="2"
      width="40vw"
    >
      <v-card-title>Experiencia general:</v-card-title>
      <v-card-text>
        ¿Cómo calificaría su experiencia general en la peluquería?
      </v-card-text>
      <v-radio-group v-model="calificacion" inline>
        <v-radio label="Excelente" value="Excelente"></v-radio>
        <v-radio label="Muy Buena" value="MBuena"></v-radio>
        <v-radio label="Buena" value="Buena"></v-radio>
        <v-radio label="Mala" value="Mala"></v-radio>
      </v-radio-group>
      <v-card-text>
        ¿Con qué frecuencia visita nuestra peluquería?
      </v-card-text>
      <v-select
        label="Select"
        :items="frecuencia"
        variant="solo-filled"
      ></v-select>
      <v-card-text>
        ¿Recomendaría nuestra peluquería a amigos/familiares?
      </v-card-text>
      <v-radio-group v-model="recomienda">
        <v-radio label="Si" value="Si"></v-radio>
        <v-radio label="No" value="No"></v-radio>
      </v-radio-group>
    </v-card>
    <!-- Segunda Tarjeta Encuesta-->
    <v-card
      class="ma-4 d-column flex-wrap justify-start"
      elevation="2"
      width="40vw"
    >
      <v-card-title>Servicios específicos:</v-card-title>
      <v-card-text> Calidad del corte/peinado. </v-card-text>
      <v-radio-group v-model="calidad" inline>
        <v-radio label="Excelente" value="Excelente"></v-radio>
        <v-radio label="Muy Buena" value="MBuena"></v-radio>
        <v-radio label="Buena" value="Buena"></v-radio>
        <v-radio label="Mala" value="Mala"></v-radio>
      </v-radio-group>
      <v-card-text> Tiempo de espera. </v-card-text>
      <v-text-field v-model="tiempo" label="Tiempo"></v-text-field>
      <v-card-text> Amabilidad y profesionalismo del personal. </v-card-text>
      <v-radio-group v-model="amable" inline>
        <v-radio label="Amable - Profesional" value="AP"></v-radio>
        <v-radio label="Amable - No Profesional" value="ANP"></v-radio>
        <v-radio label="Ingrato" value="Ingrato"></v-radio>
      </v-radio-group>
      <v-card-text> Limpieza e higiene del salón. </v-card-text>
      <v-radio-group v-model="limpieza" inline>
        <v-radio label="Excelente" value="Excelente"></v-radio>
        <v-radio label="Muy Buena" value="MBuena"></v-radio>
        <v-radio label="Buena" value="Buena"></v-radio>
        <v-radio label="Mala" value="Mala"></v-radio>
      </v-radio-group>
    </v-card>
    <!-- Tercera Tarjeta Encuesta-->
    <v-card
      class="ma-4 d-column flex-wrap justify-start"
      elevation="2"
      width="40vw"
    >
      <v-card-title>Comunicación:</v-card-title>
      <v-card-text> ¿El peluquero/a comprendió sus preferencias? </v-card-text>
      <v-radio-group v-model="preferencias" inline>
        <v-radio label="Si" value="Si"></v-radio>
        <v-radio label="No" value="No"></v-radio>
      </v-radio-group>
      <v-card-text>
        ¿Hubo una comunicación clara sobre los servicios y precios?
      </v-card-text>
      <v-radio-group v-model="comunicacion" inline>
        <v-radio label="Si" value="Si"></v-radio>
        <v-radio label="No" value="No"></v-radio>
      </v-radio-group>
    </v-card>
    <!-- Cuarta Tarjeta Encuesta-->
    <v-card
      class="ma-4 d-column flex-wrap justify-start"
      elevation="2"
      width="40vw"
    >
      <v-card-title>Atención al cliente:</v-card-title>
      <v-card-text> ¿Recibió una cálida bienvenida al llegar? </v-card-text>
      <v-radio-group v-model="bienvenida" inline>
        <v-radio label="Si" value="Si"></v-radio>
        <v-radio label="No" value="No"></v-radio>
      </v-radio-group>
      <v-card-text>
        ¿El personal fue atento y cortés durante su visita?
      </v-card-text>
      <v-radio-group v-model="atento" inline>
        <v-radio label="Si" value="Si"></v-radio>
        <v-radio label="No" value="No"></v-radio>
      </v-radio-group>
    </v-card>
    <!-- Quinta Tarjeta Encuesta-->
    <v-card
      class="ma-4 d-column flex-wrap justify-start"
      elevation="2"
      width="40vw"
    >
      <v-card-title>Satisfacción con el resultado:</v-card-title>
      <v-card-text> ¿Está satisfecho con su corte/peinado? </v-card-text>
      <v-radio-group v-model="satisfecho" inline>
        <v-radio label="Satisfecho" value="Satisfecho"></v-radio>
        <v-radio label="No Satisfecho" value="NoSatisfecho"></v-radio>
      </v-radio-group>
      <v-card-text>
        ¿El resultado final cumplió con sus expectativas?
      </v-card-text>
      <v-textarea
        bg-color="grey-lighten-2"
        color="black"
        label="escriba sus expectativas"
        v-model="espectativas"
      ></v-textarea>
    </v-card>
    <!-- Sexta Tarjeta Encuesta-->
    <v-card
      class="ma-4 d-column flex-wrap justify-start"
      elevation="2"
      width="40vw"
    >
      <v-card-title>Comentarios adicionales:</v-card-title>
      <v-card-text> Comentarios: </v-card-text>
      <v-textarea
        bg-color="grey-lighten-2"
        color="black"
        label="escriba sus comentarios"
        v-model="comentarios"
      ></v-textarea>
      <v-card-text> Sugerencias: </v-card-text>
      <v-textarea
        bg-color="grey-lighten-2"
        color="black"
        label="algunas sugerencias"
        v-model="sugerencias"
      ></v-textarea>
    </v-card>
    <v-divider></v-divider>
    <v-btn class="ma-2" color="success">
      Accept
      <v-icon end icon="mdi-checkbox-marked-circle"></v-icon>
    </v-btn>
    <v-btn class="ma-2">
      <v-icon start icon="mdi-minus-circle"></v-icon>
      Cancel
    </v-btn>
  </v-sheet>
</template>

<script setup>
import { ref } from "vue";

let calificacion = ref("");
const frecuencia = ref(["Semanal", "Mensual", "Anual"]);
let recomienda = ref("");
let calidad = ref("");
let tiempo = ref("");
let amable = ref("");
let limpieza = ref("");
let preferencias = ref("");
let comunicacion = ref("");
let bienvenida = ref("");
let atento = ref("");
let satisfecho = ref("");
let espectativas = ref("");
let comentarios = ref("");
let sugerencias = ref("");
</script>
