import { useState } from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

import './AlteredTag.css'

const AlteredTag = () => {

    const [messageBoxOpen, setMessageBoxOpen] = useState(false);

    
    return (
        <>
            <FontAwesomeIcon
                icon={faTriangleExclamation}
                className="btn-altered"
                onMouseEnter={() => setMessageBoxOpen(true)}
                onMouseLeave={() => setMessageBoxOpen(false)}
            />
            
            {
                messageBoxOpen &&
                <div className="altered-message-box">
                    <p>This note has been altered</p>
                </div>
            }
            
        </>
    )

}

export default AlteredTag;