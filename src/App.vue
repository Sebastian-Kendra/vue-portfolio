<template>
  <div class="cursor"></div>
  <div id="app-container">
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
      const updateProperties = (elem, state) => {
        elem.style.setProperty('--x', `${state.x}px`)
        elem.style.setProperty('--y', `${state.y}px`)
      }

      document.querySelectorAll('.cursor').forEach((cursor) => {
        const createState = (e) => {
          const defaultState = {
            x: e.clientX,
            y: e.clientY,
          }

          return {
            ...defaultState,
          }
        }

        document.addEventListener('mousemove', (e) => {
          if (typeof window.orientation === 'undefined') {
            const state = createState(e)
            updateProperties(cursor, state)
          }
        })

        document.addEventListener('mouseleave', () => {
          if (typeof window.orientation === 'undefined') {
            cursor.style.setProperty('--display', 'none')
          }
        })

        document.addEventListener('mouseenter', () => {
          if (typeof window.orientation === 'undefined') {
            cursor.style.setProperty('--display', 'block')
          }
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
