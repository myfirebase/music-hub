import Playlist from '@/classes/Playlist'

export default class PlaylistMnager {
    constructor () {
        this.playlist = new Playlist()
    }

    setAudioManager (manager) {
        this.manager = manager
    }

    playNext () {

    }

    play () {
        this.manager.play()
    }

    pause () {
        this.manager.pause()
    }
}
