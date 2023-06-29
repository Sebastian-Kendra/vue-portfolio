<template>
    <div class="contact-container">
        <div class="contact flex">
            <ContactForm class="fade-in-left" />
            <MapView class="fade-in-right" />
        </div>
        <FooterView />
    </div>
</template>

<script>
import ContactForm from '../components/ContactForm.vue'
import MapView from '../components/MapView.vue'
import FooterView from '../components/FooterView.vue'

export default {
    components: { ContactForm, FooterView, MapView },
}
</script>
