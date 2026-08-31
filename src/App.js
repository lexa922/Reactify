import {Suspense} from "react";
import {PlayerProvider} from './PlayerContext'
import {SearchProvider} from "./SearchContext";

import './App.css';
import './PlayerStyles.css'
import './TrackCardStyles.css'
import './SearchStyles.css'
import './PlaylistStyles.css'
import './TrackSectionStyles.css'

import Player from './Player';
import {SearchSkeleton} from "./Skeletons";
import SearchBar from './SearchBar';
import SearchResults from "./SearchResults";
import PlaylistView from "./PlaylistView";
import TrackSection from "./TrackSection";


function App() {
  return (
    <>
        <PlayerProvider>
            <TrackSection />

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
