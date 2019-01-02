<template>
    <v-card>
      <v-list two-line subheader>
        <v-subheader>All Music</v-subheader>
        <!-- <audio ref="player" :src="currentlyPlaying" controls="true"></audio> -->
        <v-btn color="success" @click="play">Play</v-btn>
        <v-btn color="info" @click="pause">Pause</v-btn>
        <v-btn color="warning" @click="playNext">Play next</v-btn>
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
            currentlyPlaying: ""
        }
    },
    methods: {
        play (index) {
            this.playlistManager.play(index)
        },
        pause () {
            this.playlistManager.pause()
        },
        playNext () {
            this.playlistManager.playNext()
        }
    }
}
</script>

<style scoped>
    /*stylesheets*/
</style>