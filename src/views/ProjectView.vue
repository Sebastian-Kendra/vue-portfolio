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
          <a href="/list-exp/index.html" target="_blank"
            ><img
              class="box"
              src="../assets/img/img-project/list-min.jpg"
              alt=""
          /></a>
        </figure>
        <div class="purport">
          <h2>Organizačny List</h2>
          <h3>Vytvor si list a kartu</h3>
          <br />
          <p>
            Pri tvorbe organizačneho listu bol použity framework Vue 3.
            Vytvorene komponenty boli pisane spôsobom composition API. Bol
            použity jazyk javascript.
          </p>
        </div>
      </article>

      <article class="project" v-motion-slide-visible-once-left>
        <figure>
          <a href="/hud-app-exp/index.html" target="_blank"
            ><img
              class="box"
              src="../assets/img/img-project/hudba-min.jpg"
              alt=""
          /></a>
        </figure>
        <div class="purport">
          <h2>Hudobna applikacia</h2>
          <h3>Pusti si hudbu a v komponente</h3>
          <br />
          <p>
            Hudobna aplikacia bola pisana v javascripte tvorena Vue 3 použite
            bolo optional API. Aplikacia dokaze prehladavat v externom API
            vytiahnut data a zobratit v podobe komponentu.
          </p>
        </div>
      </article>

      <article class="project" v-motion-slide-visible-once-right>
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
          <h3>Informačna stranka</h3>
          <br />
          <p>
            Webova stranka robena na poziadavky a podla predstavy zahraničneho
            klienta. Vo všeobecnosti staticky web až na celostranove rolovanie
            ktore zabespečuje javascript.
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
  components: { FooterView },
}
</script>
