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

    puaseAllPlaylist () {
        for (var i = 0; i < this.playlist.music.length; i++) {
            if (this.playlist.music[i].playing == true) {
                this.playlist.music[i].howl.pause()
                this.playlist.music[i].playing = false
            }
        }
    }

    findMusicIndex () {
        for (var i = 0; i < this.playlist.music.length; i++) {
            if (this.playlist.music[i].playing == true) {
                return i
            }
        }

        return null
    }

    playNext () {
        let index = this.findMusicIndex()
        if (index != null && index != undefined && index != this.playlist.music.length - 1) {
            this.play(index + 1)
        }
    }

    play (index) {
        this.puaseAllPlaylist()
        let music = this.playlist.music[index]
        music.playing = true
        music.howl.play()
    }

    pause (index) {
        let music = this.playlist.music[index]
        // this.manager.pause()
        music.howl.pause()

    }
}
