<template>
    <ul class="tunes-list">
        <li>
            <TunesSong v-for="song in songsStart" :key="song.id" :song="song" />
            <div
                class="circle"
                v-show="this.songsStart.length > 0"
                @click="changeRangeSongs()"
            >
                <img :src="CirclePlus" alt="Plus" />
            </div>
        </li>
    </ul>
</template>

<script>
import TunesSong from '@/views/hudba/components/TunesSong.vue'
import CirclePlus from '@/views/hudba/assets/circle-plus-solid.svg'

export default {
    methods: {
        changeRangeSongs() {
            return (this.end += 5)
        },
    },
    computed: {
        songsStart() {
            return this.newSongs.slice(this.start, this.end)
        },
    },
    components: {
        TunesSong,
    },
    data() {
        return { CirclePlus, newSongs: [], start: 0, end: 5 }
    },
    mounted() {
        window.eventBus.on('new-songs', (data) => (this.newSongs = data))
    },
}
</script>

<style scoped>
ul {
    margin-top: 3em;
    padding-left: 0;
    list-style: none;
}

.circle img {
    color: white;
    cursor: pointer;

    width: 250px;
}
</style>
