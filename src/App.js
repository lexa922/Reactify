import {Suspense} from "react";
import {PlayerProvider} from './PlayerContext'

import './App.css';
import './PlayerStyles.css'
import './TrackCardStyles.css'

import Player from './Player';
import TrackList from './TrackList';
import TracksSkeleton from './Skeletons';


function App() {
  return (
    <>
        <PlayerProvider>
            <Suspense fallback={<TracksSkeleton />}>
                <TrackList />
            </Suspense>
            <Player/>
        </PlayerProvider>
    </>
  );
}

export default App;
