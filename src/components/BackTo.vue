<template>
    <div class="back-to" @click="backTo">
        <img class="img-back-to" src="@/assets/img/backTo.svg" />
        <p>Späť</p>
    </div>
</template>

<script>
export default {
    methods: {
        backTo() {
            history.back()
        },
    },
}
</script>
