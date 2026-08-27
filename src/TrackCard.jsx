import {usePlayer} from './PlayerContext'

function TrackCard({id, songName, artistName, imageUrl, audioUrl}) {
    const { playTrack } = usePlayer();

    return(
        <div className="track-card">
            <img src={imageUrl} alt={songName} />
            <div className="track-info">
                <h3>{songName}</h3>
                <p>{artistName}</p>
            </div>
            <button onClick={()=>playTrack({id, artistName, songName, imageUrl, audioUrl})}> ▶ </button>
        </div>
    );
}

export default TrackCard;