<template>
    <v-navigation-drawer
        expand-on-hover
        rail
        permanent
      >
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
          <v-list-item  prepend-icon="mdi-calendar-month" title="Ejemplo itrem menu" value="Ejemplo"></v-list-item> 
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