<template>
  <div class="contact flex" ref="contact">
    <ContactForm />
    <MapView />
  </div>
  <FooterView />
</template>

<script>
import ContactForm from '../components/ContactForm.vue'
import MapView from '../components/MapView.vue'
import FooterView from '../components/FooterView.vue'

export default {
  components: { ContactForm, FooterView, MapView },
}
</script>
