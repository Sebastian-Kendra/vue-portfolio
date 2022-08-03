<template>
  <div class="contact">
    <ContactForm />
    <div class="wrapper-map"></div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import ContactForm from '../components/ContactForm.vue'

export default {
  setup() {
    const state = reactive({
      zero: '',
    })

    return {
      ...toRefs(state),
    }
  },
  components: { ContactForm },
}
</script>
