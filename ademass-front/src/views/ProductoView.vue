<template>
  <v-main style="max-width: 1200px; margin: auto; padding: 15px 0">
    <v-slide-group class=" v-slide-group-indicators" center-active show-arrows>
      <v-slide-group-item>
        <v-card class="ma-4" height="500" width="300">
          <div>
            <v-img src="https://via.placeholder.com/800x400" alt="Imagen" height="300" width="auto" class="white--text"
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
        <v-card class="ma-4" height="500" width="300">
          <div>
            <v-img src="https://via.placeholder.com/800x400" alt="Imagen" height="300" width="auto" class="white--text"
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
        <v-card class="ma-4" height="500" width="300">
          <div>
            <v-img src="https://via.placeholder.com/800x400" alt="Imagen" height="300" width="auto" class="white--text"
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
        <v-card class="ma-4" height="500" width="300">
          <div>
            <v-img src="https://via.placeholder.com/800x400" alt="Imagen" height="300" width="auto" class="white--text"
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
const precio = '26.50';
</script>

<style scoped>

</style>
