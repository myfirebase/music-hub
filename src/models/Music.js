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
     * Define required properties.
     * 
     * @return array
     */
    required () {
        return []
    }
}

export default Music;
