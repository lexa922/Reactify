import {useState} from "react";
import {useSearch} from "./SearchContext";

function SearchBar() {
    const [searchText, setSearchText] = useState("");

    const {handleSearch} = useSearch();

    function handleSearchSong() {
        handleSearch(searchText);
        setSearchText("");
    }

    function handleSearchChange(event){
        setSearchText(event.target.value);
    }

    function handleKeyDown(e) {
        if (e.key === 'Enter') {
            handleSearch(searchText);
            setSearchText("");
        }
    }

    return (
        <div className="search-bar-container">
            <input type='text' placeholder='Search...' value={searchText} onChange={handleSearchChange} onKeyDown={handleKeyDown}/>
            <button onClick={handleSearchSong}><svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg></button>
        </div>

    );
}

export default SearchBar;