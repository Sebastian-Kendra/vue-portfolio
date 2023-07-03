<template>
    <header class="navigation-scss">
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
            class="flex-item theme-container shadow-light"
            @click="changeTheme"
        >
            <div id="theme-icon">
                <i :class="icon" class="fas fa-lg"></i>
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
    },
    methods: {
        changeTheme() {
            this.isDark = !this.isDark
        },
    },
}
</script>
