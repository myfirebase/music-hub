<template>
  <v-card>
    <v-avatar></v-avatar>
    <v-card-title>
      <div>
        <v-text-field v-model="artwork.name" label="Artwork" prepend-icon='attach_file' @click="$refs.artwork.click()"></v-text-field>
        <input type="file" style="display: none" ref="artwork" @change="getArtwork">
      </div>
    </v-card-title>
    <v-card-actions>
      <v-btn flat color="orange" @click="upload()">Upload</v-btn>
    </v-card-actions>
  </v-card>
</div>
</template>

<script>
import GlobalMixin from '@/mixins/global' 
export default {
    mounted () {
    },
    mixins: [GlobalMixin],
    data () {
        return {
            artwork: {}
        }
    },
    methods: {
        getArtwork (e) {
            this.artwork = e.target.files[0]
        },
        upload () {
            this.$storage.upload({
                ref: `artwork/${this.userId}/${this.artwork.name}`,
                file: this.artwork,
                progress: () => {

                },
                error: () => {

                },
                completed: (url) => {
                    this.userArtwork.add({name: this.artwork.name, url: url})
                    .then(() => {
                        console.log('Done!')
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