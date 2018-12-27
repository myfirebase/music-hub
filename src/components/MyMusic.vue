<template>
    <v-card>
      <v-list two-line subheader>
        <v-subheader>All Music</v-subheader>
        <v-list-tile v-for="(music, index) in musics" :key="index">
          <v-list-tile-content>
            <v-list-tile-title>{{music.musicName}}</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-icon color="black">delete</v-icon>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-card>
</template>

<script>

import GlobalMixin from '@/mixins/global'

export default {
    created () {
        this.$binding('musics', this.userCollection).then((music) => {
            // Completed
        })
    },
    mixins: [GlobalMixin],
    data () {
        return {
            // models
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