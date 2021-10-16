import SearchBar from "./SearchBar";

const Nav = ({searchText, setSearchText}) => {

    return (
        <div className="nav">
            
            <div className="logo">
                <h1>Idea</h1>
                <img src="assets/splash.png" alt="bg" className="splash" />
            </div>
            <SearchBar searchText={searchText} setSearchText={setSearchText}/>
        </div>
    );
}

export default Nav;