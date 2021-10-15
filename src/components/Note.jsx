import { useState } from "react";
import db from '../firebase';
import { doc, deleteDoc } from "firebase/firestore";
import ColorSwatch from "./ColorSwatch/ColorSwatch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Note = ({id, title, body, color}) => {

    const [hovering, sethovering] = useState(false);
    const [opacity, setOpacity] = useState(1)

    const deleteNote = id => {
        setOpacity(0);
        setTimeout(() => deleteDoc(doc(db, 'ideas', id)), 200);        
    }

    return (
        <div
            className='note'
            onMouseOver={() => sethovering(true)}
            onMouseLeave={() => sethovering(false)}
            draggable={true}
            onDragStart={event => event.preventDefault()}
            style={{
                background: color,
                opacity: opacity
            }}
        >

            {
                hovering && 
                <FontAwesomeIcon
                    className="btn-trash"
                    icon={faTrash}
                    onClick={() => deleteNote(id)}
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