class SongsAdapter {
    constructor(){
        this.BASE_URL_SONGS ='http://127.0.0.1:3000/songs'

    }

    getSongs() {
        return fetch(this.BASE_URL_SONGS).then(resp => resp.json()).then(json =>json.data)
        }
}



// get songs 
// delete songs