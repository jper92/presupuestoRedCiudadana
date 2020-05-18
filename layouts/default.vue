<template>
  <v-app>
    <v-app-bar fixed app dark color="primary">
      <v-container>
        <v-toolbar-title v-text="title" />
        <v-spacer />
      </v-container>
    </v-app-bar>
    <v-content>
      <v-toolbar light>
        <v-container class="d-flex flex-row align-end">
          <div class="title primary--text d-none d-md-flex">
            ¿A dónde van mis impuestos?
          </div>
          <v-tabs right show-arrows>
            <v-tab class="tab">
              ¿A dónde van mis impuestos?
            </v-tab>
            <v-tab class="tab">
              Arma tu presupuesto
            </v-tab>
            <v-tab class="tab">
              Presupuesto 2019
            </v-tab>
            <v-tab class="tab">
              Contrataciones abiertas
            </v-tab>
          </v-tabs>
        </v-container>
      </v-toolbar>
      <nuxt />
    </v-content>
    <v-footer>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      title: 'info@redciudadana.org.gt'
    }
  }
}
</script>

<style scoped>
 .tab {
   max-width: 150px;
   text-transform: none;
 }
</style>
