<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-toggle target="nav-collapse" />
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="mailto:info@redciudadana.org">
            <font-awesome-icon :icon="['fas', 'envelope']" class="mr-1" />info@redciudadana.org
          </b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto mr-3">
          <b-nav-item href="#" class="circle-item mx-1">
            <circle-icon>
              <font-awesome-icon :icon="['fab', 'facebook-f']" />
            </circle-icon>
          </b-nav-item>
          <b-nav-item href="#" class="circle-item mx-1">
            <circle-icon>
              <font-awesome-icon :icon="['fab', 'twitter']" />
            </circle-icon>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CircleIcon from '~/components/icons/CircleIcon.vue'

export default Vue.extend({
  components: {
    CircleIcon
  }
})
</script>

<style scoped>
.circle-item {
  width: 30px;
}
</style>
