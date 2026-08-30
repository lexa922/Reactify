import {Suspense} from "react";
import {PlayerProvider} from './PlayerContext'
import {SearchProvider} from "./SearchContext";

import './App.css';
import './PlayerStyles.css'
import './TrackCardStyles.css'
import './SearchStyles.css'
import './PlaylistStyles.css'

import Player from './Player';
import TrackList from './TrackList';
import TracksSkeleton from './Skeletons';
import {SearchSkeleton} from "./Skeletons";
import SearchBar from './SearchBar';
import SearchResults from "./SearchResults";
import PlaylistView from "./PlaylistView";


function App() {
  return (
    <>
        <PlayerProvider>
            <Suspense fallback={<TracksSkeleton />}>
                <TrackList />
            </Suspense>

            <Player/>

            <PlaylistView/>

            <SearchProvider>
                <SearchBar/>

                <Suspense fallback={<SearchSkeleton/>}>
                    <SearchResults/>
                </Suspense>
            </SearchProvider>

        </PlayerProvider>
    </>
  );
}

export default App;
