<template>
  <div id="app">
    <div
      :class="[
        'g-cursor',
        { 'g-cursor_hover': hover },
        { 'g-cursor_hide': hideCursor },
      ]"
    >
      <div :style="cursorCircle" class="g-cursor__circle"></div>
      <div class="g-cursor__point" ref="point" :style="cursorPoint"></div>
    </div>
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
  data() {
    return {
      xChild: 0,
      yChild: 0,
      xParent: 0,
      yParent: 0,
      hover: false,
      hideCursor: true,
    }
  },
  computed: {
    cursorCircle() {
      return `transform: translateX(${this.xParent}px) translateY(${this.yParent}px) translateZ(0) translate3d(0, 0, 0);`
    },
    cursorPoint() {
      return `transform: translateX(${this.xChild - 3}px) translateY(${
        this.yChild - 3
      }px) translateZ(0) translate3d(0, 0, 0);`
    },
  },
  methods: {
    moveCursor(e) {
      this.xChild = e.clientX
      this.yChild = e.clientY
      setTimeout(() => {
        this.xParent = e.clientX - 15
        this.yParent = e.clientY - 15
      }, 100)
    },
  },
  mounted() {
    document.addEventListener('mousemove', this.moveCursor)
    // eslint-disable-next-line no-unused-vars
    document.addEventListener('mouseleave', () => {
      this.hideCursor = true
    })
    // eslint-disable-next-line no-unused-vars
    document.addEventListener('mouseenter', () => {
      this.hideCursor = false
    })
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
