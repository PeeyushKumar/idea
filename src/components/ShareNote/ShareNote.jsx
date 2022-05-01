import { useState } from "react";

import { addDoc, collection } from "firebase/firestore";
import { auth, db } from '../../firebase';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";

import "./ShareNote.css";

const ShareNote = ({users, title, body, color, author, author_id}) => {

    const [shareOpen, setShareOpen] = useState(false);
    const [shareeEmail, setShareeEmail] = useState(false);

    const toggleShareOpen = () => {
        setShareOpen(prev => !prev)
    }

    const handleShare = e => {
        e.preventDefault();
        toggleShareOpen()

        const user = users.find(user => user.email === shareeEmail)

        if (user) {

            if (user.uid == auth.currentUser.uid) return;

            try {
                addDoc(collection(db, `/users/${user.uid}/sharedIdeas`), {
                    title: title,
                    body: body,
                    color: color,
                    author_id: author_id,
                    author: author
                });
            } catch (e) {
                console.error("Error adding document: ", e);
            }

        }
    }

    return(
        <>
            { <FontAwesomeIcon className="btn-share" icon={faShareAlt} onClick={toggleShareOpen} /> }

            {
                shareOpen &&
                <form onSubmit={(e) => handleShare(e)}>
                    <input
                        type="text"
                        className="share-panel"
                        placeholder="Send to email"
                        onMouseLeave={toggleShareOpen}
                        onChange={e => setShareeEmail(e.target.value)}
                    />
                </form>   
            }
            
        </>
        
    )

}

export default ShareNote;
