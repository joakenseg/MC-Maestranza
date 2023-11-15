<template>
  <v-container id="servicios" class="my-3">
    <v-row>
      <v-col v-for="service in services" :key="service.id" cols="12" md="4">
        <v-card elevation="24">
          <v-carousel hide-delimiter height hide-delimiters>
            <v-carousel-item cover v-for="(image, index) in service.images" :key="index">
              <v-img :src="image"></v-img>
            </v-carousel-item>
          </v-carousel>
          <v-card-text class="text-h6 text-center">{{ service.title }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>


export default {
  name: 'Services',

  data() {
    return {
      services: [
        {
          id: 1,
          title: 'Servicio de corte por láser, oxicorte, plasma',
          images: [
            "/src/assets/image/services-images/Imagen3.jpg",
            "/src/assets/image/services-images/Imagen4.jpg",
            "/src/assets/image/services-images/Imagen5.jpg",
            "/src/assets/image/services-images/Imagen6.jpg",
          ],
        },
        {
          id: 2,
          title: 'Mantenciones correctivas y preventivas en planta (paradas de planta)',
          images: [
            "/src/assets/image/services-images/Imagen7.jpg",
            "/src/assets/image/services-images/Imagen8.jpg",
          ],
        },
        {
          id: 3,
          title: 'Correas transportadoras',
          images: [
            "/src/assets/image/services-images/Imagen0.jpg",
            "/src/assets/image/services-images/Imagen9.jpg",
          ],
        },
        {
          id: 4,
          title: 'Estanques verticales agua',
          images: [
            "/src/assets/image/services-images/Imagen10.jpg",
            "/src/assets/image/services-images/Imagen11.jpg",
          ],
        },
        {
          id: 5,
          title: 'Ingeniería',
          images: [
            "/src/assets/image/services-images/Imagen1.jpg",
          ],
        },
        {
          id: 6,
          title: 'Ensayos no destructivos',
          images: [
            "/src/assets/image/services-images/Imagen12.jpg",
            "/src/assets/image/services-images/Imagen13.jpg",
          ],
        },
        {
          id: 7,
          title: 'Inspecciones en terreno',
          images: [
            "/src/assets/image/services-images/Imagen14.jpg",
            "/src/assets/image/services-images/Imagen15.jpg",
          ],
        },
      ],
    };
  },
};
</script>
