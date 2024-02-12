<template>
  <v-layout>
    <v-footer class="bg-black text-center d-flex flex-column">
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

      <div class="d-flex">
        <div class="imagen">
          <img src="@/assets/barbershop1.jpg" />
        </div>
        <div class="pt-2 d-flex flex-column">
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
          <div class="mt-4 pt-4">
            <p><strong>Únete a Nosotros</strong></p>
            <a href="#" class="text-white"
              ><v-icon icon="mdi-map-marker" class="mr-2" />Trabaja con
              nosotros</a
            >
          </div>
        </div>
        <div class="pt-2 ml-6 d-flex flex-column">
          <p><strong>Legal</strong></p>
          <a href="#" class="text-white">Política de Privacidad</a>
          <a href="#" class="text-white">Avíso Legal</a>
        </div>

        <div class="imagen">
          <img src="@/assets/barbershop1.jpg" />
        </div>
      </div>

      <v-divider></v-divider>

      <div class="mt-4">
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
p {
  color: cyan;
}
#btn-icons:hover {
  color: aqua;
}
</style>
