class Playlists{ 
    constructor() {
        this.playlists = []
        this.adapter = new PlaylistsAdapter()
        this.songsAdapter = new SongsAdapter()
        this.fetchAndLoadSongs()
    }

}