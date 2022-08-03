<template>
  <div class="contact flex">
    <ContactForm />

    <MapView />
  </div>
  <FooterView />
</template>

<script>
import { reactive, toRefs } from 'vue'
import ContactForm from '../components/ContactForm.vue'
import MapView from '../components/MapView.vue'
import FooterView from '../components/FooterView.vue'

export default {
  setup() {
    const state = reactive({
      zero: '',
    })

    return {
      ...toRefs(state),
    }
  },
  components: { ContactForm, FooterView, MapView },
}
</script>
