<template>
  <v-container fluid :justify="justify" align="center" class="bg-grey-lighten-2">
    <slot>
      <h3 class="text-h4">{{ title }}</h3>
      <v-divider :thickness="5" class="border-opacity-100 my-2" width="150" color="blue-lighten-1"></v-divider>
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