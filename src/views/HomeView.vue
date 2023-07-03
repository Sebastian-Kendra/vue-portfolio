<template>
    <div :class="homeDark" class="home-view container">
        <div class="flex-reverse">
            <HomeHero />
            <LogoSvg />
        </div>
        <div class="about-me fade-in">
            <div class="line"></div>
            <p>
                Ahoj. Volám sa Sebastián a baví ma vytvárať veci, ktoré žijú na
                internete. Zároveň som nadšenec do technológií a posledné roky
                sa vo voľnom čase venujem a učím front-end.
            </p>
        </div>
        <FooterView />
    </div>
</template>

<script>
import LogoSvg from '@/components/LogoSvg.vue'
import FooterView from '@/components/FooterView.vue'
import HomeHero from '../components/HomeHero.vue'

export default {
    name: 'HomeView',
    data() {
        return {
            isDark: false,
        }
    },
    mounted() {
        window.eventBus.on('change-theme', () => {
            this.isDark = !this.isDark
        })
    },
    computed: {
        homeDark() {
            return this.isDark ? 'home-dark' : ''
        },
    },
    components: { FooterView, LogoSvg, HomeHero },
}
</script>
