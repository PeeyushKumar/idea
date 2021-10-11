import { useEffect, useState } from "react";

const TakeNote = () => {
    
    const [focus, setFocus] = useState(false);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const handleSubmit = () => {

    }

    return (
            <form className='take-note' onSubmit={handleSubmit}>
                
                <input name="title" type="text" id="input-title" placeholder='Title' value={title} onChange={(e)=>setTitle(e.target.value)} />

                <textarea name="body" id="input-body" placeholder='Take a note...' cols="30" rows="3" value={body} onChange={(e)=>setBody(e.target.value)}></textarea>

                <button type="submit">Save</button>
            </form>
    )
}

export default TakeNote;