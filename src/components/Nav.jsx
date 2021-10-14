import SearchBar from "./SearchBar";

const Nav = ({searchText, setSearchText}) => {

    return (
        <div className="nav">
            <h1 className="logo">Ideas</h1>

            <SearchBar searchText={searchText} setSearchText={setSearchText}/>

            <ul className="nav-list">
               <li><a href="#">One</a></li>
               <li><a href="#">Two</a></li> 
            </ul>
        </div>
    );
}

export default Nav;