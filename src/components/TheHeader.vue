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

  <v-app-bar height="80">
    <v-row>
      <v-col cols="6" md="6" class=" my-auto">
        <v-toolbar-title class="text-center">
          MC Maestranza
        </v-toolbar-title>
      </v-col>
      <v-col cols="6" md="6">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="mr-4 float-end" v-if="isXs" />
        <div v-else>
          <v-btn text @click="$vuetify.goTo('#inicio')">
            <span class="mr-2">Inicio</span>
          </v-btn>
          <v-btn text @click="$vuetify.goTo('#nosotros')">
            <span class="mr-2">Nosotros</span>
          </v-btn>
          <v-btn text @click="$vuetify.goTo('#servicios')">
            <span class="mr-2">Servicios</span>
          </v-btn>
          <v-btn text @click="$vuetify.goTo('#contacto')">
            <span class="mr-2">Contacto</span>
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