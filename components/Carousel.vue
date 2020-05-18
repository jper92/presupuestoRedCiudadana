<template>
  <v-carousel
    :show-arrows="breakpoint.mdAndUp"
    :hide-delimiters="breakpoint.mdAndUp"
  >
    <v-carousel-item class="banner-gray">
      <v-container class="fill-height">
        <v-row>
          <v-col cols="12" md="7">
            <div class="d-flex flex-column pa-3">
              <div class="title">
                ¿Cómo se distribuye el presupuesto y el gasto a nivel nacional?
              </div>
              <div class="body-1">
                Navega en esta visualización para conocer el detalle de ejecución por cada institución y servicio cubiertos.
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="5">
            <div class="d-flex flex-column pa-3">
              Una imagen
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-carousel-item>
    <v-carousel-item class="banner-primary">
      <v-container class="fill-height">
        <v-row>
          <v-col cols="6">
            <div class="d-flex flex-column pa-3">
              <div class="title">
                Conoce todo sobre el presupuesto de la nación y como tus impuestos son invertidos por el gobierno
              </div>
            </div>
          </v-col>
          <v-col cols="6">
            <div class="d-flex flex-column pa-3">
              Una imagen
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import breakpointMixin from '~/utils/breakpointMixin'

export default {
  name: 'Carousel',

  mixins: [breakpointMixin]
}
</script>

<style scoped>
  .banner-gray {
    background-color: var(--v-background-gray-base);
    color: #fff;
  }

  .banner-primary {
      background-color: var(--v-primary-base);
      color: #fff;
  }
</style>
