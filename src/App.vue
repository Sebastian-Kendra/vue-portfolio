<template>
  <div id="app-container">
    <TheNavigation class="fade-in" />
    <div class="cursor"></div>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import TheNavigation from './components/TheNavigation.vue'
// import { nextTick } from 'vue'

export default {
  components: {
    TheNavigation,
  },
  data() {
    return {}
  },
  computed: {
    mobile() {
      return this.detectMob()
    },
  },
  mounted() {
    console.log()
    setTimeout(this.cursor(), 200)
  },
  methods: {
    detectMob() {
      const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i,
      ]

      return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem)
      })
    },
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

          if (this.mobile === true) {
            cursor.style.setProperty('--display', 'none')
          }

          return {
            ...defaultState,
          }
        }

        document.addEventListener('mousemove', (e) => {
          const state = createState(e)
          updateProperties(cursor, state)
        })

        document.addEventListener('mouseleave', () => {
          cursor.style.setProperty('--display', 'none')
        })

        document.addEventListener('mouseenter', () => {
          cursor.style.setProperty('--display', 'block')
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
