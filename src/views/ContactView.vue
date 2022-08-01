<template>
  <div class="contact">
    <h1>Kontaktuj ma</h1>
    <form
      id="contact-form"
      class="contact-form"
      ref="form"
      @submit.prevent="submitHandle"
    >
      <label for="your-name"> Vaše meno (povinné)</label>
      <input
        type="text"
        @click="con"
        ref="formName"
        id="your-name"
        name="from_name"
        placeholder="Meno"
        required
      />
      <label for="your-email">Váš email (povinné)</label>
      <input
        type="email"
        id="your-email"
        name="email"
        placeholder="Email"
        required
      />
      <label for="your-message">Vaša správa</label>
      <textarea
        name="message"
        id="your-message"
        placeholder="Správa"
        cols="40"
        rows="10"
        style="width: 600px; height: 183px"
      ></textarea>
      <input type="submit" class="btn second-btn submit-btn" value="SEND" />
    </form>

    <div class="wrapper-map"></div>
  </div>
</template>

<script>
import { reactive, toRefs, ref } from 'vue'
import emailjs from '@emailjs/browser'

export default {
  setup() {
    const state = reactive({
      count: 0,
    })

    const form = ref()
    const formName = ref()

    const con = () => {
      console.log(formName.value.value)
    }

    const submitHandle = () => {
      emailjs
        .send(
          'service_50hiprx',
          'template_hi7xcoe',
          form.value,
          'XlI49EnBhMCSFPwm1'
        )
        .then(
          (result) => {
            console.log('SUCCESS!', result)
          },
          (error) => {
            console.log('FAILED...', error.text)
          }
        )
    }

    return {
      ...toRefs(state),
      form,
      formName,
      con,
      submitHandle,
    }
  },
}
</script>

<style lang="scss" scoped></style>
