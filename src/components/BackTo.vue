<template>
  <router-link to="/projects">
    <div class="back-to">
      <img class="img-back-to" src="@/assets/img/backTo.svg" />
      <p>Späť</p>
    </div>
  </router-link>
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
