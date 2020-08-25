class Playlists{ 
    constructor() {
        this.playlists = []
        this.adapter = new PlaylistsAdapter()
        this.songsAdapter = new SongsAdapter()
        this.fetchAndLoadPlaylists()
    }


    fetchAndLoadPlaylists(){
        this.adapter
        .getPlaylists()
        .then(playlists =>{
            playlists.forEach(playlist => this.playlists.push(playlist))
        })
        .then(() => {this.render()
        })
    }

    render (){
        const playlistsContainer = document.getElementById('playlists-container')
        playlistsContainer.innerHTML = 'All Playlists'
        console.log('see my playlists', this.playlists)
    }

   


    // fetchAndLoadPlaylists() {
    //     this.adapter.getPlaylists().then(playlists => {console.log(playlists)})
    // }
}