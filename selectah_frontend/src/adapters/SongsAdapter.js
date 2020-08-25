class SongsAdapter {
    constructor(){
        console.log ("song adapter")
        this.baseUrl='http://127.0.0.1:3000/songs'

    }

    getSongs() {
        return fetch(this.baseUrl).then(resp => resp.json()).then(json =>json.data)
        }
}



// get songs 
// delete songs