const CLIENT_ID = process.env.REACT_APP_JAMENDO_CLIENT_ID;

export function fetchTracksResource(limit = 7, offset = 0) {
    return fetch(`https://api.jamendo.com/v3.0/tracks/?client_id=${CLIENT_ID}&format=json&limit=${limit}&offset=${offset}`)
        .then(res => {
            if (!res.ok) throw new Error("Помилка завантаження даних");
            return res.json();
        })
        .then(data => data.results || []);
}

export function getTracksSearch(query){

    const rawQuery = query.trim();
    if (!rawQuery) return Promise.resolve([]);

    const searchWords = rawQuery.toLowerCase().split(/\s+/).filter(Boolean);

    const url = `https://api.jamendo.com/v3.0/tracks/?client_id=${CLIENT_ID}&format=json&search=${encodeURIComponent(rawQuery)}&limit=12&order=relevance`;

    return fetch(url)
        .then(res => {
            if (!res.ok) throw new Error("Помилка завантаження даних");
            return res.json();
        })
        .then(data => {
            const results = data.results || [];

            return results.filter(track => {
                const trackName = track.name.toLowerCase();
                return searchWords.every(word => trackName.includes(word));
            });
        });
}