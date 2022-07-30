<template>
  <div class="flex">
    <div class="hero">
      <h1>
        <h1>Front-end developer</h1>
        Sebastian Kendra
      </h1>

      <div>
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
