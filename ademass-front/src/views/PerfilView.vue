<template>
  <v-main style="max-width: 700px; margin: auto;">


    <v-form>
      <v-row align="center" class="flex-container">

        <v-file-input label="Añadir una imagen"></v-file-input>

        <v-avatar class="profile-avatar" :style="{ backgroundImage: `url('${imagen ? URL.createObjectURL(imagen) : ''}')` }">
          <v-icon>mdi-account-circle</v-icon> <!-- Icono de usuario por defecto -->
        </v-avatar>

    </v-row>
      <v-row>
        <v-col>
          <v-text-field label="Email" type="email"></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-text-field label="Contraseña Actual" type="password"></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-text-field label="Nueva Contraseña" type="password"></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-text-field label="Repetir Contraseña" type="password"></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-btn type="submit" color="primary">Aplicar Cambios</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-main>
</template>

<script setup>
import { ref } from 'vue';

const imagen = ref(null);

// Otras variables y funciones según sea necesario
</script>

<style scoped>
.flex-container {
  display: flex;
  align-items: end;
  gap: 20px;
}

.profile-avatar {
  width: 100px; /* Ajusta el tamaño según sea necesario */
  height: 100px; /* Ajusta el tamaño según sea necesario */
  border-radius: 50%;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Estilos adicionales para el formulario, ajusta según sea necesario */
v-form {
  margin-top: 20px;
}
</style>
