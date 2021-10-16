import { useRef, useState } from "react";
import db from '../firebase';
import { doc, deleteDoc, setDoc } from "firebase/firestore";
import ColorSwatch from "./ColorSwatch/ColorSwatch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";

const Note = ({id, title, body, color}) => {

    const [hovering, sethovering] = useState(false);
    const [opacity, setOpacity] = useState(1);
    const [editing, setEditing] = useState(false);

    const [draftTitleHeight, setDraftTitleHeight] = useState("20px");
    const [draftBodyHeight, setDraftBodyHeight] = useState("20px");

    const [draftTitle, setDraftTitle] = useState(title);
    const [draftBody, setDraftBody] = useState(body);

    const titleRef = useRef();
    const bodyRef = useRef();

    const draftTitleRef = useRef();
    const draftBodyRef = useRef();

    const deleteNote = id => {
        setOpacity(0);
        setTimeout(() => deleteDoc(doc(db, 'ideas', id)), 200);        
    }

    const handleDraftTitleChange = event => {
        setDraftTitle(event.target.value);
        setDraftTitleHeight(`${draftTitleRef.current.scrollHeight}px`);
    }

    const handleDraftBodyChange = event => {
        setDraftBody(event.target.value);
        setDraftBodyHeight(`${draftBodyRef.current.scrollHeight}px`);
    }

    const handleChangeColor = newColor => {
        const noteRef = doc(db, 'ideas', id);
        setDoc(noteRef, { color: newColor}, {merge: true});
    }

    const handleEditNote = () => {
        if (editing) return;

        if (titleRef.current) {
            const temp = titleRef.current.getBoundingClientRect().height;
            if (temp) {
                setDraftTitleHeight(`${temp}px`)
            } else {
                setDraftTitleHeight("1.5rem")
            }     
        }

        if (bodyRef.current) {
            const temp = bodyRef.current.getBoundingClientRect().height;
            if (temp) {
                setDraftBodyHeight(`${temp}px`)
            } else {
                setDraftBodyHeight("1.5rem")
            }            
        }
        
        setEditing(true);
    }

    const handleSaveNote = () => {
        setEditing(false);
        
        if (draftTitle !== title || draftBody !== body) {
            const noteRef = doc(db, 'ideas', id);
            setDoc(noteRef, {title: draftTitle, body:draftBody}, {merge: true});
        }
    }


    return (
        <div
            className='note'
            onMouseOver={() => sethovering(true)}
            onMouseLeave={() => sethovering(false)}
            draggable={true}
            onDragStart={event => event.preventDefault()}
            onDoubleClick={handleEditNote}
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

            {
                editing ? 
                <form>
                    <textarea ref={draftTitleRef} placeholder="Title" className="input-title" value={draftTitle} style={{height:draftTitleHeight}} onChange={handleDraftTitleChange} />
                    <textarea ref={draftBodyRef} placeholder="Body" className="input-body" value={draftBody} style={{height:draftBodyHeight}} onChange={handleDraftBodyChange} />
                    {
                        hovering &&
                        <FontAwesomeIcon icon={faCheck} className="check-btn" onClick={handleSaveNote} />
                    }
                </form> :
                <>
                    { title && <h4 ref={titleRef} className='title' >{title}</h4> }
                    <p ref={bodyRef} className='body' >{body}</p>
                </>
            }

            {
                hovering && 
                <ColorSwatch color={color} handleChangeColor={handleChangeColor} />
            }

        </div>
    );
}

export default Note;