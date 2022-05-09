import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

import "./SignIn.css"

const provider = new GoogleAuthProvider()

const SignIn = () => {

    const handleLogIn = () => {
        signInWithPopup(auth, provider).then(result => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
        }).catch(err => console.log(err))
    }

    return(
        <div className="sign-in">
            <h1 className="signin-text">Sign in with</h1>
            <FontAwesomeIcon icon={faGoogle} size="8x" id="google-icon" onClick={handleLogIn}/>
        </div>
    )
}


export default SignIn;