<template>
  <div class="project-view container">
    <h1 class="fade-in-down">Projekty</h1>
    <!-- 
    <div class="parallax">
      <div class="parallax__layer parallax__layer--back">...</div>
      <div class="parallax__layer parallax__layer--base">...</div> -->
    <div class="container-project">
      <article class="project fade-in-right">
        <figure>
          <router-link to="/projects/list">
            <img
              class="box"
              src="../assets/img/img-project/list-min.jpg"
              alt=""
          /></router-link>
        </figure>
        <div class="purport">
          <h2>Organizačný List</h2>
          <h3>Vytvor si list a kartu</h3>
          <br />
          <p>
            Pri tvorbe organizačného listu bol použitý framework Vue 3.
            Vytvorené komponenty boli písané spôsobom composition API. Bol
            použitý jazyk javascript.
          </p>
        </div>
      </article>

      <article class="project fade-in-left">
        <figure>
          <router-link to="/projects/tunes"
            ><img
              class="box"
              src="../assets/img/img-project/hudba-min.jpg"
              alt=""
          /></router-link>
        </figure>
        <div class="purport">
          <h2>Hudobná aplikácia</h2>
          <h3>Pusť si hudbu a v komponente</h3>
          <br />
          <p>
            Hudobná aplikácia bola písaná v javascripte, tvorená vo Vue 3
            použité bolo optional API. Aplikácia dokáže prehľadávať v externom
            API vytiahnuť dáta a zobratiť v podobe komponentu.
          </p>
        </div>
      </article>

      <article class="project">
        <figure>
          <a href="https://cwconstructionltd.com/" target="_blank"
            ><img
              class="box"
              src="../assets/img/img-project/komercna-min.jpg"
              alt=""
          /></a>
        </figure>
        <div class="purport">
          <h2>Color world construction LTD</h2>
          <h3>Informačná stránka</h3>
          <br />
          <p>
            Webová stránka vytvorená na požiadavky a podľa predstavy
            zahraničného klienta. Vo všeobecnosti statický web až na
            celostranové rolovanie, ktoré zabezpečuje javascript.
          </p>
        </div>
      </article>
    </div>
    <footer-view />
    <!--   </div> -->
  </div>
</template>

<script>
import FooterView from '@/components/FooterView.vue'

export default {
  methods: {
    toCwc() {
      window.location.href = 'https://cwconstructionltd.com/'
    },
    toTunes() {
      window.location.href = window.location.origin + '/tunes'
    },
    toList() {
      window.location.href = window.location.origin + '/list'
    },
  },
  components: { FooterView },
}
</script>
