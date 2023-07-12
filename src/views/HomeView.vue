<template>
    <div class="home-view container">
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
    </div>
    <FooterView />
</template>

<script>
import LogoSvg from '@/components/LogoSvg.vue'
import FooterView from '@/components/FooterView.vue'
import HomeHero from '../components/HomeHero.vue'

export default {
    name: 'HomeView',
    components: { FooterView, LogoSvg, HomeHero },
}
</script>
