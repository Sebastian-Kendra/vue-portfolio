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
    </l-map>
  </div>
</template>
<script>
import { LMap, LTileLayer } from '@vue-leaflet/vue-leaflet/src/components'

export default {
  components: {
    LMap,
    LTileLayer,
  },
  data() {
    return {
      zoom: 6,
    }
  },
}
</script>
