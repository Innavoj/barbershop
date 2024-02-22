<template>
    <v-app class="w-100 d-flex flex-column align-center text-center pa-2 animation-opacity">
        <h1 class="text-h4 mb-8 my-12 title-h1">¡Contáctanos!</h1>
        <p>¿Tienes alguna pregunta o comentario?</p>
        <p>¡Nos encantaría escucharte! No dudes en ponerte en contacto con nosotros.</p>
        <v-card
      class="w-100 my-12"
        >
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
                        v-model="name"
                        :disabled="isUpdating"
                        color="#000"
                        label='Usuario'
                        variant="underlined"
                    ></v-text-field>
                </v-col>
    
                <v-col cols="12">
                    <v-text-field
                        v-model="title"
                        :disabled="isUpdating"
                        color="#000"
                        label="Email"
                        variant="underlined"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" class="my-4">
                    <v-textarea label="Mensaje" variant="outlined" v-model="message"></v-textarea>
                </v-col>
                <v-col cols="12" class="my-4">
                    <v-btn color="#33b5bd" @click="handleSend">Enviar</v-btn>
                </v-col>
            </v-row>
            </v-container>
        </v-form>

    </v-card>
    </v-app>
  </template>
  <script lang="ts" setup>
    import { ref } from 'vue';
  
    const isUpdating = ref(false);
    const name = ref('');
    const message = ref('');
    const title = ref('');

    const handleSend = () => {
        isUpdating.value = true;
        
        setTimeout(() => (isUpdating.value = false), 2000)
    }
</script>
<style>
    .animation-opacity {
        animation: opacity 1s ease-in; /* Animaciones del app.vue*/
    }
</style>