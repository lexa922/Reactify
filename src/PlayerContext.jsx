import {createContext, useContext, useState} from "react";

const PlayerContext = createContext();

function normalizeTrack(track) {
    if (!track) return null;
    return {
        id: track.id,
        songName: track.songName || track.name,
        artistName: track.artistName || track.artist_name,
        imageUrl: track.imageUrl || track.image,
        audioUrl: track.audioUrl || track.audio
    };
}

export function PlayerProvider({ children }) {
    const [currentTrack, setCurrentTrack] = useState(null);
    const [playlist, setPlaylist] = useState([]);
    const [isPlaying, setIsPlaying] = useState(false);

    function playTrack(track, newPlayList = []) {
        setCurrentTrack(track);
        if (newPlayList.length > 0)
            setPlaylist(newPlayList);
        setIsPlaying(true);
    }

    function setNormalizedPlaylist(list) {
        setPlaylist(list.map(normalizeTrack));
    }

    function playNext() {
        if (!currentTrack || !playlist.length > 0)
            return;
        const currentIndex = playlist.findIndex(t => t.id === currentTrack.id);
        const nextIndex = (currentIndex + 1) % playlist.length;
        setCurrentTrack(playlist[nextIndex]);
    }

    function playPrev() {
        if (!currentTrack || !playlist.length > 0)
            return;
        const currentIndex = playlist.findIndex(t => t.id === currentTrack.id);
        const nextIndex = (currentIndex - 1 + playlist.length) % playlist.length;
        setCurrentTrack(playlist[nextIndex]);
    }

    const value = {
        currentTrack,
        playlist,
        isPlaying,
        setIsPlaying,
        setPlaylist: setNormalizedPlaylist,
        playTrack,
        playNext,
        playPrev
    };

    return (
        <PlayerContext.Provider value={value}>
            {children}
        </PlayerContext.Provider>
    );
}

export function usePlayer() {
    return useContext(PlayerContext);
}

