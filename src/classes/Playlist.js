import {Howl, Howler} from 'howler'

export default class Playlist {
    constructor (music = []) {
        this.music = []
        this.fillPlaylist(music)
    }

    fillPlaylist (music) {
        music.forEach((music) => {
            this.music.push({url: music, howl: new Howl({
                    src: music,
                    html5: true
                }), playing: false, paused: false, topped: true
            })
        })
    }

    clearPlaylist () {
        this.music.splice(0, this.music.length)
    }

    getPlaylist () {
        return this.music
    }
}
