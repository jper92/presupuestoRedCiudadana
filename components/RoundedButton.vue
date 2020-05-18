<template>
  <v-hover #default="{ hover }">
    <v-card :elevation="hover ? 3 : 0" @click="onClick">
      <div class="d-flex flex-column align-center">
        <div class="circle ma-2" />
        <v-btn color="primary ma-2 text-none">{{ text }}</v-btn>
      </div>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  name: "RoundedButton",

  props: {
    text: {
      type: String,
      required: true
    }
  },

  methods: {
    onClick() {
      this.$emit("click");
    }
  }
};
</script>

<style scoped>
.circle {
  border-radius: 100%;
  width: 150px;
  height: 150px;
  background-color: #404041;
}

.rounded-button-container {
  cursor: pointer;
}
</style>