<template>
  <v-container id="nosotros">
    <HelloWorld v-for="(feature, index) in features" :key="'feature-grid' + feature.title" :title="feature.title"
      :description="feature.description" :image="feature.image" :reversed="index % 2 === 1 || isSmallScreen" class="my-5">
    </HelloWorld>
  </v-container>
</template>
  
<script>
import { useDisplay } from 'vuetify'
import HelloWorld from './HelloWorld.vue'
import ourMision from '../assets/image/services-images/Imagen2.jpg'
import ourVision from '../assets/image/ourMision.jpg'

export default {
  name: 'Features',

  components: {
    HelloWorld
  },

  computed: {
    isSmallScreen() {
      const { sm, xs } = useDisplay()
      return sm.value || xs.value
    }
  },

  data: () => ({
    features: [
      {
        title: 'Nuestra Misión',
        description:
          "Satisfacer de una manera eficiente las necesidades de nuestros clientes, otorgando servicios de calidad en los productos fabricados, reparados, diseñados, mediante la mejora continua en nuestro procesos administrativos y productivos, poniendo énfasis en el bienestar de los clientes, nuestro personal colaborador y quienes participan de nuestras operaciones.",
        image: ourMision
      },
      {
        title: 'Nuestra Visión',
        description:
          "Obtener una posición solida en el mercado nacional mediante nuestro productos y servicios en lo que se refiere a fabricación, reparación, diseños y mantención de componentes  mineros , agrícolas, estructuras metálicas en general, servicios de corte por laser, oxicorte y toda aquella necesidad que nuestros potenciales clientes necesiten y se encuentren al alcance de nuestras fortalezas y conocimientos.",
        image: ourVision
      },
    ]
  })
}
</script>