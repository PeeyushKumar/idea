import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";

import "./ShareNote.css";

const ShareNote = () => {

    const [shareOpen, setShareOpen] = useState(false);
    const [shareeEmail, setShareeEmail] = useState(false);

    const toggleShareOpen = () => {
        setShareOpen(prev => !prev)
    }

    const handleShare = e => {
        e.preventDefault();
        console.log(`Share with ${shareeEmail}`)
    }

    return(
        <>
            { <FontAwesomeIcon className="btn-share" icon={faShareAlt} onClick={toggleShareOpen} /> }

            {
                shareOpen &&
                <form onSubmit={(e) => handleShare(e)}>
                    <input
                        disabled
                        type="text"
                        className="share-panel"
                        placeholder="Comming soon"
                        // placeholder="Email"
                        onMouseLeave={toggleShareOpen}
                        onChange={e => setShareeEmail(e.target.value)}
                    />
                </form>   
            }
            
        </>
        
    )

}

export default ShareNote;
