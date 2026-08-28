import {use} from 'react'
import {useSearch} from "./SearchContext";

import TrackCard from "./TrackCard";


function SearchResults(){

    const {searchPromise} = useSearch();

    if (!searchPromise) {
        return null;
    }

    const tracks = use(searchPromise);

    if (tracks.length === 0) {
        return <p>Нічого не знайдено</p>;
    }

    return(
        <div>
            {tracks.map(track=>
                <TrackCard
                key={track.id}
                id={track.id}
                artistName={track.artist_name}
                songName={track.name}
                imageUrl={track.image}
                audioUrl={track.audio}/>
                )}
        </div>
    )
}
export default SearchResults