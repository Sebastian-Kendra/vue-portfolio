<template>
  <div class="home-view">
    <div class="flex">
      <div class="hero">
        <!--  eslint-disable-next-line prettier/prettier -->

        <div class="text-zone fade-in">
          <h1>Sebastián Kendra</h1>
          <h2>Front-end developer</h2>

          <div class="wrapper-btn">
            <button class="primary-btn btn">
              <p>
                <a href="/contact" class="contact-btn-link"> Kontaktuj ma </a>
              </p>
            </button>
            <button class="second-btn btn">
              <p>
                <a href="Sebastián-Kendra.pdf" download="">Stiahni životopis</a>
              </p>
            </button>
          </div>
        </div>
        <!--  eslint-disable-next-line prettier/prettier -->
      </div>

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
  components: { FooterView, LogoSvg },
}
</script>
