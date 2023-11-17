<template>
  <v-container id="servicios" class="my-3">
    <v-row>
      <v-col v-for="service in services" :key="service.id" cols="12" md="4">
        <v-card elevation="24">
          <v-carousel hide-delimiter height hide-delimiters>
            <v-carousel-item v-for="(image, index) in service.images" :key="index">
              <v-img :src="image" />
            </v-carousel-item>
          </v-carousel>
          <v-card-text class="text-h6 text-center">{{ service.title }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>


import { getAllImages } from "../config/firebase";

export default {
  name: 'Services',

  data() {
    return {
      services: [
        {
          id: 1,
          title: 'Servicio de corte por láser, oxicorte, plasma',
          images: [
            "https://firebasestorage.googleapis.com/v0/b/mc-maestranza.appspot.com/o/Imagen3.jpg?alt=media&token=a75c18b8-d8a3-491e-89e7-13cb8d282ee0",
            "https://firebasestorage.googleapis.com/v0/b/mc-maestranza.appspot.com/o/Imagen4.jpg?alt=media&token=2d4a0c6a-f47d-495c-8b3e-e4c4cbf1f835",
            "https://firebasestorage.googleapis.com/v0/b/mc-maestranza.appspot.com/o/Imagen5.jpg?alt=media&token=e48d677b-fe10-459d-9e13-76b06799f26a"
          ],
        },
        {
          id: 2,
          title: 'Mantenciones correctivas y preventivas en planta (paradas de planta)',
          images: [
            "https://firebasestorage.googleapis.com/v0/b/mc-maestranza.appspot.com/o/Imagen7.jpg?alt=media&token=ed969093-b2bd-4577-89b8-bfb09f74575f",
            "https://firebasestorage.googleapis.com/v0/b/mc-maestranza.appspot.com/o/Imagen8.jpg?alt=media&token=8b044083-61af-4d66-9f8b-7c772f197341"
          ],
        },
        {
          id: 3,
          title: 'Correas transportadoras',
          images: [
            "https://firebasestorage.googleapis.com/v0/b/mc-maestranza.appspot.com/o/Imagen0.jpg?alt=media&token=e11b85b0-32ad-4100-be94-9dabd945f7ae",
            "https://firebasestorage.googleapis.com/v0/b/mc-maestranza.appspot.com/o/Imagen9.jpg?alt=media&token=6c8bf2ee-cb3b-4604-9c7e-f7154a985ceb"
          ],

        },
        {
          id: 4,
          title: 'Estanques verticales agua',
          images: [
            "https://firebasestorage.googleapis.com/v0/b/mc-maestranza.appspot.com/o/Imagen10.jpg?alt=media&token=4b1348d0-8561-4e55-9916-be39fda0db41",
            "https://firebasestorage.googleapis.com/v0/b/mc-maestranza.appspot.com/o/Imagen11.jpg?alt=media&token=9058ad2d-1d77-49f5-998e-620c29474ced"
          ],
        },
        {
          id: 5,
          title: 'Ingeniería',
          images: [
            "https://firebasestorage.googleapis.com/v0/b/mc-maestranza.appspot.com/o/Imagen1.jpg?alt=media&token=ed158a2d-051f-4c6d-bf1f-72bf6d94dd9a"
          ],
        },
        {
          id: 6,
          title: 'Ensayos no destructivos',
          images: [
            "https://firebasestorage.googleapis.com/v0/b/mc-maestranza.appspot.com/o/Imagen12.jpg?alt=media&token=5754b9b5-0bdc-4b1b-80de-15cd0c5194b2",
            "https://firebasestorage.googleapis.com/v0/b/mc-maestranza.appspot.com/o/Imagen13.jpg?alt=media&token=44717b78-328d-47f2-a36c-28ba71a2b2c5"
          ],
        },
        {
          id: 7,
          title: 'Inspecciones en terreno',
          images: [
            "https://firebasestorage.googleapis.com/v0/b/mc-maestranza.appspot.com/o/Imagen14.jpg?alt=media&token=5e3d47eb-f454-4eda-9b93-308cf4384e37",
            "https://firebasestorage.googleapis.com/v0/b/mc-maestranza.appspot.com/o/Imagen15.jpg?alt=media&token=fb5bad62-2dd0-4207-b53b-7e95800927bc"
          ],
        },
      ],
      images: [],
    };
  },

  methods: {
    async loadImages() {
      // Obtiene todas las imágenes desde Firebase Storage
      this.images = await getAllImages();
    },
  },
  async mounted() {
    // Llama a la función para cargar las imágenes al montar el componente
    await this.loadImages();
  },
};
</script>
