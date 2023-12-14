<template>
  <v-container fluid id="servicios">
    <v-row>
      <v-col v-for="service in services" :key="service.id" cols="12" xs="12" sm="12" md="4" lg="4" xl="3" xxl="3">
        <v-card elevation="10" height="320" color="blue-lighten-5">
          <v-card-text class="text-center text-overline">
            {{ service.title }}
            <v-carousel class="pt-2" hide-delimiter height hide-delimiters>
              <v-carousel-item v-for="(image, index) in service.images" :key="index">
                <v-img height="250" :src="image" />
              </v-carousel-item>
            </v-carousel>
          </v-card-text>
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
          ],
        },
        {
          id: 2,
          title: 'Mantenciones correctivas y preventivas en planta',
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
        {
          id: 8,
          title: 'Reparacion de componentes',
          images: [
            "https://firebasestorage.googleapis.com/v0/b/mc-maestranza.appspot.com/o/REPARACION%20DE%20COMPONENTES%201.jpg?alt=media&token=94317c90-a324-4631-9452-5758d10ff353",
            "https://firebasestorage.googleapis.com/v0/b/mc-maestranza.appspot.com/o/REPARACION%20DE%20COMPONENTES%202.jpg?alt=media&token=8ca18423-21da-404b-b385-99eb482664a1",
            "https://firebasestorage.googleapis.com/v0/b/mc-maestranza.appspot.com/o/REPARACION%20DE%20COMPONENTES%203.jpg?alt=media&token=df013acf-c2c6-4b31-883e-26fd3ae54e6d",
          ],
        },
        {
          id: 9,
          title: 'Recuperacion geometrica de componentes',
          images: [
            "https://firebasestorage.googleapis.com/v0/b/mc-maestranza.appspot.com/o/RECUPERACION%20GEOMETRICA%20DE%20COMPONENTES%201.jpg?alt=media&token=20ae5a54-1c83-444e-92a3-426d50fc59f0",
            "https://firebasestorage.googleapis.com/v0/b/mc-maestranza.appspot.com/o/RECUPERACION%20GEOMETRICA%20DE%20COMPONENTES%202.jpg?alt=media&token=311d29b5-6ab9-4a05-84be-2b4c5d274f3a",
            "https://firebasestorage.googleapis.com/v0/b/mc-maestranza.appspot.com/o/RECUPERACION%20GEOMETRICA%20DE%20COMPONENTES%203.jpg?alt=media&token=64217546-ad99-4b0a-ba17-7b72b9f2c442",
          ],
        },
        {
          id: 10,
          title: 'Mecanizado de piezas y componentes',
          images: [
            "https://firebasestorage.googleapis.com/v0/b/mc-maestranza.appspot.com/o/MECANIZADO%20DE%20PIEZAS%20Y%20COMPONENTES%201.jpg?alt=media&token=893afb93-b1ad-4a13-8f0f-ae70e09f9015",
            "https://firebasestorage.googleapis.com/v0/b/mc-maestranza.appspot.com/o/MECANIZADO%20DE%20PIEZAS%20Y%20COMPONENTES%202.jpg?alt=media&token=16f1e466-43c2-49bc-8818-536be5fc6d07",
          ],
        },
        {
          id: 11,
          title: 'Fabricacion de estructuras',
          images: [
            "https://firebasestorage.googleapis.com/v0/b/mc-maestranza.appspot.com/o/FABRICACION%20DE%20ESTRUCTURAS%201.jpg?alt=media&token=48fe358f-325b-49a3-ae8e-6fb5ab8bbf32"
          ],
        },
      ],
    };
  },

  methods: {
    async loadImages() {
      this.images = await getAllImages();
    },
  },
  async mounted() {
    // Llama a la función para cargar las imágenes al montar el componente
    await this.loadImages();
  },
};
</script>
