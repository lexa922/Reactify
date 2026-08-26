import {use} from 'react';
import {getTracksResources} from './TrackResources'
import TrackCard from './TrackCard'

function TrackList({onSelectTrack}){
    const tracks = use(getTracksResources());

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
                                   onPlay={onSelectTrack}
                        />
                ))}
            </div>
        </div>
    );
}

export default TrackList;