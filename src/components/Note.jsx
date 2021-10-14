import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import db from '../firebase';
import { doc, deleteDoc, setDoc } from "firebase/firestore";
import ColorSwatch from "./ColorSwatch";

const Note = ({id, title, body, color}) => {

    const [hovering, sethovering] = useState(false);
    const [colorPicking, setColorPicking] = useState(false);
    const [timeoutId, setTimeoutId] = useState(null);

    const handleSetColor = color => {
        setColorPicking(false);
        const noteRef = doc(db, 'ideas', id);
        setDoc(noteRef, { color: color}, {merge: true});
    } 

    const handleColorSwatchClick = () => {
        setColorPicking(!colorPicking);
    }

    const handleMouseOver = () => {
        sethovering(true);
        clearTimeout(timeoutId)
    }

    const handleMouseLeave = () => {
        sethovering(false);
        if (colorPicking) {
            const timeoutId = setTimeout(() => setColorPicking(false), 300);
            setTimeoutId(timeoutId);
        }
    }

    return (
        <div
            className='note'
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
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
                colorPicking &&
                <ColorSwatch handleSetColor={handleSetColor} />
            }

            {
                hovering && 
                <FontAwesomeIcon
                    className="btn-palette"
                    icon={faPalette}
                    onClick={handleColorSwatchClick}
                /> 
            }

        </div>
    );
}

export default Note;