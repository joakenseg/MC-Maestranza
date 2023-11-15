<template>
  <v-container>
    <HelloWorld v-for="(feature, index) in features" :key="'feature-grid' + feature.title" :title="feature.title"
      :description="feature.description" :image="feature.image" :reversed="index % 2 === 1 || isSmallScreen" class="my-5">
    </HelloWorld>
  </v-container>
</template>
  
<script>
import { useDisplay } from 'vuetify'
import HelloWorld from './HelloWorld.vue'
import videoImage from '../assets/image/services-images/Imagen2.jpg'

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
          "Nuestra misión es satisfacer eficientemente las necesidades de nuestros clientes; otorgando una excelente calidad en nuestros productos mediante la interrelación con proveedores adecuados, eligiéndolos minuciosamente. Siendo responsables, ya sea con el medio ambiente como con todas las personas que pertenecen a nuestra empresa, brindándoles las mejores condiciones laborales; utilizando como herramienta/objetivo inamovible el mejoramiento continuo.",
        image: videoImage
      },
      {
        title: 'Nuestra Visión',
        description:
          "La visión de nuestra empresa es obtener una posición sólida,  en el mercado nacional, posicionándonos como el número uno en reparación , fabricación , diseño y mantención de componentes mineros, servicios de corte por láser, oxicorte, plasma, además, toda aquella necesidad estructural o de servicios que nuestros clientes necesiten y que se encuentren al alcance de nuestras fortalezas y conocimientos",
        image: videoImage
      },
    ]
  })
}
</script>