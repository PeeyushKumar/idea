import { useState, useEffect } from "react";

import { addDoc, collection } from "firebase/firestore";
import { auth, db } from '../../firebase';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareAlt, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import "./ShareNote.css";

const ShareNote = ({users, title, body, color, author, author_id}) => {

    const [shareOpen, setShareOpen] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [filteredUsers, setFilteredUsers] = useState([]);

    const [planeFlying, setPlaneFlying] = useState(false);

    useEffect(() => {

        const newData = users.filter(user => searchText ? (user.uid != auth.currentUser.uid) && user.displayName.toLowerCase().includes(searchText.toLowerCase()) : false);
        setFilteredUsers(newData)   

    }, [users, searchText])

    const toggleShareOpen = () => {
        setShareOpen(prev => !prev)
    }

    const handleShare = user => {

        toggleShareOpen()
        setPlaneFlying(true)
        
        addDoc(collection(db, `/users/${user.uid}/sharedIdeas`), {
            title: title,
            body: body,
            color: color,
            author_id: author_id,
            author: author
        }).finally(() => setPlaneFlying(false));
    }

    return(
        <>
            { <FontAwesomeIcon className="btn-share" icon={faShareAlt} onClick={toggleShareOpen} /> }
            
            { <FontAwesomeIcon icon={faPaperPlane} onClick={toggleShareOpen} className={`share-note-plane ${planeFlying && "share-note-plane-fly"}`}  /> }
            {
                shareOpen &&
                <div className="share-panel" onMouseLeave={toggleShareOpen}>
                    <input
                        autoFocus
                        type="text"
                        placeholder="Search"
                        onChange={e => setSearchText(e.target.value)}
                        value={searchText}
                    />

                    {
                        filteredUsers.map(user =>
                            <div key={user.uid} className="share-panel-user" onClick={() => handleShare(user)} >
                                <img src={user.photoURL} className="profile-pic" />
                                <h5>{user.displayName}</h5>                                 
                            </div>
                        )
                    }
                </div>
            }
        </>
    )
}

export default ShareNote;