<template>
  <v-app class="w-100 d-flex flex-column align-center text-center pa-2 animation-opacity ">
    <h1 class="text-h4 mb-8 mt-6 title-h1">Equipo</h1>
    <p>Conoce a nuestro equipo de barberos profesionales con amplia experiencia y trayectoria.</p>
    <div class="grid w-100 ma-0">
      <v-hover v-for="n in 5"
          :key="n" v-slot="{ isHovering, props }" close-delay="200">
          <v-card
            color="#ccc"
            theme="dark"
            :elevation="isHovering ? 16 : 2"
            :class="{'on-hover': isHovering }"
            class="mx-auto my-12 text-left pb-2"
            width="100%"
            v-bind="props"
          >
            <v-progress-linear
            :active="loading"
            :indeterminate="loading"
            absolute
            bottom
            color="#33b5bd"
            ></v-progress-linear>
            <div class="d-flex py-2">
              <div class="d-flex flex-column align-center pt-2">
                <v-avatar image="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg" size="100"></v-avatar>
                <v-row
                align="center"
                class="mx-0 justify-center mt-2">
                  <v-rating
                    :model-value="4.5"
                    color="amber"
                    density="compact"
                    half-increments
                    readonly
                    size="small"
                    class="fade-show"
                  ></v-rating>
                </v-row>
                <v-card-title class="text-h5 mt-2 text-center">
                    Nombre
                </v-card-title>

                <v-card-subtitle class="my-2 text-center">
                    <v-icon
                  color="details"
                  icon="mdi-content-cut"
                  size="small"
                ></v-icon>
                <span class="ms-1">Especialidad</span>
                </v-card-subtitle>
              </div>
              <div class="pt-2"> 
                <v-card-subtitle class="text-subtitle-1 mb-2 font-weight-bold">Servicio</v-card-subtitle>
                <v-card-subtitle>
                  <div class="text-subtitle-1">
                    $ • 12,00
                  </div>
              
                  <span class="pt-2 pe-2 wrap pb-2 w-sm-50-md-100 d-block">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                </v-card-subtitle>
                <v-divider class="mx-4 mb-3 mt-3"></v-divider>
                <v-card-subtitle class="text-subtitle-1 font-weight-bold">Disponibilidad</v-card-subtitle>
        
                <div class="chip-group mt-2">
                  <v-chip-group>
                    <v-chip class="w-auto">5:30PM</v-chip>
            
                    <v-chip>7:30PM</v-chip>
            
                    <v-chip>8:00PM</v-chip>
            
                    <v-chip>9:00PM</v-chip>
                  </v-chip-group>
                </div>
                <v-card-actions>
                  <v-btn color="#33b5bd"  variant="flat" @click="reserve">Reservar cita</v-btn>
                </v-card-actions>
              </div>
            </div>
          </v-card>
      </v-hover>
    </div>
  </v-app>
</template>
<script lang="ts" setup>
  import{ref, Ref} from 'vue'
  
    const loading:Ref<boolean> = ref(false)

    const reserve = () => {
        loading.value = true

        setTimeout(() => (loading.value = false), 2000)
    }
</script>
<style scoped>
.animation-opacity {
  animation: opacity 1s ease-in; /* Animaciones del app.vue*/
}
.chip-group {
  width: 65%;
}

  .dark {
    width: 100%;
    height: 100%;
    top: 0;
    transition: all 1s ease;
    position: absolute;
    /*clip-path: polygon(0% 90%, 25% 99%, 100% 93%, 100% 0%, 0% 0%);*/
    background-color: rgba(0, 0, 0, 0.42);
    animation: clipPath 2s ease-in; /* Animaciones del app.vue*/
    padding-bottom: 13%;
    padding-right: 1rem;
  }

  .fade-show {
    animation: show-X 1.5s ease-in; /* Animaciones del app.vue*/
    animation-delay: 0.2s;
  }
  .grid {
    display: flex;
    flex-direction: column;
  }
  .img-container {
    position: relative;
  }
  .img-clip-path {
    transition: all 1s ease;
    clip-path: polygon(0% 72%, 25% 99%, 100% 65%, 100% 0%, 0% 0%);
  }
  .title-h1 {
    text-decoration: 2px solid underline var(--aqua);
    text-underline-position: under;
    text-underline-offset: 10px;
    animation: opacity 1s ease-in;
  }
  .wrap {
    white-space: wrap;
  }
  .w-sm-50-md-100 {
  width: 50%;
}
  @media screen and (min-width: 600px) {
    .chip-group {
      width: 100%;
    }
    .grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
    .w-sm-50-md-100 {
      width: 100%;
    }
  }
</style>