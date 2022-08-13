<template>
  <div class="cursor"></div>
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
    cursor() {
      /*  eslint-disable no-undef */
      /* eslint-disable no-unused-vars  */
      const updateProperties = (elem, state) => {
        elem.style.setProperty('--x', `${state.x}px`)
        elem.style.setProperty('--y', `${state.y}px`)
        elem.style.setProperty('--width', `${state.width}px`)
        elem.style.setProperty('--height', `${state.height}px`)
        elem.style.setProperty('--radius', state.radius)
        elem.style.setProperty('--scale', state.scale)
      }

      document.querySelectorAll('.cursor').forEach((cursor) => {
        const createState = (e) => {
          const defaultState = {
            x: e.clientX,
            y: e.clientY,
            width: 42,
            height: 42,
            radius: '100px',
          }

          return {
            ...defaultState,
          }
        }

        document.addEventListener('mousemove', (e) => {
          const state = createState(e)
          updateProperties(cursor, state)
        })
      })
    },
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
