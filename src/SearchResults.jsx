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
        return <div className='search-results'><h2>Нічого не знайдено</h2></div>;
    }

    return(
        <div className="search-results">
            <h2>Результати пошуку</h2>
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