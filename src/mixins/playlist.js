import PlaylistManager from '@/classes/PlaylistManager'

export default {
    created () {
        this.playlistManager = new PlaylistManager()
    },
    data () {
        return {
            playlistManager: {}
        }
    },
    computed: {
        //
    }
}
