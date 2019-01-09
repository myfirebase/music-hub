import Playlist from '@/classes/Playlist'

export default class PlaylistMnager {
    constructor () {
        this.playlist = new Playlist()
    }

    setAudioManager (manager) {
        this.manager = manager
    }

    stop () {
        for (var i = 0; i < this.playlist.music.length; i++) {
            if (this.playlist.music[i].playing == true) {
                this.playlist.music[i].howl.stop()
                this.playlist.togglePlaying(false)
                this.playlist.music[i].playing = false
                this.playlist.music[i].paused = false
            }
        }
    }

    pause () {
        for (var i = 0; i < this.playlist.music.length; i++) {
            if (this.playlist.music[i].playing == true) {
                this.playlist.togglePlaying(false)
                this.playlist.music[i].howl.pause()
                this.playlist.music[i].playing = false
                this.playlist.music[i].paused = true
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

    findPausedIndex () {
        for (var i = 0; i < this.playlist.music.length; i++) {
            if (this.playlist.music[i].paused == true) {
                return i
            }
        }

        return null
    }

    findMusicByIndex (index) {
        return this.playlist.music[index]
    }

    setSeekCallback (index, callBack) {
        console.log(index)
        // this.findMusicIndex(index).howl.onSeek = callback
        console.log(this.findMusicByIndex(index))
    }

    playNext () {
        let index = this.findMusicIndex()
        if (index != null && index != undefined && index != this.playlist.music.length - 1) {
            this.play(index + 1)
        }
    }

    playPrev () {
        let index = this.findMusicIndex()
        if (index != null && index != undefined && index > 0) {
            this.play(index - 1)
        }
    }

    play (index = null, callback) {
        this.stop()
        let music = index ? this.playlist.music[index] : this.playlist.music[0]
        music.playing = true
        music.paused = false
        this.playlist.togglePlaying(true)
        // music.howl.on('play', callback)
        music.howl.on('seek', callback)
        music.howl.play()
    }

    getCurrentPlaying () {
        return this.playlist.music.find((music) => music.playing == true)
    }
}
