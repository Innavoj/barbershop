<template>
  <h2 class="text-center text-uppercase titulo-carousel">Servicios</h2>
  <v-carousel cycle :height="heightCarousel" hide-delimiter-background show-arrows="hover">
    <v-carousel-item>
      <v-sheet height="100%" class="bg-red">
        <div class="d-flex fill-height justify-center align-center">
          <v-container>
            <v-row no-gutters>
              <v-col cols="12" md="8">
                <v-card class="pa-2 ma-2" :height="heightCard">
                  <v-img src="https://via.placeholder.com/800x400" alt="Imagen" height="100%" width="auto"
                    class="white--text" cover>
                  </v-img>
                </v-card>
              </v-col>
              <v-col cols="12" md="4" class="d-flex align-end">
                <v-card class="pa-2 ma-2 ">
                  <v-card-title class="pb-0 font-weight-bold">Glow para brillar</v-card-title>
                  <v-card-text class="pt-1">Recibe una mini mascarilla GLOW de REGALO con la compra de cualquier producto
                    Authentic Beauty Concept.</v-card-text>
                  <v-card-actions class="d-flex justify-center">
                    <v-btn to="/calendario" block variant="flat" color="black">Reservar</v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </v-sheet>
    </v-carousel-item>

    <v-carousel-item>
      <v-sheet height="100%" class="bg-green">
        <div class="d-flex fill-height justify-center align-center">
          <v-container>
            <v-row no-gutters>
              <v-col cols="12" md="8">
                <v-card class="pa-2 ma-2" :height="heightCard">
                  <v-img src="https://via.placeholder.com/800x400" alt="Imagen" height="100%" width="auto"
                    class="white--text" cover>
                  </v-img>
                </v-card>
              </v-col>
              <v-col cols="12" md="4" class="d-flex align-end">
                <v-card class="pa-2 ma-2 ">
                  <v-card-title class="pb-0 font-weight-bold">Glow para brillar</v-card-title>
                  <v-card-text class="pt-1">Recibe una mini mascarilla GLOW de REGALO con la compra de cualquier producto
                    Authentic Beauty Concept.</v-card-text>
                  <v-card-actions class="d-flex justify-center">
                    <v-btn to="/calendario" block variant="flat" color="black">Reservar</v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </v-sheet>
    </v-carousel-item>

    <v-carousel-item>
      <v-sheet height="100%" class="bg-blue">
        <div class="d-flex fill-height justify-center align-center">
          <v-container>
            <v-row no-gutters>
              <v-col cols="12" md="8">
                <v-card class="pa-2 ma-2" :height="heightCard">
                  <v-img src="https://via.placeholder.com/800x400" alt="Imagen" height="100%" width="auto"
                    class="white--text" cover>
                  </v-img>
                </v-card>
              </v-col>
              <v-col cols="12" md="4" class="d-flex align-end">
                <v-card class="pa-2 ma-2 ">
                  <v-card-title class="pb-0 font-weight-bold">Glow para brillar</v-card-title>
                  <v-card-text class="pt-1">Recibe una mini mascarilla GLOW de REGALO con la compra de cualquier producto
                    Authentic Beauty Concept.</v-card-text>
                  <v-card-actions class="d-flex justify-center">
                    <v-btn to="/calendario" block variant="flat" color="black">Reservar</v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </v-sheet>
    </v-carousel-item>

  </v-carousel>
</template>

<script lang="ts" setup>
  import { ref, onMounted, watch } from 'vue'
  import { useDisplay } from 'vuetify'

  const { name } = useDisplay()

  const heightCarousel = ref(600)
  const heightCard = ref(500)


onMounted(() => {
  switch (name.value) {
    case 'xs':
      heightCarousel.value = 600;
      heightCard.value = 200;
      break;
    case 'sm':
      heightCarousel.value = 800;
      heightCard.value = 300;
      break;
    default:
        heightCarousel.value = 500;
        heightCard.value = 400;
        break

  }
});


  watch(name, () => {
    switch (name.value) {
      case 'xs':
        heightCarousel.value = 600
        heightCard.value = 200
        break
      case 'sm':
        heightCarousel.value = 800
        heightCard.value = 300
        break
      default:
        heightCarousel.value = 500;
        heightCard.value = 400;
        break
    }
  });

</script>

<style scoped>
.my-container {
  background-color: red;
}

.titulo-carousel {
  margin: 20px 0;
}
</style>
