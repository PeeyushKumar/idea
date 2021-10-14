import SearchBar from "./SearchBar";

const Nav = ({searchText, setSearchText}) => {

    return (
        <div className="nav">
            <h1 className="logo">Idea</h1>
            <SearchBar searchText={searchText} setSearchText={setSearchText}/>
        </div>
    );
}

export default Nav;