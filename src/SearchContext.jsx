import {createContext, useContext, useState} from "react";
import {getTracksSearch} from "./TrackResources";

const SearchContext = createContext();

export function SearchProvider({ children }) {

    const [searchPromise, setSearchPromise] = useState(null);

    const handleSearch = (query) => {
        setSearchPromise(getTracksSearch(query));
    };

    const value = {
        handleSearch,
        searchPromise
    }
    return (
        <SearchContext.Provider value={value}>
            {children}
        </SearchContext.Provider>
    )
}

export function useSearch(){
    return useContext(SearchContext);
}