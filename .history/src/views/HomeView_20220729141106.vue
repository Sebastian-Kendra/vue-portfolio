<template>
  <div class="flex">
    <div class="hero">
      <h1>Sebastian Kendra</h1>
      <h2>Front-end developer</h2>
      <button class="primary-btn btn">
        <p>Kontaktuj ma</p>
      </button>
      <button class="second-btn btn">
        <p><a>Kontaktuj ma</a></p>
      </button>
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
