<template>
  <div id="inicio">
    <v-img class="mx-auto" height="100%" max-width="100%" :src="image" />
  </div>
</template>

<script>
import defaultImage from '../assets/image/maestranza.png'

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

