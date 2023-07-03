<template>
    <header :class="navDark" class="navigation-scss">
        <div class="navigation">
            <router-link class="flex-item" to="/">
                <span> O mne </span></router-link
            >
            <router-link class="flex-item" to="/projects">
                <span> Projekty </span>
            </router-link>
            <router-link class="flex-item" to="/contact">
                <span> Kontakt </span>
            </router-link>
        </div>
        <div
            :class="containerIco"
            class="flex-item theme-container"
            @click="changeTheme"
        >
            <div id="theme-icon">
                <i :class="icon" class="far fa-lg" :style="color"></i>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            isDark: false,
        }
    },
    computed: {
        icon() {
            return this.isDark ? 'fa-moon' : 'fa-sun'
        },
        containerIco() {
            return this.isDark ? 'shadow-dark' : 'shadow-light'
        },
        navDark() {
            return this.isDark ? 'navigation-dark' : ''
        },
        color() {
            return this.isDark ? 'color: #fff' : 'color: #222'
        },
    },
    methods: {
        changeTheme() {
            this.isDark = !this.isDark

            window.eventBus.emit('change-theme', 'funkcirt')
        },
    },
}
</script>
