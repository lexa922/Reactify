import {usePlayer} from './PlayerContext'

function TrackCard({id, songName, artistName, imageUrl, audioUrl}) {
    const { playTrack, isCurrentTrack, addToPlaylist, isInPlaylist } = usePlayer();
    const isCurrent = isCurrentTrack(id);
    const track = {id, artistName, songName, imageUrl, audioUrl}
    return(
        <div className={`track-card ${isCurrent ? " active" : ""}`}>
            <div className="track-image-wrapper">
                <img src={imageUrl} alt={songName} />
                <button className={`add-to-playlist-button ${isInPlaylist(id) ? " in-playlist" : ""}`} onClick={() => {addToPlaylist(track)}}>+</button>
            </div>

            <div className="track-info">
                <p className="track-name">{songName}</p>
                <p>{artistName}</p>
            </div>

            <button className={`track-button${isCurrent ? " current" : ""}`} onClick={() => playTrack(track)}>
                {isCurrent ? "❚❚" : "▶"}
            </button>
        </div>
    );
}

export default TrackCard;