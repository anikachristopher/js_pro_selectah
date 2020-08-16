document.addEventListener("DOMContentLoaded", () => {
    fetchSongs()

})

    const BASE_URL = "http://127.0.0.1:3000"

    function fetchSongs(){
        fetch(`${BASE_URL}/songs`).then(response => response.json()).then(object => console.log(object))
        
    }