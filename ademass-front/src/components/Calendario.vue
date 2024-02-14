<template>
  <div
    class="calendar"
    :style="{
      backgroundColor: 'white',
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
    colorScheme: "barber",
    isEditable: true,
    id: "1",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    title: "Arreglo de Barba",
    with: "Rachel Greene",
    time: { start: "2024-02-14 08:00", end: "2024-02-15 10:00" },
    colorScheme: "sports",
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
        backgroundColor: "blue",
      },
      sports: {
        color: "white",
        backgroundColor: "green",
      },
      barber: {
        color: "white",
        backgroundColor: "gray",
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
