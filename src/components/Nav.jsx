import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

import { auth } from "../firebase";

import SearchBar from "./SearchBar";


const Nav = ({searchText, setSearchText, currentUser, unsubscribeListener}) => {

    const handleLogout = () => {

        try{           
            unsubscribeListener()
        } catch {
            console.log("Cant unsubscribe. Not logged in")
        }

        auth.signOut().then(() => () => console.log("Logged out"))
    }

    return (
        <div className="nav">
            
            <div className="logo">
                <h1 style={{userSelect:"none", pointerEvents:"none"}} >Idea</h1>
                <img style={{userSelect:"none", pointerEvents:"none"}} src="assets/splash.png" alt="Logo" className="splash" />
            </div>
            <SearchBar searchText={searchText} setSearchText={setSearchText}/>

            {
                currentUser &&
                <div className="logout-icon" >
                    <FontAwesomeIcon icon={faSignOutAlt} size="2x" onClick={handleLogout}/>
                </div>
            }
            
        </div>
    );
}

export default Nav;