<template>
  <div class="about">
    <form action="#" class="contact-form">
      <label for="your-name">
        Vaše meno (povinne)
        <input type="text" id="your-name" name="your-name" />
      </label>

      <label for="your-email">
        Váš email (povinne)
        <input type="email" id="your-email" name="your-email" />
      </label>

      <label for="your-message">
        Vaša správa
        <textarea
          id="your-message"
          name="your-message"
          cols="40"
          rows="10"
          style="width: 600px; height: 183px"
        ></textarea>
      </label>

      <button class="btn second-btn"><p>Send</p></button>
    </form>
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
