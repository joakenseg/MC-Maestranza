<template>
  <div id="inicio">
    <v-img :src="image" />
  </div>
</template>

<script>
import defaultImage from '../assets/image/maestranzamc.png'

export default {
  name: 'FeatureGrid',

  props: {
    image: {
      type: String,
      default: defaultImage
    },
  }
}
</script>

