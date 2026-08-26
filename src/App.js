import {useState,Suspense} from "react";

import './App.css';
import './PlayerStyles.css'
import './TrackCardStyles.css'

import Player from './Player';
import TrackList from './TrackList';
import TracksSkeleton from './Skeletons';

function App() {
    const [currentTrack, setCurrentTrack] = useState({audio:"https://prod-1.storage.jamendo.com/?trackid=241&format=mp31&from=Vj1R3b3NzpoCqB555frFXw%3D%3D%7CYmKsMAP1FhWkacouJr2SXQ%3D%3D"});
  return (
    <>
        <Suspense fallback={<TracksSkeleton />}>
            <TrackList onSelectTrack={(track) => setCurrentTrack(track)}/>
        </Suspense>
        <Player track={currentTrack} />
    </>
  );
}

export default App;
