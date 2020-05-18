<template>
  <v-row>
    <v-col cols="12" class="my-n3">
      <carousel />
    </v-col>
    <v-col cols="12" class="my-n3 summary-container">
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="d-flex flex-column rounded-border text-center">
              <div class="primary title white--text pa-3">
                Presupuesto general vigente de la República de Guatemala
              </div>
              <div class="white display-2 primary--text pa-3">
                Q10000.00
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <div class="d-flex flex-column rounded-border text-center white pa-3">
              <div class="title pb-3">
                Gasto devengado
              </div>
              <div class="headline primary--text">
                Q123123
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <div class="d-flex flex-column rounded-border text-center white pa-3">
              <div class="title pb-3">
                Porcentaje de ejecución
              </div>
              <div class="headline primary--text">
                10%
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
import Carousel from '~/components/Carousel.vue'

export default {
  name: 'Overview',

  components: {
    Carousel
  }
}
</script>

<style scoped>
  .summary-container {
    background-color: #EDEDEE;
  }

  .rounded-border {
    border-radius: 5px;
    overflow: hidden;
  }
</style>
