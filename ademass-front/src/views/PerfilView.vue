<template>
  <v-main class="mb-12" style="max-width: 700px; margin: auto;" >
    <h1 class="container-flex text-center"> Mi Perfil</h1>
    <hr class="mb-6">

    <v-form>

      <v-row align="center" justify="center" >

        <div class="flex-container">
          <label for="fileInput" class="avatar-label">
            <v-icon class="custom-icon " size="x-large">mdi-swap-horizontal</v-icon>
            <v-avatar class="profile-avatar">
            </v-avatar>
            <v-file-input id="fileInput" class="profile-input"></v-file-input>
          </label>
        </div>


      </v-row>

    </v-form>
    <v-form>
      <v-row>
        <v-col>
          <v-text-field label="Email" type="email"></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-text-field label="Nombre" type="text"></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-text-field label="Apellidos" type="text"></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-text-field label="Teléfono" type="text"></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-text-field label="Email" type="email"></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col class="text-center">
          <v-btn type="submit" color="details">Actualizar Datos</v-btn>
        </v-col>
      </v-row>
    </v-form>

    <v-form>

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
        <v-col class="text-center">
          <v-btn type="submit" color="details">Actualizar Contraseña</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-main>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const imagen = ref(null);

// Otras variables y funciones según sea necesario
</script>

<style scoped>
.flex-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.profile-avatar {
  width: 100px; /* Ajusta el tamaño según sea necesario */
  height: 100px; /* Ajusta el tamaño según sea necesario */
  border-radius: 50%;
  background-image: url('https://randomuser.me/api/portraits/women/85.jpg');
  background-size: cover;
  background-position: center;
}

.profile-input {
  opacity: 0;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  cursor: pointer;
}

.avatar-label {
  position: relative;
}

.custom-icon{
  position: absolute;
  top: 0;
  right: 0;
  color: black;
  border-radius: 50%;
  border: 1px solid black;
  background-color: white;
  z-index: 1;
}

/* Estilos adicionales para el formulario, ajusta según sea necesario */
v-form {
  margin-top: 20px;
}
</style>
