<template>
    <div class="hero">
        <div class="text-zone fade-in-down">
            <h1>Sebastián Kendra</h1>
            <h2>Front-end developer</h2>

            <div class="wrapper-btn">
                <router-link to="/contact" class="contact-btn-link">
                    <button class="primary-btn btn">
                        <p>Kontaktujte ma</p>
                    </button>
                </router-link>
                <a href="Sebastián-Kendra.pdf" download="">
                    <button class="second-btn btn">
                        <p>Stiahnuť životopis</p>
                    </button>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeHero',
}
</script>
