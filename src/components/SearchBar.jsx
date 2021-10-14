
const SearchBar = ({searchText, setSearchText}) => {

    return (
        <div>
            <input
                type="text"
                className="search-bar"
                value={searchText}
                onChange={e => setSearchText(e.target.value)}
            />
        </div>
    );
}

export default SearchBar;