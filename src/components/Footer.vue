<template>
  <div id="contacto">
    <v-footer height="auto" class="bg-grey-darken-4">
      <v-container>
        <v-row justify="space-around">
          <v-col cols="12" md="4">
            <v-container>

              <h3 class="text-start">Horario de atencion</h3>
              <v-divider :thickness="5" class="border-opacity-100 my-2" width="100" color="white"></v-divider>
              <p class="text-start">Lunes a Viernes de: 08:00 - 18:00</p>
              <h3 class="text-start pt-2">Sucursal</h3>
              <v-divider :thickness="5" class="border-opacity-100 my-2" width="100" color="white"></v-divider>
              <a href="https://www.google.com/maps/search/FUND%C3%93+CA%C3%91ITAS,+CAMINO+CA%C3%91ITAS+PARCELA+16-B1+KIL%C3%93METRO+7+COMUNA+DE+LOS+MUERMOS/@-41.3917472,-73.4595351,17z?hl=es-419&entry=ttu"
                class="text-start text-white">Fundo cañitas, camino cañitas s/n parcela 16-b1 kilómetro 7 comuna de los
                muermos,
                región de los lagos</a>
              <v-divider :thickness="1" class="border-opacity-100 my-2" color="white" width="250"></v-divider>

              <v-btn href="https://www.facebook.com/people/MC-Maestranza/61554447613611/" class="mr-2" color="blue"
                variant="outlined">
                <v-icon size="30">mdi-facebook</v-icon>
              </v-btn>
              <v-btn href="https://www.instagram.com/mc.maestranza23/" color="red-darken-1" class="mr-2"
                variant="outlined">
                <v-icon size="30">mdi-instagram</v-icon>
              </v-btn>
              <v-btn href="https://wa.me/56987698974" color="green" variant="outlined">
                <v-icon size="30">mdi-whatsapp</v-icon>
              </v-btn>
            </v-container>
          </v-col>

          <v-col cols="12" md="4">
            <v-container fluid>
              <div class="pb-2">
                <div class="my-2 float-left pr-1">
                  <v-icon size="50">mdi-home-circle-outline</v-icon>
                </div>
                <h3>Direccion</h3>
                <p class="text-white">La Hondonada 8421, Cerro Navia, Región Metropolitana</p>
              </div>
              <div class="py-3">
                <div class=" float-left pr-1">
                  <v-icon size="50">mdi-cellphone</v-icon>
                </div>
                <h3>Teléfono</h3>
                <p>+56 9 8769 8974</p>
              </div>
              <div class="py-3">
                <div class=" float-left pr-1">
                  <v-icon size=" 50">mdi-email-outline</v-icon>
                </div>
                <h3>Correo</h3>
                <a class="text-white" :href="emailLink">mc.maestranza23@gmail.com</a>
              </div>
            </v-container>
          </v-col>
          <v-divider :thickness="1" class="border-opacity-100" color="white"></v-divider>
          <v-col cols="12" md="6">
            <p class="text-center mt-3">© 2023 Maestranza MC. Todos los derechos reservados.</p>
          </v-col>
          <v-col cols="12" md="6">
            <p class="text-center">
              Desarrollado por <a href="https://www.linkedin.com/in/joaquin-ignacio-romero-fuenzalida-b9bb931b8"
                class="text-white pr-3">Joaquin Romero</a>
              <v-btn href="https://github.com/joakenseg" color="transparent" icon="mdi-github"></v-btn>
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      emailLink: this.generateEmailLink(),
    };
  },
  methods: {
    generateEmailLink() {
      const emailAddress = 'mc.maestranza23@gmail.com';
      const subject = 'Cotización';
      //const body = 'Contenido del cuerpo del correo electrónico';

      // Codifica los componentes del correo electrónico
      const encodedEmail = encodeURIComponent(emailAddress);
      const encodedSubject = encodeURIComponent(subject);
      //const encodedBody = encodeURIComponent(body);

      // Construye el enlace del correo electrónico
      const mailtoLink = `mailto:${encodedEmail}?subject=${encodedSubject}`;


      return mailtoLink;
    },
  },
};
</script>
