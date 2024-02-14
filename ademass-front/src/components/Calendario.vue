<template>
  <div
    class="calendar"
    :style="{
      backgroundColor: '#fff',
      color: 'violet',
    }"
  >
    <Qalendar :events="events" :config="config" />
  </div>
</template>

<script setup>
import { Qalendar } from "qalendar";
import { ref } from "vue";

let events = ref([
  // ...
  {
    title: "Afeitado",
    with: "Chandler Bing",
    time: { start: "2024-02-13 20:00", end: "2024-02-16 21:00" },
    color: "yellow",
    isEditable: true,
    id: "1",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    title: "Arreglo de Barba",
    with: "Rachel Greene",
    time: { start: "2024-02-14 08:00", end: "2024-02-15 10:00" },
    color: "green",
    isEditable: true,
    id: "2",
  },
  {
    title: "Pelado Alto",
    with: "Rachel Greene",
    time: { start: "2024-02-14 15:00", end: "2024-02-15 16:00" },
    color: "blue",
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
        color: "#fff",
        backgroundColor: "#131313",
      },
      sports: {
        color: "#fff",
        backgroundColor: "#ff4081",
      },
    },
  },
});
</script>

<style>
@import "qalendar/dist/style.css";

.calendar {
  max-width: 50%;
  height: 500px;
}
</style>
