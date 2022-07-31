<template>
  <div class="home-view">
    <div class="flex">
      <HomeHero />
      <LogoSvg />
    </div>

    <div class="fade-in-footer">
      <FooterView />
    </div>
  </div>
</template>

<script>
import LogoSvg from '@/components/LogoSvg.vue'
import FooterView from '@/components/FooterView.vue'
import HomeHero from '../components/HomeHero.vue'

export default {
  name: 'HomeView',
  components: { FooterView, LogoSvg, HomeHero },
}
</script>
