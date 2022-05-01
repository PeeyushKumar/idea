import { useRef, useState } from "react";
import { doc, deleteDoc, setDoc } from "firebase/firestore";
import { db } from '../firebase';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";
import ColorSwatch from "./ColorSwatch/ColorSwatch";

const Note = ({id, title, body, author, color, editorId, setEditorId}) => {

    const [hovering, sethovering] = useState(false);
    const [opacity, setOpacity] = useState(1);

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
        if (editorId === id) return;

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

        setDraftTitle(title);
        setDraftBody(body)
        setEditorId(id);
    }

    const handleClick = () => {
        if (editorId !== id) setEditorId(null);
    }

    const handleSaveNote = () => {
        setEditorId(null);
        
        if (draftTitle !== title || draftBody !== body) {
            const noteRef = doc(db, 'ideas', id);
            setDoc(noteRef, {title: draftTitle, body:draftBody}, {merge: true});
        }

        setDraftTitle(null);
        setDraftBody(null);
    }

    const authorFontColor = color === "#FFFFFF" ? "#ccc" : "#666";

    return (
        <div
            className='note'
            onMouseOver={() => sethovering(true)}
            onMouseLeave={() => sethovering(false)}
            draggable={true}
            onDragStart={event => event.preventDefault()}
            onClick={handleClick}
            onDoubleClick={handleEditNote}
            style={{
                background: color,
                opacity: opacity,
                border: id === editorId && "1px solid #0b0d1b"
            }}
        >
            {
                hovering &&
                <p className="author" style={{
                    color: authorFontColor
                }}>
                    ~{author}
                </p>
            }
            

            {
                hovering && 
                <FontAwesomeIcon
                    className="btn-trash"
                    icon={faTrash}
                    onClick={() => deleteNote(id)}
                /> 
            }

            {
                editorId === id ? 
                <form>
                    <textarea ref={draftTitleRef} placeholder="Title" className="input-title" value={draftTitle} style={{height:draftTitleHeight}} onChange={handleDraftTitleChange} />
                    <textarea ref={draftBodyRef} placeholder="Body" className="input-body" value={draftBody} style={{height:draftBodyHeight}} onChange={handleDraftBodyChange} />
                    {
                        hovering &&
                        <FontAwesomeIcon icon={faCheck} className="check-btn" onClick={handleSaveNote} />
                    }
                </form> :
                <>
                    { !title && !body && <h3 className="empty-note">Empty Note...</h3> }
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