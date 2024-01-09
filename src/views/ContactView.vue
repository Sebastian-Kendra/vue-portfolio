<template>
    <div class="contact-container">
        <div ref="contact" class="contact flex">
            <ContactForm class="fade-in-left" />
            <MapView class="fade-in-right" />
        </div>
    </div>
    <FooterView />
    <div ref="background" class="backgound-contact"></div>
</template>

<script>
import ContactForm from '../components/ContactForm.vue'
import MapView from '../components/MapView.vue'
import FooterView from '../components/FooterView.vue'

export default {
    data() {
        return {
            heightContent: 0,
        }
    },
    components: { ContactForm, FooterView, MapView },
    mounted() {
        this.adjustBackgroundHeight()

        this.calcHeight()

        console.log(window.innerHeight, this.heightContent)
    },
    methods: {
        calcHeight() {
            const contactH = this.$refs.contact.offsetHeight,
                footer = document.querySelector('.footer-view'),
                footerH = footer.offsetHeight,
                together = contactH + footerH + 61

            this.heightContent = window.innerHeight - together
        },

        adjustBackgroundHeight() {
            // Získanie referencie na element s ref "background"
            const backgroundElement = this.$refs.background
            // Upravenie výšky podľa potreby, napr. na výšku okna
            this.$nextTick(() => {
                backgroundElement.style.height = `${this.heightContent}px`
            })
        },
    },
}
</script>
