<template>
  <v-navigation-drawer v-model="drawer" app temporary>
    <v-list>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="/src/assets/mc recortado.png" max-width="150px" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="title">MC Maestranza</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider />

    <v-list dense>
      <v-list-item v-for="([text, link], i) in items" :key="i" link @click="$vuetify.goTo(link)">
        <v-list-item-content>
          <v-list-item-title class="subtitile-1">{{
            text
          }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

  <v-app-bar app class="px-15">
    <v-toolbar-title>
      <v-toolbar-title>MC Maestranza</v-toolbar-title>
      <!-- <v-img src=" /src/assets/mc recortado.png" max-width="150px" /> -->
    </v-toolbar-title>
    <v-spacer />
    <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="mr-4" v-if="isXs" />
    <div v-else>
      <v-btn text @click="$vuetify.goTo('#home')">
        <span class="mr-2">Home</span>
      </v-btn>
      <v-btn text @click="$vuetify.goTo('#services')">
        <span class="mr-2">Services</span>
      </v-btn>
      <v-btn text @click="$vuetify.goTo('#about')">
        <span class="mr-2">About</span>
      </v-btn>
      <v-btn text @click="$vuetify.goTo('#contact')">
        <span class="mr-2">Contact</span>
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    isXs: false,
    items: [
      ["Home", "#home"],
      ["Services", "#services"],
      ["About", "#about"],
      ["Contact", "#contact"],
    ],
  }),
  props: {
    color: String,
    flat: Boolean,
  },
  methods: {
    onResize() {
      this.isXs = window.innerWidth < 850;
    },
  },

  watch: {
    isXs(value) {
      if (!value) {
        if (this.drawer) {
          this.drawer = false;
        }
      }
    },
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
};
</script>