<template>
  <div class="flex">
    <div class="hero">
      <h1>Sebastian Kendra</h1>
      <h2>Front-end developer</h2>

      <div class="wrapper-btn">
        <button class="primary-btn btn">
          <p>Kontaktuj ma</p>
        </button>
        <button class="second-btn btn">
          <p><a>Stiahni životopis</a></p>
        </button>
      </div>
    </div>
    <LogoSvg />
  </div>
</template>

<script>
import LogoSvg from '@/components/LogoSvg.vue'

export default {
  name: 'HomeView',
  components: { LogoSvg },
}
</script>
