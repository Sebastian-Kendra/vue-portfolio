<template>
  <div id="app">
    <header class="fade-in">
      <TheNavigation />
    </header>

    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<script>
import TheNavigation from './components/TheNavigation.vue'

export default {
  components: {
    TheNavigation,
  },
  mounted() {
    this.cursor()
  },
  methods: {
    /* eslint-disable no-undef */
    /* eslint-disable no-unused-vars */

    cursor() {},
  },
}
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
