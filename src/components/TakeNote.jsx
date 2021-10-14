import { collection, addDoc } from "@firebase/firestore";
import { useState } from "react";
import db from "../firebase";

const TakeNote = () => {
    
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!title && !body) return;

        const tempTitle = title;
        const tempBody = body;
        setTitle("");
        setBody("");

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
            <input name="title" type="text" id="input-title" placeholder='Title' value={title} onChange={(e)=>setTitle(e.target.value)} />
            <textarea name="body" id="input-body" placeholder='Take a note...' cols="30" rows="3" value={body} onChange={(e)=>setBody(e.target.value)}></textarea>
            <button type="submit">Save</button>
        </form>
    )
}

export default TakeNote;