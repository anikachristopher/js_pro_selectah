class Playlists{ 
    constructor() {
        this.playlists = []
        this.adapter = new PlaylistsAdapter()
        this.songsAdapter = new SongsAdapter()
        this.fetchAndLoadPlaylists()
    }


    fetchAndLoadPlaylists(){
        this.adapter.getPlaylists().then(playlists =>{console.log(playlists)})
    }

    // fetchAndLoadPlaylists() {
    //     const allplaylists = []
    //     this.playlistsAdapter.getPlaylists()
    //     .then(playlists => {
    //         playlists.forEach(playlist => allplaylists.push(new Playlist(playlist.id, playlist.attributes.text, playlist.attributes.post_id)))
    //         console.log(allplaylists)
    //     })



    // fetchAndLoadPlaylists() {
    //     this.adapter.getPlaylists().then(playlists => {console.log(playlists)})
    // }
}