<template>
  <v-row>
    <v-col cols="12" class="my-n3">
      <carousel />
    </v-col>
    <page-section class="gray-background">
      <v-row>
        <v-col cols="12">
          <div class="d-flex flex-column rounded-border text-center">
            <div
              class="primary title white--text pa-3"
            >Presupuesto general vigente de la República de Guatemala</div>
            <div class="white display-2 primary--text pa-3">Q10000.00</div>
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <div class="d-flex flex-column rounded-border text-center white pa-3">
            <div class="title pb-3">Gasto devengado</div>
            <div class="headline primary--text">Q123123</div>
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <div class="d-flex flex-column rounded-border text-center white pa-3">
            <div class="title pb-3">Porcentaje de ejecución</div>
            <div class="headline primary--text">10%</div>
          </div>
        </v-col>
      </v-row>
    </page-section>
    <page-section class="color-white">
      <v-row class="py-7">
        <v-col cols="3">
          <rounded-button text="¿A dónde va?" />
        </v-col>
        <v-col cols="3">
          <rounded-button text="¿De dónde viene?" />
        </v-col>
        <v-col cols="3">
          <rounded-button text="¿Cómo cambia?" />
        </v-col>
        <v-col cols="3">
          <rounded-button text="¿Cómo se elabora?" />
        </v-col>
      </v-row>
    </page-section>
    <page-section>
      <div class="title text-center">Ejecución presupuestaria por instituciones</div>
    </page-section>
    <page-section>
      <file-footer />
    </page-section>
    <page-section class="gray-background">
      <rubro />
    </page-section>
    <page-section class="gray-background">
      <file-footer />
    </page-section>
  </v-row>
</template>

<script>
import Carousel from "~/components/Carousel.vue";
import RoundedButton from "~/components/RoundedButton.vue";
import FileFooter from "~/components/FileFooter.vue";
import Rubro from "~/components/index/Rubro.vue";
import PageSection from "~/components/index/PageSection.vue";

export default {
  name: "Overview",

  components: {
    Carousel,
    RoundedButton,
    FileFooter,
    Rubro,
    PageSection
  }
};
</script>

<style scoped>
.gray-background {
  background-color: #ededee;
}

.rounded-border {
  border-radius: 5px;
  overflow: hidden;
}
</style>
