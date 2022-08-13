<template>
  <div class="home-view">
    <div class="flex-reverse">
      <HomeHero />
      <LogoSvg />
    </div>
    <div class="about-me">
      <div class="line"></div>
      <p class="fadeIn">
        Ahoj. Volám sa Sebastián a baví ma vytvárať veci, ktoré žijú na
        internete. Zaroveň som nadšenec do technológií a posledný rok a pol sa
        vo voľnom čase venujem a učím front-end.
      </p>
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
import { reactive, toRefs } from 'vue'

export default {
  name: 'HomeView',
  setup() {
    const state = reactive({
      samState: '',
    })

    const resizeHand = (e) => {
      console.log(e)
    }

    return {
      ...toRefs(state),
      resizeHand,
    }
  },

  components: { FooterView, LogoSvg, HomeHero },
}
</script>
