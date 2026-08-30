import {useState, useRef, useEffect} from 'react'
import {usePlayer} from "./PlayerContext";

function Player() {
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [currentVolume, setCurrentVolume] = useState(1);

    const {currentTrack, playNext, playPrev, isPlaying, setIsPlaying} = usePlayer();

    const audioRef = useRef(null);

    const audioSrc = typeof currentTrack === 'string' ? currentTrack : currentTrack?.audioUrl;


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
    function handleVolumeChange(event){
        const newVolume = Number(event.target.value);

        setCurrentVolume(newVolume);
        audioRef.current.volume = newVolume;
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

    if (!currentTrack){
        return (
            <div>
            </div>
        )
    }

    return(
        <div className="player-container">
            <img className="player-image" src={currentTrack.imageUrl} alt=''/>
            <div className='middle-section'>
                <div className="player-info">
                    <h3>{currentTrack.songName}</h3>
                    <p>{currentTrack.artistName}</p>
                </div>

                <div className='player-volume-container'>
                    <p>{Math.floor(currentVolume * 100)}</p>
                    <input type='range' min='0' max='1' step='0.01' value={currentVolume} onChange={handleVolumeChange}/>
                </div>
            </div>
            <audio ref={audioRef} src={audioSrc} onTimeUpdate={handleTimeUpdate} onLoadedMetadata={handleLoadedMetaData} onEnded={playNext}/>
            <input className="progress-bar" type='range' min='0' max={duration} value={currentTime} onChange={handleSearch}/>
            <div className='track-duration'>
                <p>{formatDuration(currentTime)}</p>
                <button className="play-button" onClick={playPrev}>▶❚</button>
                <button className="play-button" onClick={handlePlayPause}>{isPlaying ? "❚❚" : "▶"}</button>
                <button className="play-button" onClick={playNext}>❚▶</button>
                <p>{formatDuration(duration)}</p>
            </div>
        </div>
    )
}
export default Player;