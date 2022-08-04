<template>
  <LoadComm v-if="isLoaded" />
  <div class="contact flex" ref="contact">
    <ContactForm />
    <MapView />
  </div>
  <FooterView />
</template>

<script>
import { reactive, toRefs, ref, onBeforeMount, onMounted } from 'vue'
import ContactForm from '../components/ContactForm.vue'
import MapView from '../components/MapView.vue'
import FooterView from '../components/FooterView.vue'
import LoadComm from '../components/LoadComm.vue'

export default {
  setup() {
    const state = reactive({
      zero: '',
      isLoaded: false,
    })

    const contact = ref()

    onBeforeMount(() => {
      contact.value
      console.log('pred')
      state.isLoaded = true
    })

    onMounted(() => {
      contact.value
      console.log('po')

      state.isLoaded = false
    })

    return {
      ...toRefs(state),
      contact,
    }
  },
  components: { ContactForm, FooterView, MapView, LoadComm },
}
</script>
