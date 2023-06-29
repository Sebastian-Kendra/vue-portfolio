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
        <div class="flex-item theme-container shadow-light">
            <div id="theme-icon">
                <i class="fas fa-sun fa-lg"></i>
            </div>
        </div>
    </header>
</template>
