class PlaylistsAdapter {
    constructor(){
        console.log ("I'm in playlist adapter")
        this.baseUrl='http://127.0.0.1:3000/playlists'

    }

    getPlaylists() {
        return fetch(this.baseUrl).then(res => res.json())
        }
}


 //an object with a constructor so anytime we instantiate that adapter it will set a base URl which will allow us
 //to call "get playlists" which will send a fetch request to the base url and then we parse the JSON data





// get playlists
// create playlists
// delete playlists


// document.addEventListener("DOMContentLoaded", () => {
//     fetchPlaylists()
// })