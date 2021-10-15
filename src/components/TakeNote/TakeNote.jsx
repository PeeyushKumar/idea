import { useState } from "react";
import { collection, addDoc } from "@firebase/firestore";
import db from "../../firebase";
import "./TakeNote.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const TakeNote = ({setTakeNoteVisible}) => {
    
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");


    const handleOnClose = () => {
        setTakeNoteVisible(false);
        setTitle("");
        setBody("");
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!title && !body) return;

        const tempTitle = title;
        const tempBody = body;
        setTitle("");
        setBody("");
        setTakeNoteVisible(false);

        try {
            addDoc(collection(db, "ideas"), {
                title: tempTitle,
                body: tempBody,
                color: "White"
            });
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    return (
        
        <form className='take-note' onSubmit={(event) => handleSubmit(event)}>
            <FontAwesomeIcon icon={faTimesCircle} className="close-btn" onClick={handleOnClose}/>
            <input name="title" type="text" id="input-title" placeholder='Title' value={title} onChange={(e)=>setTitle(e.target.value)} />
            <textarea name="body" id="input-body" placeholder='Take a note...' cols="30" rows="3" value={body} onChange={(e)=>setBody(e.target.value)}></textarea>
            <button type="submit">Save</button>
        </form>
    )
}

export default TakeNote;