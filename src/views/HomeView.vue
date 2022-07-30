<template>
  <div class="home-view">
    <div class="flex">
      <HomeHero />
      <LogoSvg />
    </div>

    <div
      class="footer-animate"
      :class="{ 'fade-in-footer': isActive }"
      ref="footer"
    >
      <FooterView />
    </div>
  </div>
</template>

<script>
import LogoSvg from '@/components/LogoSvg.vue'
import FooterView from '@/components/FooterView.vue'
import HomeHero from '../components/HomeHero.vue'

import { reactive, toRefs, onMounted, ref } from 'vue'

export default {
  setup() {
    const state = reactive({
      isActive: false,
    })

    const footer = ref()

    onMounted(() => {
      window.addEventListener('scroll', handleScroll, { once: true })
    })

    const handleScroll = () => {
      state.isActive = true
    }

    return {
      ...toRefs(state),
      onMounted,
      handleScroll,
      footer,
    }
  },
  name: 'HomeView',
  components: { FooterView, LogoSvg, HomeHero },
}
</script>
