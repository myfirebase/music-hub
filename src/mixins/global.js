export default {
    data () {
        return {

        }
    },
    computed: {
        currentUser () {
            return this.$auth.user()
        },
        userId () {
            return this.currentUser.uid
        },
        userCollection () {
            return this.$store.state.firestore.collection('users').doc(this.userId).collection('music')
        },
        userArtwork () {
            return this.$store.state.firestore.collection('users').doc(this.userId).collection('artwork')
        }
    },
    methods: {

    }
}