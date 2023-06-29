<template>
    <transition name="fade">
        <article v-cloak class="tunes-song" :class="this.changeColor">
            <div class="inside">
                <h2>{{ shorten(songify(song), 100) }}</h2>

                <div class="player-wrapper">
                    <img
                        v-if="song.cover"
                        :src="song.cover"
                        alt="cover image"
                    />
                    <audio controls :src="song.audioFile"></audio>
                </div>
            </div>

            <div class="color-wrapper">
                <button
                    @click="this.abraka"
                    class="color"
                    :class="color"
                    v-for="color in colors"
                    :key="color.id"
                ></button>
            </div>

            <footer class="meta">
                {{ shorten(song.album) }}
            </footer>
        </article>
    </transition>
</template>

<script>
import { truncate } from 'lodash-es'

export default {
    props: {
        song: {
            type: Object,
        },
    },
    methods: {
        songify(song) {
            return song.artist + ' - ' + song.name
        }, // VYTIAHNE FARBU ZO STVORCA A POUZIE JU AKO BG
        abraka(e) {
            let target = e.target.classList[1]

            return (this.changeColor = target)
        },
        dominantColor() {
            console.log(this.imgPath)
        },
        shorten(str, len = 55) {
            return truncate(str, { length: len })
        },
    },
    data() {
        return {
            colors: [
                { red: '#e4405f;' },
                { purple: '#cc73e1;' },
                { green: '#3cba54;' },
                { violet: '#2e294e;' },
                { black: '#262626;' },
            ],
            changeColor: '',
            imgPath: this.song.cover,
        }
    },
}
</script>

<style lang="scss" scoped>
.tunes-song {
    color: #fff;
    text-align: left;

    max-width: 24em;
    margin: 0 auto 2em;
    position: relative;

    box-sizing: border-box;
    background-color: #262626;
    border-radius: 0.75em;
}

.inside {
    padding: 1.35em 1.75em 1.75em;
}

h2 {
    font-size: inherit;
    line-height: 1.5em;
    margin: 0;
}

.player-wrapper {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 1.5em;
}

img {
    width: 5em;
    border: 3px solid white;
    border-radius: 0.5em;
}

audio {
    outline: none;
    max-width: 14em;
}

audio::-webkit-media-controls-panel {
    background: #fff;
}

.color-wrapper {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    margin: {
        bottom: 0.9em;
        right: 5em;
        left: 5em;
    }
}

.color {
    border: solid #fff;
    border-radius: 3px;
    width: 40px;
    height: 40px;
    cursor: pointer;
}
.red {
    background-color: #e4405f;
}
.purple {
    background-color: #cc73e1;
}
.green {
    background-color: #3cba54;
}
.violet {
    background-color: #2e294e;
}
.black {
    background-color: #262626;
}

.meta {
    font-size: 0.75em;
    font-weight: 800;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.6);

    padding: 1.5em 2.25em;
    background: rgba(0, 0, 0, 0.2);
    border-bottom-left-radius: 1em;
    border-bottom-right-radius: 1em;
}

// animation
[v-cloak] {
    display: none;
}

.fade-enter-active {
    transition: all 0.9s ease;
}

.fade-enter {
    transform: scale(0.9);
}

// responsive
@media screen and (max-width: 520px) {
    .player-wrapper {
        audio {
            margin-top: 1.5em;
        }

        flex-direction: column;
    }
}
</style>
