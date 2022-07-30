<template>
  <div></div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
  setup() {
    return {
      ...toRefs(state),
    }
  },
}
</script>

<style lang="scss" scoped></style>
