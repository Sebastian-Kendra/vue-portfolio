<template>
    <div class="background" :class="{ fade: mouseEnter }">
        <div
            v-for="(dot, index) in dots"
            :key="index"
            class="dot"
            :style="{
                top: dot.y + 'px',
                left: dot.x + 'px',
                width: dot.size + 'px',
                height: dot.size + 'px',
                transform: `scale(${dot.scale})`,
                'animation-duration': dot.animationDuration + 's',
            }"
        ></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dots: [],
            mouseX: 0,
            mouseY: 0,
            mouseEnter: false,
        }
    },
    mounted() {
        this.generateDots()

        // Pridanie poslucháča pohybu myši na dokument
        document.addEventListener('mousemove', this.handleMouseMove)
    },
    methods: {
        generateDots() {
            // Generovanie bodiek s náhodnou pozíciou
            const numDots = 9 // Počet bodiek
            const minSize = 3 // Minimálna veľkosť bodiek v pixeloch
            const maxSize = 10 // Maximálna veľkosť bodiek v pixeloch
            const containerWidth = window.innerWidth // Šírka kontajnera
            const containerHeight = window.innerHeight // Výška kontajnera

            for (let i = 0; i < numDots; i++) {
                const size = Math.random() * (maxSize - minSize) + minSize
                const x = Math.random() * containerWidth
                const y = Math.random() * containerHeight
                const dot = {
                    x,
                    y,
                    size,
                    scale: 1,
                    animationDuration: Math.random() * 2 + 1, // Náhodná doba animácie
                }
                this.dots.push(dot)
            }
        },
        handleMouseMove(event) {
            // Aktualizácia pozície kurzora myši
            const mouseX = event.clientX
            const mouseY = event.clientY

            this.mouseX = mouseX
            this.mouseY = mouseY

            // Zmena stavu zväčšovania/zmenšovania bodiek na základe pohybu myši
            this.dots.forEach((dot) => {
                const distance = Math.sqrt(
                    (mouseX - dot.x) ** 2 + (mouseY - dot.y) ** 2
                )
                dot.scale = 1 + distance / 50 // Zmena veľkosti na základe vzdialenosti
            })
        },
    },
}
</script>
