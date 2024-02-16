<template>
  <v-container>
    <h1>Reserva tu cita</h1>
    <div class="calendar is-light-mode">
      <Qalendar :events="events" :config="config" />
    </div>
  </v-container>
</template>

<script lang="ts" setup>
import { Qalendar } from "qalendar";
import { ref } from "vue";

let events = ref([
  // ...
  {
    title: "Afeitado",
    with: "Chandler Bing",
    time: { start: "2024-02-13 20:00", end: "2024-02-16 21:00" },
    colorScheme: "meetings",
    isEditable: true,
    id: "1",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    title: "Arreglo de Barba",
    with: "Rachel Greene",
    time: { start: "2024-02-14 08:00", end: "2024-02-15 10:00" },
    colorScheme: "meetings",
    isEditable: true,
    id: "2",
  },
  {
    title: "Pelado Alto",
    with: "Rachel Greene",
    time: { start: "2024-02-14 15:00", end: "2024-02-15 16:00" },
    colorScheme: "meetings",
    isEditable: true,
    id: "3",
  },
  // ...
]);
let config = ref({
  locale: "es-ES",
  defaultMode: "month",
  style: {
    colorSchemes: {
      meetings: {
        color: "white",
        backgroundColor: "#3bb8c0",
      },
    },
  },
});
</script>

<style>
@import "qalendar/dist/style.css";

.calendar {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
