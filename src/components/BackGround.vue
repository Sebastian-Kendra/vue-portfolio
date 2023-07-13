<template>
    <div id="background">
        <div
            v-for="(dot, index) in dots"
            :key="index"
            class="dot"
            :style="{
                top: dot.y + 'px',
                left: dot.x + 'px',
                width: dot.size + 'px',
                height: dot.size + 'px',
                transform: `translateX(${
                    dot.moving ? this.mouseX * 0.01 : 0
                }px) translateY(${dot.moving ? this.mouseY * 0.01 : 0}px)`,
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
        }
    },
    mounted() {
        this.generateDots()
        this.setMovingDots()

        document.addEventListener('mousemove', this.handleMouseMove)
        console.log(this.mouseX)
    },
    methods: {
        generateDots() {
            // Generovanie bodiek s náhodnou pozíciou
            const numDots = 25 // Počet bodiek
            const minSize = 3 // Minimálna veľkosť bodiek v pixeloch
            const maxSize = 10 // Maximálna veľkosť bodiek v pixeloch
            const containerWidth = window.innerWidth // Šírka kontajnera
            const containerHeight = window.innerHeight // Výška kontajnera

            for (let i = 0; i < numDots; i++) {
                const size = Math.random() * (maxSize - minSize) + minSize
                const x = Math.random() * containerWidth
                const y = Math.random() * containerHeight
                const dot = { x, y, size }
                this.dots.push(dot)
            }
        },
        setMovingDots() {
            const numMovingDots = 11 // Počet pohybujúcich sa bodiek

            for (let i = 0; i < numMovingDots; i++) {
                this.dots[i].moving = true
            }
        },
        handleMouseMove(event) {
            // Aktualizácia pozície kurzora myši
            const mouseX = event.clientX
            const mouseY = event.clientY

            this.mouseX = mouseX
            this.mouseY = mouseY
        },
    },
}
</script>
