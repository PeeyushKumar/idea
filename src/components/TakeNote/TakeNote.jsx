import { useRef, useState } from "react";
import { collection, addDoc } from "@firebase/firestore";
import db from "../../firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import ColorSwatch from "../ColorSwatch/ColorSwatch";
import "./TakeNote.css"

const TakeNote = ({setTakeNoteVisible, closeDisabled}) => {
    
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [color, setColor] = useState("White");

    const [titleHeight, setTitleHeight] = useState("30px");
    const [bodyHeight, setBodyHeight] = useState("100px");
    
    const titleRef = useRef();
    const bodyRef = useRef();

    const handleOnClose = () => {
        setTakeNoteVisible(false);
        setTitle("");
        setBody("");
        setColor("White");
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!title && !body) return;

        const draftTitle = title;
        const draftBody = body;
        setTitle("");
        setBody("");
        setColor("White");
        
        if (!closeDisabled) setTakeNoteVisible(false);

        try {
            addDoc(collection(db, "ideas"), {
                title: draftTitle,
                body: draftBody,
                color: color,
            });
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    const handleTitleChange = event => {
        setTitle(event.target.value);
        setTitleHeight(`${titleRef.current.scrollHeight}px`);
    }

    const handleBodyChange = event => {
        setBody(event.target.value);
        setBodyHeight(`${bodyRef.current.scrollHeight}px`);
    }

    const handleChangeColor = newColor => {
        setColor(newColor);
    }

    return (
        <form className='take-note' onSubmit={(event) => handleSubmit(event)} style={{background: color}}>

            {
                closeDisabled ||
                <FontAwesomeIcon icon={faTimesCircle} className="close-btn" onClick={handleOnClose}/>            
            }

            <textarea ref={titleRef} className="input-title" rows="1" placeholder='Title' value={title} style={{height:titleHeight}} onChange={handleTitleChange}></textarea>
            <textarea ref={bodyRef} className="input-body" rows="3" placeholder='Take a note...' value={body} style={{height:bodyHeight}} onInput={handleBodyChange}></textarea>
            <button type="submit">Save</button>
            <ColorSwatch color={color} handleChangeColor={handleChangeColor}/>
        </form>
    )
}

export default TakeNote;