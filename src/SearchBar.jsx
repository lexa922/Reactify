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
            <button onClick={handleSearchSong}>Пошук</button>
        </div>

    );
}

export default SearchBar;