<template>
  <v-layout class="main">
    <img
      class="imagen"
      src="@/assets/img/barber1.png"
      width="100"
      height="100"
    />
    <v-footer class="footer">
      <div class="mt-4 mb-4">
        <v-btn
          id="btn-icons"
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          :icon="icon"
          variant="text"
          density="comfortable"
        ></v-btn>
      </div>

      <div class="contenedor1">
        <div class="contenedor2">
          <p><strong>Contactos</strong></p>
          <a href="#" class="text-white"
            ><v-icon icon="mdi-cellphone-sound " class="mr-2" />+34 555 555
            555</a
          >
          <a href="#" class="text-white"
            ><v-icon icon="mdi-account-tie" class="mr-2" />Barber Jhon</a
          >
          <a href="#" class="text-white"
            ><v-icon
              icon="mdi-email"
              class="mr-2"
            />barberjhon@barbershop.com</a
          >
        </div>
        <div class="contenedor3">
          <p><strong>Únete a Nosotros</strong></p>
          <a href="#" class="text-white"
            ><v-icon icon="mdi-map-marker" class="mr-2" />Trabaja con
            nosotros</a
          >
        </div>
        <div class="contenedor4">
          <p><strong>Legal</strong></p>
          <a href="#" class="text-white">Política de Privacidad</a>
          <a href="#" class="text-white">Avíso Legal</a>
        </div>
      </div>

      <v-divider></v-divider>

      <div class="mt-6">
        {{ new Date().getFullYear() }} —
        <strong
          >Barbershop Copyright (R) Todos los Derechos Reservados. Version
          1.0</strong
        >
      </div>
    </v-footer>
  </v-layout>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    icons: [
      "mdi-facebook",
      "mdi-twitter",
      "mdi-linkedin",
      "mdi-instagram",
      "mdi-youtube",
    ],
  }),
};
</script>

<style scoped>
.main {
  position: static;
  background-color: rgb(80, 75, 75);
  color: white;
  margin-top: 30px;
}
.main .imagen {
  float: left;
  margin: 5px;
  top: 5px;
  left: 5px;
}
.footer {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  background-color: rgb(80, 75, 75);
  color: white;
}
.footer .contenedor1 {
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
  margin: 20px;

  margin-top: 2px;
  margin-left: 10px;
  margin-right: 10px;
}

.footer .contenedor2 {
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: center;
  margin-top: 2px;
  margin-left: 10px;
  margin-right: 10px;
  padding-right: 20px;
  padding-left: 20px;
}
.footer .contenedor3 {
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: center;
  margin-top: 2px;
  margin-left: 10px;
  margin-right: 10px;
  padding-right: 20px;
  padding-left: 20px;
}
.footer .contenedor4 {
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: center;
  margin-top: 2px;
  margin-left: 10px;
  margin-right: 10px;
  padding-right: 20px;
  padding-left: 20px;
}

p {
  color: cyan;
}
#btn-icons:hover {
  color: cyan;
}
a {
  text-decoration: none;
}
</style>
