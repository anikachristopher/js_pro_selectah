class Playlists{ 
    constructor() {
        this.playlists = []
        this.adapter = new PlaylistsAdapter()
        this.songsAdapter = new SongsAdapter()
        this.fetchAndLoadPlaylists()
    }

    fetchAndLoadPlaylists() {
        this.adapter.getPlaylists().then(playlists => {console.log(playlists)})
    }
}