<template>
    <v-card>
      <v-list two-line subheader>
        <v-subheader>All Music</v-subheader>
        <v-btn color="success" @click="resume()">
            <span>Play | Pause</span>
        </v-btn>
        <v-btn color="info" @click="playPrev">Play Prev</v-btn>
        <v-btn color="warning" @click="playNext">Play next</v-btn>
        <v-btn color="error" @click="stop">Stop</v-btn>
        <v-slider v-model="slider"></v-slider>

        <v-list-tile v-for="(music, index) in musics" :key="index">
          <v-list-tile-content>
            <v-list-tile-title>{{music.name}}</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-icon color="black" @click="play(index)">delete</v-icon>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-card>
</template>

<script>

import GlobalMixin from '@/mixins/global'
import PlaylistMixin from '@/mixins/playlist'
import {Howl, Howler} from 'howler'

export default {
    created () {
        this.$binding('musics', this.userCollection).then((music) => {
            this.playlistManager.playlist.fillPlaylist(music.map((music) => music['url']))
            // this.playlistManager.play()
            // console.log(this.playlistManager)
        })
    },
    mixins: [GlobalMixin, PlaylistMixin],
    data () {
        return {
            currentlyPlaying: "",
            slider: 0
        }
    },
    computed: {
        currentPlaying () {
            return this.playlistManager.getCurrentPlaying()
        }
    },
    methods: {
        play (index = null) {
            this.playlistManager.play(index)
        },
        pause () {
            this.playlistManager.pause()
        },
        resume () {
            if (this.playlistManager.playlist.isPlaying) {
                this.playlistManager.pause()
                return
            }
            let index = this.playlistManager.findPausedIndex()
            this.playlistManager.play(index)
        },
        playNext () {
            this.playlistManager.playNext()
        },
        playPrev () {
            this.playlistManager.playPrev()
        },
        stop () {
            this.playlistManager.stop()
        },
    },
    watch: {
        'slider': function(val) {

        }
    }
}
</script>

<style scoped>
    /*stylesheets*/
</style>