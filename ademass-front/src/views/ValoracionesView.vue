<template>
    <v-app class="w-100 d-flex flex-column align-center text-center pa-2 animation-opacity">
        <h1 class="text-h4 mb-8 my-12 title-h1">Valoraciones de nuestros servicios</h1>
        <small class>¡Gracias por compartir tu opinión con nosotros!</small>
        <small class>Tu opinión nos impulsa a seguir mejorando.</small>
        <small class><b>Nuestros usuarios nos dan:</b></small>
        <div class="text-h2 mt-5">
                    3.5
                <span class="text-h6 ml-n3">/5</span>
        </div>
        <v-rating
        v-model="ratingFetch"
        readonly
        color="yellow-darken-3"
        class="justify-center"
        ></v-rating>
        <v-card
      class="w-100 my-12"
        >
        <p class="w-100 my-8">¿Qué tan satisfecho estás de nuestro servicio?.</p>

        <div class="text-center my-4">
            <pre>{{ rating }}</pre>
            <v-rating
            v-model="rating"
            hover
            half-increments
            color="#ccc"
            active-color="#33b5bd"
            ></v-rating>
        </div>
        <v-divider inset></v-divider>
        <v-form class="w-100 p-3">
            <v-progress-linear
            :active="isUpdating"
            :indeterminate="isUpdating"
            absolute
            bottom
            color="#33b5bd"
            ></v-progress-linear>
            <v-container>
                <v-row dense>
                    <v-col cols="12">
                        <v-text-field
                            v-model="title"
                            :disabled="isUpdating"
                            color="#000"
                            label='Email'
                            variant="underlined"
                        ></v-text-field>
                    </v-col>
        
                    <v-col cols="12" class="my-4">
                        <v-textarea label="Comentarios" variant="outlined" v-model="comments"></v-textarea>
                    </v-col>
                    <v-col cols="12" class="my-4">
                        <v-btn color="#33b5bd" @click="handleSend">Enviar</v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-form>
        
    </v-card>
    <div class="d-flex justify-start my-12 text-h5 ">
            Opiniones
            </div>

            <v-card v-for="(el, index) in array"
            :key="index"
            class="mx-auto my-12"
            color="#33b5bd"
            theme="dark"
            max-width="100%"
            >
            <v-card-actions>
                <v-list-item class="d-flex flex-column align-start">
                    <div class="d-flex flex-row align-center ga-3">
                        <v-avatar
                            color="grey-darken-3"
                            :image="el.avatar"
                        ></v-avatar>
                        <v-list-item-title>{{el.Usuario}}</v-list-item-title>
                    </div>
                    <v-rating
                    v-model="el.estrellas"
                    readonly
                    color="#fff"
                    ></v-rating>

                </v-list-item>
            </v-card-actions>

                <v-card-text class="text-body-1 pb-8 pt-0">
                {{ el.comentario }}
                </v-card-text>

            </v-card>

            <div class="d-flex justify-center mt-auto text-h5 ">
            Rating overview
            </div>

            <div class="d-flex align-center flex-column my-auto">
                <div class="text-h2 mt-5">
                    3.5
                    <span class="text-h6 ml-n3">/5</span>
                </div>

                <v-rating
                v-model="ratingFetch"
                readonly
                color="yellow-darken-3"
                ></v-rating>
                <div class="px-3">3,360 ratings</div>
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
                    color="#33b5bd"
                    height="20"
                    rounded
                    ></v-progress-linear>

                    <template v-slot:prepend>
                        <span>{{ rating }}</span>
                        <v-icon icon="mdi-star" color="#33b5bd" class="mx-3"></v-icon>
                    </template>

                    <template v-slot:append>
                        <div class="rating-values">
                            <span class="d-flex justify-end"> {{ rating * 224 }} </span>
                        </div>
                    </template>
                </v-list-item>
            </v-list>
    </v-app>
  </template>
  <script lang="ts" setup>
    import { ref } from 'vue';
  
    const isUpdating = ref(false);
    const comments = ref('');
    const title = ref('');

    const handleSend = () => {
        isUpdating.value = true;
        
        setTimeout(() => (isUpdating.value = false), 2000)
    }

    /* Select ranting */

    const rating = ref(4.5)
    const ratingFetch = ref(3.5)

    /* Comments table */
    const array = [
        {Usuario: 'Usuario', comentario: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, voluptas', estrellas: 5, avatar: "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"},
        {Usuario: 'Usuario', comentario: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, voluptas', estrellas: 1, avatar: 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light'},
        {Usuario: 'Usuario', comentario: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, voluptas', estrellas: 2.5, avatar: 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light'},
        {Usuario: 'Usuario', comentario: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, voluptas', estrellas: 3.5, avatar: 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light'},
    ]
</script>