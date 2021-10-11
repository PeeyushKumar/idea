import { useState } from "react";

const TakeNote = () => {
    
    const [focus, setFocus] = useState(false);


    return (
        <div
            className='take-note'
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
        >
            <form>
                
                {
                    focus &&  <input type="text" placeholder='Title'/>
                }

                <input 
                    type="text"
                    placeholder='Take a note...'  
                />

            </form>
        </div>
    )
}

export default TakeNote;