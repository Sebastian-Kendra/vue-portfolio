<template>
    <aside v-if="labels" class="flex mb-1.5">
        <span
            v-for="(color, index) in labels"
            :key="index"
            :class="`w-8 h-2 mr-2 bg-${color}-400 rounded-full`"
        ></span>
    </aside>
</template>

<script>
export default {
    props: {
        labels: {
            type: Array,
        },
    },
}
</script>

<style lang="scss" scoped></style>
