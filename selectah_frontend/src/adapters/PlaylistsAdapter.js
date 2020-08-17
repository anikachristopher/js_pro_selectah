class PlaylistsAdapter {
    constructor(){
        this.BASE_URL_PLAYLISTS ='http://127.0.0.1:3000/playlists'

    }

    getPlaylists() {
        return fetch(this.BASE_URL_PLAYLISTS).then(resp => resp.json()).then(json =>json.data)
        }
}


 





// get playlists
// create playlists
// delete playlists


// document.addEventListener("DOMContentLoaded", () => {
//     fetchPlaylists()
// })