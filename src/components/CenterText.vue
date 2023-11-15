<template>
  <v-container fluid :justify="justify" align="center" class="bg-lime-lighten-4">
    <slot>
      <h3 class="text-h4 my-5">{{ title }}</h3>
      <v-divider></v-divider>
    </slot>
  </v-container>
</template>
  
<script>

export default {
  name: 'FeatureGrid',

  props: {
    title: {
      type: String,
      default: 'Title'
    },
    justify: {
      type: String,
      default: 'space-between'
    }
  }
}
</script>