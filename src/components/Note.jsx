import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import db from '../firebase';
import { doc, deleteDoc, setDoc } from "firebase/firestore";
import ColorSwatch from "./ColorSwatch/ColorSwatch";

const Note = ({id, title, body, color}) => {

    const [hovering, sethovering] = useState(false);

    return (
        <div
            className='note'
            onMouseOver={() => sethovering(true)}
            onMouseLeave={() => sethovering(false)}
            draggable={true}
            onDragStart={event => event.preventDefault()}
            style={{background: color}}
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

            {
                hovering && 
                <ColorSwatch id={id} />
            }

        </div>
    );
}

export default Note;