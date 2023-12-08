<template>
  <v-navigation-drawer v-model="drawer" app temporary>
    <v-list>
      <v-list-item>
        <v-list-item-title class="title">MC Maestranza</v-list-item-title>
      </v-list-item>
    </v-list>

    <v-divider />

    <v-list dense>
      <v-list-item v-for="([text, link], i) in items" :key="i" link @click="scrollToSection(link)">
        <v-list-item-title class="subtitile-1">
          {{ text }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

  <v-app-bar height="80" class="bg-blue-lighten-1">
    <v-row>
      <v-col cols="7" md="6" class=" my-auto">
        <h2 class="text-center">
          MC Maestranza
        </h2>
      </v-col>
      <v-col cols="5" md="6">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="mr-4 float-end" v-if="isXs" />
        <div v-else>
          <v-btn text v-for="([text, link], i) in items" :key="i" link @click="scrollToSection(link)">
            <span class="mr-2 ma-2">{{ text }}</span>
          </v-btn>
        </div>
      </v-col>
    </v-row>

  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    isXs: false,
    items: [
      ["Inicio", "#inicio"],
      ["Nosotros", "#nosotros"],
      ["Servicios", "#servicios"],
      ["Contacto", "#contacto"],
    ],
  }),
  methods: {
    onResize() {
      this.isXs = window.innerWidth < 850;
    },
    scrollToSection(link) {
      const element = document.querySelector(link);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      // Cierra el drawer en dispositivos móviles
      if (this.isXs) {
        this.drawer = false;
      }
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