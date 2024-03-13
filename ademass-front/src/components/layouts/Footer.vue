<template>
  <v-layout class="main-footer flex-column flex-md-row">
    <div class="w-sm-100 d-flex justify-center justify-md-start">
      <img
        class="imagen"
        src="@/assets/img/barber1.png"
        width="100"
        height="100"
      />
    </div>
    <v-footer class="footer">
      <div class="mt-4 mb-4 w-100 text-center">
        <v-btn
          id="btn-icons"
          v-for="(icon, index) in redes"
          :key="index"
          class="mx-4"
          :icon="icon.icons"
          :href="icon.src"
          variant="text"
          density="comfortable"
        ></v-btn>
      </div>

      <div class="contenedor1">
        <div class="contenedor2">
          <p><strong>Contactos</strong></p>
          <a href="#" class="text-white"
            ><v-icon icon="mdi-account-tie" class="mr-2" />Barber Jhon</a
          >
          <a href="#" class="text-white"
            ><v-icon icon="mdi-cellphone-sound " class="mr-2" />+34 555 555
            555</a
          >
          <a href="#" class="text-white"
            ><v-icon
              icon="mdi-email"
              class="mr-2"
            />barberjhon@barbershop.com</a
          >
        </div>
        <div class="contenedor3">
          <p><strong>Sobre Nosotros</strong></p>
          <a href="#" class="text-white"
            ><v-icon icon="mdi-map-marker" class="mr-2" />Dónde Estamos</a
          >
          <a href="#" class="text-white"
            ><v-icon
              icon="mdi-email"
              class="mr-2"
            />Contrataciones@barbershop.com</a
          >
        </div>
        <div class="contenedor4">
          <p><strong>Legal</strong></p>
          <a href="#" class="text-white"
            ><v-icon icon="mdi-list-status" class="mr-2" /> Política de
            Privacidad</a
          >
          <a href="#" class="text-white"
            ><v-icon icon="mdi-playlist-check" class="mr-2" />Avíso Legal</a
          >
        </div>
      </div>

      <v-divider></v-divider>

      <div class="copyright">
        <strong class="strong"
          >{{ new Date().getFullYear() }} — Barbershop Copyright(R) Todos los
          Derechos Reservados. Version 1.0</strong
        >
      </div>
    </v-footer>
  </v-layout>
</template>

<script setup>
import { ref } from "vue";

const redes = ref([
  {
    icons: "mdi-facebook",
    src: "https://www.facebook.com",
  },
  {
    icons: "mdi-twitter",
    src: "https://www.twitter.com",
  },
  {
    icons: "mdi-linkedin",
    src: "www.linkedin.com/",
  },
  {
    icons: "mdi-instagram",
    src: "https://www.instagram.com",
  },
]);
</script>

<style scoped>
.main-footer {
  position: relative;
  background-color: rgb(80, 75, 75);
  color: white;
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
}

.main-footer .imagen {
  float: left;
  margin: 5px;
  top: 5px;
  left: 5px;
  flex-wrap: wrap;
}

.footer {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
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
.icons {
  position: relative;
  margin-bottom: 2px;
  margin-top: 2px;
  flex-wrap: wrap;
}
#btn-icons {
  position: relative;
  flex-wrap: wrap;
}
#btn-icons:hover {
  color: cyan;
}
.copyright {
  position: relative;
  flex-wrap: wrap;
  display: flex;
  margin-top: 6px;
  text-align: center;
}
p {
  color: cyan;
}

a {
  text-decoration: none;
}

@media only screen and (max-width: 430px) {
  .copyright {
    inline-size: 50%;
    flex-direction: column;
    flex-wrap: wrap;
    text-align: center;
    align-content: center;
    align-items: center;

    color: aqua;
  }
}

@media only screen and (max-width: 320px) {
  .main-footer {
    float: left;
  }
  #btn-icons {
    inline-size: 50%;
    flex-direction: column;
    flex-wrap: wrap;
  }
}
</style>
