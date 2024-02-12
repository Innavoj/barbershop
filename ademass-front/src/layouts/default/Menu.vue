<template>
    <v-navigation-drawer
        expand-on-hover
        rail
        permanent
       class="bg-black">
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
          <v-list-item  prepend-icon="mdi-calendar-month" title="Ejemplo item menu" value="Ejemplo"></v-list-item>
        </router-link>
        </v-list>

        <v-list density="compact" nav>
          <router-link class="router-link" to="/">
          <v-list-item  prepend-icon="mdi-lock" title="Contraseña" value="Contraseña"></v-list-item>
        </router-link>
        </v-list>

        <v-list density="compact" nav>
          <router-link class="router-link" to="/">
          <v-list-item  prepend-icon="mdi-calendar-multiple-check" title="Citas" value="Citas"></v-list-item>
        </router-link>
        </v-list>

        <v-list density="compact" nav>
          <router-link class="router-link" to="/">
          <v-list-item  prepend-icon="mdi-cog" title="Settings" value="Ejemplo"></v-list-item>
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
</style>
