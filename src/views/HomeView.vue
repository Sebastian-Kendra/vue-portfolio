<template>
  <div class="home-view">
    <div class="flex" :class="{ active: fadeIn }">
      <HomeHero />
      <LogoSvg />
    </div>
    <div class="about-me">
      <hr />
      <p>
        Niečo o mne Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Saepe, eveniet. Debitis impedit pariatur earum quos, cupiditate dicta.
        Excepturi, nulla enim dolore, commodi in modi distinctio nemo neque,
        pariatur aspernatur facere!
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
      isActive: false,
    })

    const resizeHand = (e) => {
      console.log(e)
    }

    setTimeout(() => {
      state.isActive = true
    }, '200')

    return {
      ...toRefs(state),
      resizeHand,
    }
  },

  components: { FooterView, LogoSvg, HomeHero },
}
</script>
