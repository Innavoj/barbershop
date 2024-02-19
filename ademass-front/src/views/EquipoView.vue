<template>
  <v-app class="w-100 d-flex flex-column align-center text-center pa-2">
    <h1 class="text-h4 mb-8 mt-6 title-h1">Equipo</h1>
    <p>Conoce a nuestro equipo de barberos profesionales con amplia experiencia y trayectoria.</p>
    <!--<v-row class="ma-2">
      <v-hover v-for="n in 5"
          :key="n" v-slot="{ isHovering, props }" close-delay="200">
        <v-card
        :loading="loading"
        :elevation="isHovering ? 16 : 2"
        :class="{'on-hover': isHovering }"
        class="mx-auto my-12 text-left pb-2"
        width="auto"
        v-bind="props"
        >
          <template v-slot:loader="{ isActive }">
            <v-progress-linear
              :active="isActive"
              color="#33b5bd"
              height="4"
              indeterminate
            ></v-progress-linear>
          </template>
          <div class="img-container">
            <v-img
              cover
              src="https://cdn.vuetifyjs.com/images/john.jpg"
              class="img-clip-path"
            ></v-img>
            <div class="dark d-flex align-end">
              <v-row
              align="center"
              class="mx-0 justify-end fade-show">
                <v-rating
                  :model-value="4.5"
                  color="amber"
                  density="compact"
                  half-increments
                  readonly
                  size="small"
                ></v-rating>
              </v-row>
            </div>
          </div>      
      
          <v-card-item>
            <v-card-title>Nombre</v-card-title>
      
            <v-card-subtitle>
              <v-icon
                color="details"
                icon="mdi-content-cut"
                size="small"
              ></v-icon>
              <span class="ms-1">Especialidad</span>
            </v-card-subtitle>
          </v-card-item>
      
          <v-card-text>   
            <div class="my-4 text-subtitle-1">
              $ • 12,00
            </div>
      
            <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, eius.</div>
          </v-card-text>
      
          <v-divider class="mx-4 mb-1"></v-divider>
      
          <v-card-title>Disponibilidad</v-card-title>
      
          <div class="px-4">
            <v-chip-group>
              <v-chip>5:30PM</v-chip>
      
              <v-chip>7:30PM</v-chip>
      
              <v-chip>8:00PM</v-chip>
      
              <v-chip>9:00PM</v-chip>
            </v-chip-group>
          </div>
      
          <v-card-actions class="justify-center">
            <v-btn
              color="#33b5bd"
              variant="text"
              @click="reserve"
            >
              Reservar cita
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-hover>
    </v-row>-->
    <v-row class="animation-opacity w-100 ma-0">
      <v-hover v-for="n in 5"
          :key="n" v-slot="{ isHovering, props }" close-delay="200">
          <v-card
            color="#ccc"
            theme="dark"
            :loading="loading"
            :elevation="isHovering ? 16 : 2"
            :class="{'on-hover': isHovering }"
            class="mx-auto my-12 text-left pb-2"
            width="auto"
            v-bind="props"
          >
            <div class="d-flex justify-start align-start ">
              <div class="d-flex flex-column h-100 align-center pt-2">
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
                  ></v-rating>
                </v-row>
                <v-card-title class="text-h5 mt-2 text-center">
                    Nombre
                </v-card-title>

                <v-card-subtitle class="mt-2 text-center">
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
                <v-card-subtitle class="w-75">
                  <div class="text-subtitle-1">
                    $ • 12,00
                  </div>
              
                  <span class="ms-1 pt-2 wrap pb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                </v-card-subtitle>
                <v-divider class="mx-4 mb-3 mt-3"></v-divider>
                <v-card-subtitle class="text-subtitle-1 font-weight-bold">Disponibilidad</v-card-subtitle>
        
                <div class="px-4 chip-group mt-2">
                  <v-chip-group>
                    <v-chip class="w-auto">5:30PM</v-chip>
            
                    <v-chip>7:30PM</v-chip>
            
                    <v-chip>8:00PM</v-chip>
            
                    <v-chip>9:00PM</v-chip>
                  </v-chip-group>
                </div>
                <v-card-actions>
                  <v-btn color="#33b5bd" variant="text" @click="reserve">Reservar cita</v-btn>
                </v-card-actions>
              </div>
            </div>
          </v-card>
      </v-hover>
    </v-row>
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
  animation: opacity 1s ease-in;
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
    animation: clipPath 2s ease-in;
    padding-bottom: 13%;
    padding-right: 1rem;
  }
  .title-h1 {
    text-decoration: 2px solid underline var(--aqua);
    text-underline-position: under;
    text-underline-offset: 10px;
    animation: opacity 1s ease-in;
  }
  .fade-show {
    animation: show 1.5s ease-in;
    animation-delay: 1.2s;
  }
  .img-container {
    position: relative;
  }
  .img-clip-path {
    transition: all 1s ease;
    clip-path: polygon(0% 72%, 25% 99%, 100% 65%, 100% 0%, 0% 0%);
  }
  .wrap {
    white-space: wrap;
  }
  /* Animaciones */
  @keyframes clipPath {
    from {
      clip-path: polygon(0% 72%, 25% 99%, 100% 65%, 100% 0%, 0% 0%);
    }
    to {
      opacity: 1;
    }
  }
  @keyframes opacity {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes show {
    from {
      opacity: 0;
      transform: translateX(100%);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  /* Animaciones */
  @media screen and (min-width: 600px) {
    .chip-group {
      width: 100%;
    }
  }
</style>