<template>
  <div class="d-flex flex-row align-center">
    <v-icon left>mdi-history</v-icon>
    <div class="flex-grow-1">
      <strong>Actualizado el</strong> 31/12/19
    </div>
    <v-btn text>
      <v-icon>mdi-download</v-icon>Descargar CSV
    </v-btn>
    <v-btn text>
      <v-icon>mdi-download</v-icon>Descargar Excel
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "FileFooter"
};
</script>