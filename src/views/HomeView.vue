<template>
    <div v-if="isComponentReady">
        <!-- Obsah stránky -->
        <BackGround />
        <div class="home-view container">
            <div class="flex-reverse">
                <HomeHero />
                <LogoSvg />
            </div>
            <div class="about-me fade-in">
                <div class="line"></div>
                <p>
                    Ahoj. Volám sa Sebastián a baví ma vytvárať veci, ktoré žijú
                    na internete. Zároveň som nadšenec do technológií a posledné
                    roky sa vo voľnom čase venujem a učím front-end.
                </p>
            </div>
        </div>
        <FooterView />
    </div>
    <div v-else>
        <!--  -->
        <!-- Loader -->
        <div class="loader">
            <div class="svg-loader">LOADING</div>
        </div>
    </div>
</template>

<script>
import LogoSvg from '@/components/LogoSvg.vue'
import FooterView from '@/components/FooterView.vue'
import HomeHero from '../components/HomeHero.vue'
import BackGround from '@/components/BackGround.vue'

export default {
    name: 'HomeView',
    components: { FooterView, LogoSvg, BackGround, HomeHero },
    data() {
        return {
            isComponentReady: false,
        }
    },
    beforeMount() {
        // Vykonajte prípravu všetkých vnorených komponentov
        this.prepareComponents().then(() => {
            // Nastavte isComponentReady na true, keď sú všetky komponenty pripravené
            this.isComponentReady = true
        })
    },
    methods: {
        prepareComponents() {
            // Simulácia asynchrónnej prípravy všetkých vnorených komponentov
            const promises = [
                this.prepareComponent(HomeHero),
                this.prepareComponent(LogoSvg),
                this.prepareComponent(BackGround),
                this.prepareComponent(FooterView),
            ]

            return Promise.all(promises)
        },
        prepareComponent() {
            return new Promise((resolve) => {
                // ...tu môžete vykonať prípravu konkrétneho komponentu

                resolve()
            })
        },
    },
}
</script>
