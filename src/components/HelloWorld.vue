<template>
  <v-row :justify="justify" align="center">
    <v-col cols="12" md="6">
      <slot>
        <h3 class="text-h4 mb-8">{{ title }}</h3>
        <p class="text-h6 font-weight-light">{{ description }}</p>
      </slot>
    </v-col>
    <v-col cols="12" md="4" :order="reversed ? 'first' : 'last'">
      <slot name="media">
        <v-img :src="image" aspect-ratio="16/9" max-height="400"></v-img>
      </slot>
    </v-col>
  </v-row>
</template>

<script>


export default {
  name: 'FeatureGrid',

  props: {
    title: {
      type: String,
      default: 'Title'
    },
    description: {
      type: String,
      default: null
    },
    image: {
      type: String,
      default: null
    },
    reversed: {
      type: Boolean,
      default: false
    },
    justify: {
      type: String,
      default: 'space-between'
    }
  }
}
</script>