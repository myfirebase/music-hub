<template>
<v-card>
<v-container>
<v-flex x12 md12>
  <v-card v-for="artwork in artworks" :key="artwork['.key']">
    <v-img :src="artwork.url" height="100%">
      <v-container fill-height fluid pa-2>
        <v-layout fill-height>
          <v-flex xs12 align-end flexbox>
            <span class="headline white--text" v-text="artwork.name"></span>
          </v-flex>
        </v-layout>
      </v-container>
    </v-img>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>delete</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</v-flex>
</v-container>
</v-card>
</template>

<script>

import GlobalMixin from '@/mixins/global'

export default {
    created () {
        this.$binding('artworks', this.userArtwork).then(() => {
            console.log('Ready')
        })
    },
    mixins: [GlobalMixin],
    data() {
        return {
            //
        }
    },
    methods: {
        // methods
    }
}
</script>

<style scoped>
    /*stylesheets*/
</style>