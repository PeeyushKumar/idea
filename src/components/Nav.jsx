import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";

import SearchBar from "./SearchBar";
import UserPanel from "./UserPanel/UserPanel";

const provider = new GoogleAuthProvider()

const Nav = ({searchText, setSearchText, currentUser, unsubscribeListeners}) => {

    const handleLogIn = () => {
        signInWithPopup(auth, provider).then(result => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
        }).catch(err => console.log(err))
    }

    const handleLogout = () => {

        unsubscribeListeners.forEach(unSub => {
            try{           
                unSub()
            } catch {
                console.log("Cant unsubscribe. Not logged in")
            }
        })
        
        auth.signOut().then(() => console.log("Logged out"))
    }

    return (
        <div className="nav">
            
            <div className="logo">
                <h1 style={{userSelect:"none", pointerEvents:"none"}} >Idea</h1>
                <img style={{userSelect:"none", pointerEvents:"none"}} src="assets/splash.png" alt="Logo" className="splash" />
            </div>
            
            <SearchBar searchText={searchText} setSearchText={setSearchText}/>

            {
                auth.currentUser ?
                <UserPanel handleLogout={handleLogout}/> :
                <button className='btn-sign-in' onClick={handleLogIn}>Sign in</button>  
            }  

        </div>
    );
}

export default Nav;