import {use} from 'react';
import TrackCard from './TrackCard'

function TrackList({ tracksPromise }){

    const tracks = use(tracksPromise);

    return (
            <div className='track-list'>
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
    );
}

export default TrackList;