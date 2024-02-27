<template>
  <v-main style="max-width: 1200px; margin: auto; padding: 15px 0">
    <h2 class="text-center text-uppercase titulo-productos">Productos</h2>
    <v-slide-group class=" v-slide-group-indicators" center-active show-arrows>
      <v-slide-group-item>
        <v-card class="ma-4 custom-card" >
          <div>
            <v-img src="https://via.placeholder.com/800x400" alt="Imagen"  class="white--text my-image"
              cover>
            </v-img>
          </div>

          <v-card-title>{{ title }}</v-card-title>
          <v-card-text class="pb-0 font-weight-bold">{{ description }}</v-card-text>
          <v-card-text class="pt-1">{{ precio }}</v-card-text>
          <v-card-actions class="d-flex justify-center">
            <v-btn to="/producto" block variant="flat" color="black">Agregar</v-btn>
          </v-card-actions>
        </v-card>
      </v-slide-group-item>

      <v-slide-group-item>
        <v-card class="ma-4 custom-card" >
          <div>
            <v-img src="https://via.placeholder.com/800x400" alt="Imagen"  class="white--text my-image"
              cover>
            </v-img>
          </div>

          <v-card-title>{{ title }}</v-card-title>
          <v-card-text class="pb-0 font-weight-bold">{{ description }}</v-card-text>
          <v-card-text class="pt-1">{{ precio }}</v-card-text>
          <v-card-actions class="d-flex justify-center">
            <v-btn to="/producto" block variant="flat" color="black">Agregar</v-btn>
          </v-card-actions>
        </v-card>
      </v-slide-group-item>

      <v-slide-group-item>
        <v-card class="ma-4 custom-card" >
          <div>
            <v-img src="https://via.placeholder.com/800x400" alt="Imagen"  class="white--text my-image"
              cover>
            </v-img>
          </div>

          <v-card-title>{{ title }}</v-card-title>
          <v-card-text class="pb-0 font-weight-bold">{{ description }}</v-card-text>
          <v-card-text class="pt-1">{{ precio }}</v-card-text>
          <v-card-actions class="d-flex justify-center">
            <v-btn to="/producto" block variant="flat" color="black">Agregar</v-btn>
          </v-card-actions>
        </v-card>
      </v-slide-group-item>

      <v-slide-group-item>
        <v-card class="ma-4 custom-card" >
          <div>
            <v-img src="https://via.placeholder.com/800x400" alt="Imagen"  class="white--text my-image"
              cover>
            </v-img>
          </div>

          <v-card-title>{{ title }}</v-card-title>
          <v-card-text class="pb-0 font-weight-bold">{{ description }}</v-card-text>
          <v-card-text class="pt-1">{{ precio }}</v-card-text>
          <v-card-actions class="d-flex justify-center">
            <v-btn to="/producto" block variant="flat" color="black">Agregar</v-btn>
          </v-card-actions>
        </v-card>
      </v-slide-group-item>



    </v-slide-group>
  </v-main>
</template>

<script lang="ts" setup>

const title = 'Sebastian';
const description = 'PENETRAITT Mascarilla Capilar Fortalecedora 150ml';
const precio = '€ 26.50';
</script>

<style scoped>

h2 {
  font-size: 15px;
  margin: 10px 0;
}
.custom-card {
  /* Estilos predeterminados antes de la media query */
  height: 400px;
  width: 100px;

  > div > .v-image {
      height: 100px;
      width: 100%;
  }
}


@media (min-width: 468px) {
  h2{
    font-size: 30px;
  }

  .custom-card{
    height: 500px;
    width: 300px;

    /* Ajustes específicos para la imagen dentro de la v-card */
    > div > .my-image {
      height: 300px;
    }
  }

}
</style>
