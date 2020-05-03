<template>
  <b-row class="circle" align-h="center" align-v="center">
    <slot />
  </b-row>
</template>

<style scoped>
.circle {
  border: #fff 2px solid;
  border-radius: 100%;
  width: 30px;
  height: 30px;
  color: #fff;
}
</style>
