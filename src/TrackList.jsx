import {use, useEffect} from 'react';
import {getTracksResources} from './TrackResources'
import {usePlayer} from "./PlayerContext";
import TrackCard from './TrackCard'

function TrackList(){
    const {setPlaylist} = usePlayer();

    const tracks = use(getTracksResources());


    useEffect(() => {
        setPlaylist(tracks);
    },[])



    return (
        <div>
            <h2>Список треків</h2>
            <div>
                    {tracks.map(track => (
                        <TrackCard
                            key={track.id}
                            id={track.id}
                            artistName={track.artist_name}
                            songName={track.name}
                            imageUrl={track.image}
                            audioUrl={track.audio}
                        />
                ))}
            </div>
        </div>
    );
}

export default TrackList;