<template>
    <v-navigation-drawer
        expand-on-hover
        rail
        permanent
        class="custom-bg-color">
        <v-list>
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
            title="Sandra Adams"
            subtitle="sandra_a88@gmailcom"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>
        <v-list density="compact" nav>
          <router-link class="router-link" to="/">
          <v-list-item prepend-icon="mdi-home" title="Inicio" value="Inicio"></v-list-item>
        </router-link>
        </v-list>

        <v-list density="compact" nav>
          <router-link class="router-link" to="/mi-perfil">
          <v-list-item prepend-icon="mdi-account-box" title="Mi perfil" value="Mi perfil"></v-list-item>
        </router-link>
        </v-list>

        <v-list density="compact" nav>
          <router-link class="router-link" to="/calendario">
          <v-list-item prepend-icon="mdi-calendar-month" title="Calendario" value="calendario"></v-list-item>
        </router-link>
        </v-list>
        
        <v-list density="compact" nav>
          <router-link class="router-link" to="/mis-citas">
          <v-list-item prepend-icon="mdi-calendar-multiple-check" title="Citas" value="Citas"></v-list-item>
        </router-link>
        </v-list>
        <v-list density="compact" nav>
          <router-link class="router-link" to="/servicios">
          <v-list-item prepend-icon="mdi-tools" title="Servicios" value="Servicios"></v-list-item>
        </router-link>
        </v-list>
        <v-list density="compact" nav>
          <router-link class="router-link" to="/producto">
          <v-list-item prepend-icon="mdi-cart" title="Productos" value="Servicios"></v-list-item>
        </router-link>
        </v-list>

        <v-list density="compact" nav>
          <router-link class="router-link" to="/encuesta">
          <v-list-item prepend-icon="mdi-lock" title="Encuesta" value="encuesta"></v-list-item>
        </router-link>
        </v-list>
        <v-list density="compact" nav>
          <router-link class="router-link" to="/valoraciones">
          <v-list-item prepend-icon="mdi-message-star-outline" title="valoraciones" value="valoraciones"></v-list-item>
        </router-link>
      </v-list>

        <v-list density="compact" nav>
          <router-link class="router-link" to="/contacto">
          <v-list-item prepend-icon="mdi-email" title="contacto" value="contacto" ></v-list-item>
        </router-link>
        </v-list>
      </v-navigation-drawer>
</template>
<script setup lang="ts">

</script>
<style scoped>
.router-link {
  text-decoration: none;
  color: inherit;
}
.custom-bg-color {
  background-color: rgb(80, 75, 75);
}
</style>
