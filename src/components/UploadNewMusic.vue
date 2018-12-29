<template>
<div>
  <v-card>
    <v-avatar></v-avatar>
    <v-card-title>
      <div>
        <v-text-field v-model="music.name" label="Music" prepend-icon='attach_file' @click="$refs.music.click()"></v-text-field>
        <input type="file" style="display: none" ref="music" @change="getMusic">
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
import GlobalMixin from '@/mixins/global'

export default {
    mounted () {
        this.Music = new Music(this.userCollection).init()
    },
    mixins: [GlobalMixin],
    data () {
        return {
            Music: {},
            music: {},
            ready: false
        }
    },
    firestore () {
        return {

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
        getMusic(e) {
          this.music = e.target.files[0]
        },
        processAndUpload () {
            this.$storage.upload({
                ref: `music/${this.user.uid}/${this.music.name}`,
                file: this.music,
                progress: () => {
                    // TODO
                },
                error: () => {
                    // TODO
                },
                completed: (url) => {
                    this.Music.setName(this.music.name).setUrl(url).add()
                    .then(() => {
                        // Handle the response
                    })
                }
            })
        }
    }
}
</script>

<style scoped>
    /*stylesheets*/
</style>