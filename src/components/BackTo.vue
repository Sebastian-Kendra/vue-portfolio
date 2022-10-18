<template>
  <a @click.prevent="toProjects()">
    <div class="back-to">
      <img class="img-back-to" src="@/assets/img/backTo.svg" />
      <p>Späť</p>
    </div>
  </a>
</template>

<script>
export default {
  methods: {
    toProjects() {
      window.location.href = window.location.origin + '/projects'
    },
  },
}
</script>
