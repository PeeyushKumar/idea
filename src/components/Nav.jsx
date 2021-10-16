import SearchBar from "./SearchBar";

const Nav = ({searchText, setSearchText}) => {

    return (
        <div className="nav">
            
            <div className="logo">
                <h1 style={{userSelect:"none", pointerEvents:"none"}} >Idea</h1>
                <img style={{userSelect:"none", pointerEvents:"none"}} src="assets/splash.png" alt="Logo" className="splash" />
            </div>
            <SearchBar searchText={searchText} setSearchText={setSearchText}/>
        </div>
    );
}

export default Nav;