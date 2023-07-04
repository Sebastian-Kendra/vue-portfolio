<template>
    <div id="app-container">
        <TheNavigation class="fade-in" />
        <div
            class="flex-item theme-container shadow-light"
            @click="changeTheme"
        >
            <div id="theme-icon">
                <i :class="icon" class="fas fa-lg"></i>
            </div>
        </div>
        <main>
            <router-view />
        </main>
    </div>
</template>

<script>
import TheNavigation from './components/TheNavigation.vue'

export default {
    components: {
        TheNavigation,
    },
    data() {
        return { isDark: false }
    },
    computed: {
        icon() {
            return this.isDark ? 'fa-moon' : 'fa-sun'
        },
    },
    methods: {
        changeTheme() {
            this.isDark = !this.isDark
        },
    },
}
</script>

<style lang="scss">
#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}
</style>
