<template>
<div>
  <v-card>
    <v-avatar></v-avatar>
    <v-card-title>
      <div>
        <v-text-field v-model="music.name" label="Music" prepend-icon='attach_file' @click="$refs.music.click()"></v-text-field>
        <input type="file" style="display: none" ref="music" @change="getMusic">

        <v-text-field v-model="artwork.name" label="Artwork" prepend-icon='attach_file' @click="$refs.avatar.click()"></v-text-field>
        <input type="file" style="display: none" ref="artwork" accept="image/*" @change="getArtwork">
      </div>
    </v-card-title>
    <v-card-actions>
      <v-btn flat color="orange" @click="processAndUpload()">Update</v-btn>
    </v-card-actions>
  </v-card>
</div>
</template>

<script>

import Music from '@/models/Music'

export default {
    mounted () {
    },
    data () {
        return {
            Music: new Music(),
            artwork: {},
            music: {},
            ready: false
        }
    },
    computed: {
        user () {
            return this.$auth.user()
        }
    },
    methods: {
        upload () {

        },
        getArtwork (e) {
          this.artwork = e.target.files[0]
          // console.log(this.artwork.name)
        },
        getMusic(e) {
          this.music = e.target.files[0]
          // console.log(this.music.name)
        },
        processAndUpload () {
            this.$storage.upload({
                ref: `music/${this.user.uid}/${this.music.name}`,
                file: this.music,
                progress: () => {

                },
                error: () => {

                },
                completed: () => {
                    console.log('Done')
                }
            })
        }
    }
}
</script>

<style scoped>
    /*stylesheets*/
</style>