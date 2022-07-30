<template>
  <footer>
    <div class="footer-left">
      <img src="img/Logo-sk.png" alt="" width="150" height="100" />
      <p class="footer-links">
        <a href="#">O mne</a> · <a href="#">Zručnosti</a> ·
        <a href="#">Kontakt</a>
      </p>
      <p class="footer-company-name footer-shadow">
        Bratislava ©
        {{ year }}
      </p>
    </div>
    <div class="footer-center">
      <div>
        <i class="fa fa-map-marker" aria-hidden="true"></i>
        <p><span>Nad Lúčkami 45</span> Slovensko, SK</p>
      </div>
      <div>
        <i class="fa fa-phone" aria-hidden="true"></i>
        <p href="tel:+421944050290">+421 944 050 290</p>
      </div>
      <div>
        <i class="fa fa-envelope" aria-hidden="true"></i>
        <p><a href="mailto:sebkoses@gmail.com+">mail@sebastian-kendra.sk</a></p>
      </div>
    </div>
    <div class="footer-right">
      <p class="footer-company-about">
        <span>Sebastián Kendra</span>
      </p>
      <p class="footer-shadow">Najdete ma aj na</p>
      <div class="footer-icons">
        <a href="https://www.facebook.com/SebkOo"
          ><i class="fa fa-facebook" aria-hidden="true"></i
        ></a>
        <a href="https://twitter.com/KendraSebastian"
          ><i class="fa fa-twitter" aria-hidden="true"></i
        ></a>
        <a href="https://www.linkedin.com/in/sebastian-kendra-b91b36140/"
          ><i class="fa fa-linkedin" aria-hidden="true"></i
        ></a>
        <a href="https://github.com/Sebastian-Kendra/Sebastian-Kendra/tree/main"
          ><i class="fa fa-github" aria-hidden="true"></i
        ></a>
      </div>
    </div>
  </footer>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
  setup() {
    const state = reactive({
      year: new Date().getFullYear(),
    })

    return {
      ...toRefs(state),
    }
  },
}
</script>

<style lang="scss" scoped></style>
