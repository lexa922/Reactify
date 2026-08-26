import {useState, useRef, useEffect} from 'react'

function Player({track}) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const audioRef = useRef(null);

    const audioSrc = typeof track === 'string' ? track : track?.audioUrl;

    function handlePlayPause(){
        if(isPlaying){
            audioRef.current.pause()
            setIsPlaying(false);
            return;
        }
        audioRef.current.play().then(() => setIsPlaying(true))
            .catch(err => console.error("Audio playback error:", err));
    }

    function handleSearch(event){
        audioRef.current.currentTime=event.target.value;
        setCurrentTime(event.target.value);
    }

    function handleTimeUpdate(){
        setCurrentTime(audioRef.current.currentTime);
    }

    function formatDuration(duration){
        const minutes = Math.floor(duration / 60);
        const seconds = Math.floor(duration % 60);

        const formatedMinutes = minutes.toString().padStart(2, '0');
        const formatedSeconds = seconds.toString().padStart(2, '0');

        return `${formatedMinutes}:${formatedSeconds}`;
    }
    function handleLoadedMetaData(){
        setDuration(audioRef.current.duration);
    }
    function handleTrackEnd(){
        setIsPlaying(false);
        setCurrentTime(0);
    }
    useEffect(() => {
        if (audioSrc && audioRef.current) {
            audioRef.current.load();
            setCurrentTime(0);
            audioRef.current.play()
                .then(() => setIsPlaying(true))
                .catch(err => {
                    setIsPlaying(false);
                    console.log("Очікування взаємодії користувача для старту:", err);
                });
        }
    }, [audioSrc]);

    return(
        <div className="player-container">
            <img className="player-image" src={track.imageUrl} alt="1231321" />
            <div className="player-info">
                <h3>{track.songName}</h3>
                <p>{track.artistName}</p>
            </div>
            <audio ref={audioRef} src={audioSrc} onTimeUpdate={handleTimeUpdate} onLoadedMetadata={handleLoadedMetaData} onEnded={handleTrackEnd}/>
            <input className="progress-bar" type='range' min='0' max={duration} value={currentTime} onChange={handleSearch}/>
            <div className='track-duration'>
                <p>{formatDuration(currentTime)}</p>
                <button className="play-button" onClick={handlePlayPause}>{isPlaying ? "❚❚" : "▶"}</button>
                <p>{formatDuration(duration)}</p>
            </div>
        </div>
    )
}
export default Player;