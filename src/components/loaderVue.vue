<template>
    <div>
        <div v-if="isComponentReady">
            <!-- Obsah komponentu -->
            <h1>Vitajte vo Vue komponente!</h1>
            <!-- Ďalší obsah komponentu -->
        </div>
        <div v-else>
            <!-- Loader -->
            <p>Loading...</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isComponentReady: false,
        }
    },
    mounted() {
        // Simulácia asynchrónnej prípravy komponentu
        this.prepareComponent().then(() => {
            // Nastavte isComponentReady na true, keď je komponent pripravený
            this.isComponentReady = true
        })
    },
    methods: {
        prepareComponent() {
            // Simulácia asynchrónnej prípravy komponentu
            return new Promise((resolve) => {
                setTimeout(() => {
                    // Tu môžete vykonať prípravu komponentu
                    resolve()
                }, 2000) // Napríklad, 2 sekundy čakania
            })
        },
    },
}
</script>
