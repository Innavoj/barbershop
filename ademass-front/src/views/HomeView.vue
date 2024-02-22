<template>
    <v-app class="text-center fade-show">
    <!--Imagen destacada-->
    <div class="img-container">
        <v-img class="img" aspect-ratio="16/9" cover src="https://firebasestorage.googleapis.com/v0/b/bd-audios.appspot.com/o/barbero-que-afeita-cuello-cliente.jpg?alt=media&token=1feb5965-294e-4c37-abcf-08e2bdb57c9f"></v-img>
        <div class="dark">
            <div class="d-flex flex-column fill-height justify-center align-center text-white pb-6 div-text">
                <h1 class="text-h4 mb-4">
                    Title
                </h1>
                <p class="mb-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, laudantium!
                </p>
            </div>
        </div>
        <p class="social">
          <a class="router-link" href="#" style="color: #fff;">
            <v-icon color="#fff" class="fade-show-icons-1">mdi-instagram</v-icon>
          </a>
          <a class="router-link" href="#" style="color: #fff;">
            <v-icon color="#fff" class="fade-show-icons-2">mdi-whatsapp</v-icon>
          </a>
          <a class="router-link" href="#" style="color: #fff;">
            <v-icon color="#fff" class="fade-show-icons-3">mdi-facebook-messenger</v-icon>
          </a>
        </p>
    </div>
    <!--Imagen destacada-->

    <!--Servicios-->
    <h1 class="text-h4 mb-4 mt-6 title-servicios text-center">Servicios</h1>
    <v-row class="servicios">
        <v-col v-for="(servicio, index) in servicios" :key="index" cols="12" sm="6" class="mb-6">
            <v-card :prepend-icon="servicio.icono" :title="servicio.titulo">
                <div class="d-flex flex-no-wrap justify-space-evenly align-center pa-0 pb-2">
                    <div class="d-flex align-center justify-center width-60 pa-0 pb-2">
                        <v-card-title class="text-subtitle-1 pa-0">Descripción</v-card-title>
                        <v-card-subtitle>$12.00</v-card-subtitle>
                    </div>
                    <v-btn color="#33b5bd" size="small" class="btn text-capitalize">Reservar</v-btn>
                </div>
                <v-divider inset></v-divider>
                <div class="d-flex flex-no-wrap justify-space-evenly align-center pa-0 pb-2">
                    <div class="d-flex align-center justify-center width-60 pa-0 pb-2">
                        <v-card-title class="text-subtitle-1 pa-0">Descripción</v-card-title>
                        <v-card-subtitle>$12.00</v-card-subtitle>
                    </div>
                    <v-btn color="#33b5bd" size="small" class="btn text-capitalize">Reservar</v-btn>
                </div>
                <v-divider inset></v-divider>
                <div class="d-flex flex-no-wrap justify-space-evenly align-center pa-0 pb-2">
                    <div class="d-flex align-center justify-center width-60 pa-0 pb-2">
                        <v-card-title class="text-subtitle-1 pa-0">Descripción</v-card-title>
                        <v-card-subtitle>$12.00</v-card-subtitle>
                    </div>
                    <v-btn color="#33b5bd" size="small" class="btn text-capitalize">Reservar</v-btn>
                </div>
                <v-divider inset></v-divider>
            </v-card>
      </v-col>
    </v-row>
    <!--Servicios-->
  
    <!--Productos-->
    <v-layout class="d-flex flex-column align-center section-clip-path pt-12 pb-16 pa-3">
        <h1 class="text-h4 mb-4 pt-6 pb-3 mt-2">Productos</h1>
      <div class="slider w-100">
        <v-sheet
      class="mx-auto slider-productos"
      max-height="360"
      max-width="340" color="#33b5bd00"
    >
      <v-slide-group
        v-model="model"
        multiple
        show-arrows
      >
        <v-slide-group-item
          v-for="n in 15"
          :key="n"
          v-slot="{ toggle, selectedClass }"
        >
          <v-card
            color="white"
            :class="['ma-4 d-flex flex-column align-center justify-space-beteween card-producto pa-2 pb-3', selectedClass]"
            height="300"
            max-width="230"
            @click="toggle"
          >
          <v-img aspect-ratio="4/9" cover src="https://cdn.vuetifyjs.com/images/cards/cooking.png" class="w-100"></v-img>
          <p class="text-body-2 pa-2">Lorem ipsum dolor sit amet consectetur</p>
          <v-btn prepend-icon="mdi-shopping" color="#33b5bd">Pedir</v-btn>
            
          </v-card>
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>
      </div>
    </v-layout>
    <!--Productos-->
    
    <!--Nosotros-->
    <v-sheet class="pb-12 fade-show ma-3">
      <h1 class="text-h4 mb-4 mt-6 text-center pb-6">Nosotros</h1>
      <v-card-text class="pb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!</v-card-text>
      <div class="grid w-100">
        <v-hover v-for="n in 5"
            :key="n" v-slot="{ isHovering, props }" close-delay="200">
            <v-card
              color="#ccc"
              theme="dark"
              :elevation="isHovering ? 16 : 2"
              :class="{'on-hover': isHovering }"
              class="my-12 text-left pa-2 pb-2 mx-auto"
              width="100%"
              v-bind="props"
            >
              <v-img aspect-ratio="4/9" cover src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg" class="w-100"></v-img>
              <p class="text-h6 pa-2">Nombre</p>
              <p class="text-body-2 pa-2">Lorem ipsum dolor sit amet consectetur</p>
            </v-card>
        </v-hover>
    </div>
    </v-sheet>
    <!--Nosotros-->
    
    <!--Opiniones-->
    <v-sheet class="pb-12">
        <h1 class="text-h4 mb-4 pt-6 pb-8 mt-2">Opiniones</h1>
        <v-card
    class="d-flex flex-column mx-auto py-8 pb-3"
    elevation="10"
    height="500"
    width="80%"
  >
        <div class="d-flex justify-center mt-auto text-h5 ">
        Rating overview
        </div>

        <div class="d-flex align-center flex-column my-auto">
        <div class="text-h2 mt-5">
            4.5
            <span class="text-h6 ml-n3">/5</span>
        </div>

        <v-rating
            :model-value="3.5"
            color="yellow-darken-3"
            half-increments
        ></v-rating>
        <div class="px-3">4,360 ratings</div>
        </div>

        <v-list
        bg-color="transparent"
        class="d-flex flex-column-reverse"
        density="compact"
        >
        <v-list-item v-for="(rating,i) in 5" :key="i">
            <v-progress-linear
            :model-value="rating * 15"
            class="mx-n5"
            color="yellow-darken-3"
            height="20"
            rounded
            ></v-progress-linear>

            <template v-slot:prepend>
            <span>{{ rating }}</span>
            <v-icon icon="mdi-star" class="mx-3"></v-icon>
            </template>

            <template v-slot:append>
            <div class="rating-values">
                <span class="d-flex justify-end"> {{ rating * 224 }} </span>
            </div>
            </template>
        </v-list-item>
        </v-list>
    </v-card>
    </v-sheet>
    <!--Opiniones-->

    </v-app>
