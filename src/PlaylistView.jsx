import {usePlayer} from './PlayerContext'

function PlaylistView() {

    const {playlist, playTrack, deleteTrack, isCurrentTrack} = usePlayer();

    return(
        <div className='playlist-container'>
            <p className='playlist-header'>Треків: {playlist.length}</p>
            <div className='playlist-content-wrapper'>
                <div className='playlist-content'>
                    {playlist.map((track,index) => (
                        <div key={track.id} className={`playlist-item ${isCurrentTrack(track.id) ? "active" : "inactive"}`}>
                            <p>#{index+1}</p>
                            <img src={track.imageUrl} alt='album'/>
                            <div className='track-info-mini'>
                                <h4>{track.songName} -</h4>
                                <p>{track.artistName}</p>
                            </div>
                            <button className='delete' onClick={()=>deleteTrack(track.id)}>✕</button>
                            <button className='play' onClick={()=>playTrack(track)}>{isCurrentTrack(track.id) ? "❚❚" : "▶"}</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default PlaylistView;