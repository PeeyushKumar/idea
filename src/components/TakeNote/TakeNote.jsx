import { useState } from "react";
import { collection, addDoc } from "@firebase/firestore";
import db from "../../firebase";
import "./TakeNote.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import ColorSwatch from "../ColorSwatch/ColorSwatch";

const TakeNote = ({setTakeNoteVisible}) => {
    
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [color, setColor] = useState("White");


    const handleOnClose = () => {
        setTakeNoteVisible(false);
        setTitle("");
        setBody("");
        setColor("White");
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!title && !body) return;

        const tempTitle = title;
        const tempBody = body;
        setTitle("");
        setBody("");
        setColor("White");
        setTakeNoteVisible(false);

        try {
            addDoc(collection(db, "ideas"), {
                title: tempTitle,
                body: tempBody,
                color: color,
            });
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    const handleChangeColor = newColor => {
        setColor(newColor);
    }

    return (
        
        <form className='take-note' onSubmit={(event) => handleSubmit(event)} style={{background: color}}>
            <FontAwesomeIcon icon={faTimesCircle} className="close-btn" onClick={handleOnClose}/>
            <input name="title" type="text" id="input-title" placeholder='Title' value={title} onChange={(e)=>setTitle(e.target.value)} />
            <textarea name="body" id="input-body" placeholder='Take a note...' cols="30" rows="3" value={body} onChange={(e)=>setBody(e.target.value)}></textarea>
            <button type="submit">Save</button>
            <ColorSwatch handleChangeColor={handleChangeColor}/>
        </form>
    )
}

export default TakeNote;