</template>
  <script setup lang='ts'>
  import { Ref, ref } from 'vue';
  const servicios= [
          { titulo: 'Servicio 1', icono: 'mdi-content-cut' },
          { titulo: 'Servicio 2', icono: 'mdi-chair-rolling' },
          { titulo: 'Servicio 3', icono: 'mdi-hair-dryer' },
          { titulo: 'Servicio 4', icono: 'mdi-hair-dryer' }
  ]
  const model: Ref<string> = ref('')
  </script>
  <style scoped>

  .btn:focus {
    outline: none !important;
  }
  .dark {
    width: 100%;
    height: 100%;
    top: 0;
    transition: all 1s ease;
    position: absolute;
    clip-path: polygon(0% 90%, 25% 99.9%, 100% 93%, 100% 0%, 0% 0%);
    background-color: rgba(0, 0, 0, 0.42);
    animation: clipPath 2s ease-in;
  }
  .fade-show {
    animation: show 2s ease-in;
  }
  .fade-show-icons-1 {
    animation: showIcons 1.7s ease-in;
    animation-delay: 1s;
  }
  .fade-show-icons-2 {
    animation: showIcons 1.7s ease-in;
    animation-delay: 1.3s;
  }
  .fade-show-icons-3 {
    animation: showIcons 1.7s ease-in;
    animation-delay: 1.4s;
  }
  .grid {
    display: flex;
    flex-direction: column;
  }
  .img-container h1, .img-container p {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  .img {
    width: 100vw;
    transition: all 1s ease;
    clip-path: polygon(0% 72%, 25% 99%, 100% 65%, 100% 0%, 0% 0%);
  }
  .img-container {
    position: relative;
    width: 100%;
    text-align: center;
  }
  .section-clip-path {
    background: linear-gradient(#ccc, #fff);
    position: relative;
    /*min-height: 15rem;*/
    clip-path: polygon(25% 35%, 100% 0%, 100% 99%, 0% 99%, 0% 1%);
    clip-path: polygon(25% 15%, 100% 0%, 100% 99%, 0% 99%, 0% 1%);
  }
  .servicios {
    margin: 0;
  }
  .social {
    width: 35%;
    display: flex;
    gap: 0.5rem;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    position: absolute;
    bottom: 2rem;
    right: 0.5rem;
    padding: 0 !important;
    transition: all 1s ease;
  }
  .social .v-icon {
    transition: all 0.2s ease-out;
  }
  .social .v-icon:hover {
    transform: translateY(-4px);
  }

  @media screen and (min-width:500px) {
    .img {
      clip-path: polygon(0% 72%, 25% 99%, 100% 75%, 100% 0%, 0% 0%);
    }
  }

  @media screen and (min-width:600px) {
    .card-producto {
      width: 200px !important;
      max-height: 300px !important;
      text-align: center;
    }
    .grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
    .slider-productos {
      max-width: 800px !important;
    }
    .v-icon {
      font-size: 2rem;
      /*color: #33b5bd !important;*/
    }
    /*
    .social .v-icon:hover {
      transform: translateX(-4px);
      color: #fff !important;
    }*/
    .social {
        right: 1rem;
    }
    .width-50 {
      width: 50%;
    }
  }
  @media screen and (min-width:700px) {
   
    .dark {
      clip-path: polygon(0% 65%, 25% 68%, 100% 65%, 100% 0%, 0% 0%);
    }
     .title-servicios {
      margin-top: -15% !important;
    }
    .servicios {
      margin: 3rem;
    }
    .social {
      bottom: 36%;
      right: -1rem;
    }
      /** Animaciones **/
  @keyframes clipPath {
    from {
      clip-path: polygon(0% 55%, 25% 68%, 100% 50%, 100% 0%, 0% 0%);
    }
    to {
      clip-path: polygon(0% 65%, 25% 68%, 100% 65%, 100% 0%, 0% 0%);
    }
  }
  /** Animaciones **/
    
    /* .social {
      height: 60%;
      flex-direction: column;
      align-items: flex-end;
      padding: 2rem;
      top: 2%;
    }*/
    .img {
      clip-path: polygon(0% 55%, 25% 68%, 100% 50%, 100% 0%, 0% 0%);
    }
    .card-nosotros {
      height: 450px !important;
    }
  }
  @media screen and (min-width: 1500px){
    .grid {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 1rem;
    }
    .v-icon {
      font-size: 3rem;
    }
  }
  </style>