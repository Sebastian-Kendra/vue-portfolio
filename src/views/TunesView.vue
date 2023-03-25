<template>
  <div class="tunes">
    <BackTo />
    <h1>Hudba</h1>
    <TunesSearchForm />
    <TunesList />
  </div>
</template>

<script>
//imports
import TunesSearchForm from '@/views/hudba/components/TunesSearchForm.vue'
import TunesList from '@/views/hudba/components/TunesList.vue'
import BackTo from '@/components/BackTo.vue'

export default {
  name: 'TunesView',
  components: { TunesSearchForm, TunesList, BackTo },
}
</script>
