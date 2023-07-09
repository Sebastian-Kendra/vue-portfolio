<template class="čotoje">
    <div id="app-container" :class="darkTheme">
        <TheNavigation class="fade-in" />
        <div class="dark-container" @click="changeTheme">
            <input type="checkbox" id="darkmode-toggle" v-model="isDark" />
            <label for="darkmode-toggle">
                <svg
                    class="sun"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 32 32"
                >
                    <path
                        class="one"
                        d="M16,26c1.1,0,2,0.9,2,2v2c0,1.1-0.9,2-2,2s-2-0.9-2-2v-2C14,26.9,14.9,26,16,26z"
                    />
                    <path
                        class="one"
                        d="M16,6c-1.1,0-2-0.9-2-2V2c0-1.1,0.9-2,2-2s2,0.9,2,2v2C18,5.1,17.1,6,16,6z"
                    />
                    <path
                        class="one"
                        d="M30,14c1.1,0,2,0.9,2,2s-0.9,2-2,2h-2c-1.1,0-2-0.9-2-2s0.9-2,2-2H30z"
                    />
                    <path
                        class="one"
                        d="M6,16 c0,1.1-0.9,2-2,2H2c-1.1,0-2-0.9-2-2s0.9-2,2-2h2C5.1,14,6,14.9,6,16z"
                    />
                    <path
                        class="two"
                        d="M25.9,23.1l1.4,1.4c0.8,0.8,0.8,2,0,2.8s-2,0.8-2.8,0l-1.4-1.4c-0.8-0.8-0.8-2,0-2.8S25.1,22.3,25.9,23.1z"
                    />
                    <path
                        class="two"
                        d=" M6.1,8.9L4.7,7.5c-0.8-0.8-0.8-2,0-2.8s2-0.8,2.8,0l1.4,1.4c0.8,0.8,0.8,2,0,2.8S6.9,9.7,6.1,8.9z"
                    />
                    <path
                        class="two"
                        d="M25.9,8.9c-0.8,0.8-2,0.8-2.8,0s-0.8-2,0-2.8l1.4-1.4c0.8-0.8,2-0.8,2.8,0s0.8,2,0,2.8L25.9,8.9z"
                    />
                    <path
                        class="two"
                        d="M6.1,23.1c0.8-0.8,2-0.8,2.8,0s0.8,2,0,2.8l-1.4,1.4c-0.8,0.8-2,0.8-2.8,0s-0.8-2,0-2.8C4.7,24.5,6.1,23.1,6.1,23.1z"
                    />
                    <path
                        class="middle"
                        d="M16,8c-4.4,0-8,3.6-8,8s3.6,8,8,8s8-3.6,8-8S20.4,8,16,8z M16,21c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5
	S18.8,21,16,21z"
                    />
                </svg>
                <svg
                    version="1.1"
                    class="moon"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 49.739 49.739"
                    style="enable-background: new 0 0 49.739 49.739"
                    xml:space="preserve"
                >
                    <path
                        d="M25.068,48.889c-9.173,0-18.017-5.06-22.396-13.804C-3.373,23.008,1.164,8.467,13.003,1.979l2.061-1.129l-0.615,2.268
       c-1.479,5.459-0.899,11.25,1.633,16.306c2.75,5.493,7.476,9.587,13.305,11.526c5.831,1.939,12.065,1.492,17.559-1.258v0
       c0.25-0.125,0.492-0.258,0.734-0.391l2.061-1.13l-0.585,2.252c-1.863,6.873-6.577,12.639-12.933,15.822
       C32.639,48.039,28.825,48.888,25.068,48.889z M12.002,4.936c-9.413,6.428-12.756,18.837-7.54,29.253
       c5.678,11.34,19.522,15.945,30.864,10.268c5.154-2.582,9.136-7.012,11.181-12.357c-5.632,2.427-11.882,2.702-17.752,0.748
       c-6.337-2.108-11.473-6.557-14.463-12.528C11.899,15.541,11.11,10.16,12.002,4.936z"
                    />
                </svg>
            </label>
        </div>
        <main>
            <router-view />
        </main>
    </div>
</template>

<script>
import TheNavigation from './components/TheNavigation.vue'

export default {
    data() {
        return {
            isDark: true,
        }
    },
    computed: {
        darkTheme() {
            return this.isDark ? 'theme-dark' : ''
        },
    },
    components: {
        TheNavigation,
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
