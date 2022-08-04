<template>
  <div class="contact flex">
    <LoadComm v-if="isLoaded" />
    <ContactForm />
    <MapView />
  </div>
  <FooterView />
</template>

<script>
import { reactive, toRefs, onBeforeMount, onMounted } from 'vue'
import ContactForm from '../components/ContactForm.vue'
import MapView from '../components/MapView.vue'
import FooterView from '../components/FooterView.vue'
import LoadComm from '../components/LoadComm.vue'

export default {
  setup() {
    const state = reactive({
      zero: '',
      isLoaded: true,
    })

    onBeforeMount(() => {
      state.isLoaded = true
    })

    onMounted(() => {
      state.isLoaded = false
    })

    return {
      ...toRefs(state),
    }
  },
  components: { ContactForm, FooterView, MapView, LoadComm },
}
</script>
