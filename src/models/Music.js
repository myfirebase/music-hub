import { FirestoreModel } from 'myfirebase'

class Music extends FirestoreModel {

    /**
     * Create new Music Instance.
     * 
     * @param {object} ref
     */    
    constructor (ref) {
        super(ref)
    }

    /**
     * Set music name.
     * 
     * @param {string} name
     */
    setName (name) {
        this.musicName = name
        return this
    }

    /**
     * Set music url.
     * 
     * @param {string} url
     */
    setUrl (url) {
        this.url = url
        return this
    }

    /**
     * Define required properties.
     * 
     * @return array
     */
    required () {
        return []
    }
}

export default Music;
