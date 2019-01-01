export default class Playlist {
    constructor (music = []) {
        this.music = []
        this.fillPlaylist(music)
    }

    fillPlaylist (music) {
        music.forEach((music) => {
            this.music.push(music)
        })
    }

    clearPlaylist () {
        this.music.splice(0, this.music.length)
    }

    getPlaylist () {
        return this.music
    }
}