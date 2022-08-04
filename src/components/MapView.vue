<template>
  <div class="wrapper-map">
    <div class="info-map">
      <p>
        Sebastián Kendra <br />
        Bratislava <br />
        Slovensko
      </p>
      <p><span>mail@sebastian-kendra.sk</span></p>
    </div>

    <l-map ref="map" class="map" v-model:zoom="zoom" :center="[48.137, 17.11]">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>
      <l-marker class="marker" :lat-lng="[48.137, 17.11]" :icon="icon">
        <!--  -->
      </l-marker>
    </l-map>
  </div>
</template>
<script>
import {
  LMap,
  LTileLayer,
  LMarker,
} from '@vue-leaflet/vue-leaflet/src/components'
import { icon } from 'leaflet'

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
  },
  data() {
    return {
      zoom: 6,
      icon: icon({
        iconUrl: 'img/location-pin-solid-ico-v-logo.svg',
        iconSize: [80, 64],
        iconAnchor: [40, 64],
      }),
    }
  },
}
</script>
