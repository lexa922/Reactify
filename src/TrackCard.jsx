import {usePlayer} from './PlayerContext'

function TrackCard({id, songName, artistName, imageUrl, audioUrl}) {
    const { playTrack, isCurrentTrack } = usePlayer();
    const isCurrent = isCurrentTrack(id);

    return(
        <div className={`track-card ${isCurrent?" active":""}`}>
            <img src={imageUrl} alt={songName} />
            <div className="track-info">
                <p className='track-name'>{songName}</p>
                <p>{artistName}</p>
            </div>
            <button className={`track-button${isCurrent?" current":""}`} onClick={()=>playTrack({id, artistName, songName, imageUrl, audioUrl})}> {isCurrent ? "❚❚" : "▶"} </button>
        </div>
    );
}

export default TrackCard;