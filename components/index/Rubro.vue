<template>
  <v-row>
    <v-col cols="12">
      <v-card class="overflow-hidden" elevation="4">
        <v-simple-table>
          <thead class="primary">
            <tr>
              <th class="white--text title">Rubro</th>
              <th class="white--text title">Monto</th>
              <th class="white--text title">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in items" :key="index">
              <td>Servicios públicos generales</td>
              <td>Q123341234.23</td>
              <td>20%</td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Rubro",

  data() {
    return {
      items: [1, 2, 3]
    };
  }
};
</script>