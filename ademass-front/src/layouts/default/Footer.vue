<template>
  <v-layout>
    <v-footer class="bg-black text-center d-flex flex-column">
      <div>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          :icon="icon"
          variant="text"
        ></v-btn>
      </div>

      <div class="d-flex">
        <div class="imagen">
          <img src="@/assets/barbershop1.jpg" />
        </div>
        <div class="d-flex flex-column">
          <p><strong>Contactos</strong></p>
          <a href="#" class="text-white">+34 555 555 555</a>
          <a href="#" class="text-white">Barber Jhon</a>
          <a href="#" class="text-white">barberjhon@barbershop.com</a>
          <div class="mt-4 pt-4">
            <p><strong>Únete a Nosotros</strong></p>
            <a href="#" class="text-white">Trabaja con nosotros</a>
          </div>
        </div>

        <div class="d-flex flex-column">
          <p><strong>Legal</strong></p>
          <a href="#" class="text-white">Política de Privacidad</a>
          <a href="#" class="text-white">Avíso Legal</a>
        </div>
      </div>

      <v-divider></v-divider>

      <div>
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
    icons: ["bi bi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>
