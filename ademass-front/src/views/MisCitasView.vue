<template>
  <v-card flat title="Citas Reservadas">
    <v-data-table :headers="headers" :items="item" class="table"></v-data-table>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          align: "start",
          key: "name",
          sortable: false,
        },
        { key: "Dia", title: "Dia" },
        { key: "Mes", title: "Mes" },
        { key: "Hora", title: "Hora" },
        { key: "Anular", title: "" },
      ],
      item: [
        {
          Dia: 21,
          Mes: "Febrero",
          Hora: "11:00",
          Anular: "Anular Cita",
        },
        {
          Dia: 7,
          Mes: "Marzo",
          Hora: "10:00",
          Anular: "Anular Cita",
        },
        {
          Dia: 15,
          Mes: "Abril",
          Hora: "15:00",
          Anular: "Anular Cita",
        },
      ],
    };
  },
};
</script>

<style scoped>
.table {
  color: black;
  background-color: white;
  width: 800px;
  height: 400px;
}
</style>
