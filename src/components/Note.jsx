import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import db from '../firebase';
import { doc, deleteDoc } from "firebase/firestore";

const Note = ({id, title, body}) => {

    const [hovering, sethovering] = useState(false);

    return (
        <div
            className='note'
            onMouseOver={() => sethovering(true)}
            onMouseLeave={() => sethovering(false)}
        >

            {
                hovering && 
                <FontAwesomeIcon
                    className="btn-trash"
                    icon={faTrash}
                    onClick={() => deleteDoc(doc(db, 'ideas', id))}
                /> 
            }

            { title && <h4 className='title' >{title}</h4> }
            { <p className='body' >{body}</p> }


        </div>
    );
}

export default Note;