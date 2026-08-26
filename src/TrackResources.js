const CLIENT_ID = process.env.REACT_APP_JAMENDO_CLIENT_ID;

let tracksPromise;
export function createTracksResources() {
    tracksPromise = fetch(`https://api.jamendo.com/v3.0/tracks/?client_id=${CLIENT_ID}&format=json&limit=10`)
        .then(res => {
            if (!res.ok) throw new Error("Помилка завантаження даних");
            return res.json();
        })
        .then(data => data.results);
}

export function getTracksResources(){
    return(
       tracksPromise
    )
}