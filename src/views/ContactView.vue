<template>
  <div class="about">
    <h1>Kontaktuj ma</h1>
    <form action="">
      <input class="input is-info" type="text" placeholder="Info input" />
      <textarea class="textarea is-info" placeholder="Info textarea"></textarea>
      <button class="second-btn btn">
        <p>
          <a @click.prevent="onClick">Odošli</a>
        </p>
      </button>
    </form>

    <div class="holder-map"></div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
  setup() {
    const state = reactive({
      count: 0,
    })

    return {
      ...toRefs(state),
    }
  },
}
</script>

<style lang="scss" scoped></style>
