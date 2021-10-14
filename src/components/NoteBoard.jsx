import { useState, useEffect } from "react";
import NoteColumn from "./NoteColumn";
import TakeNote from "./TakeNote";

const NoteBoard = ({data}) => {

    const [notes, setNotes] = useState([]);

    useEffect(() => {
  
      const calculateColumns = () => {
        const noteWidth = 220;
        const margin = 20;
        const maxColumns = 4;

        const columns = Math.max(1, Math.min(maxColumns, Math.floor(window.innerWidth / (noteWidth+margin))));
        
        const tempNotes = [];
        for (let i=0; i<columns; i++) {tempNotes.push([]);}
        data.forEach((note, index) => tempNotes[index % columns].push(note));
        setNotes(tempNotes);

        const r = document.querySelector(':root');
        let noteWidthCSS = columns === 1 ? '100%' : `${noteWidth}px`;
        console.log(noteWidthCSS)
        r.style.setProperty('--note-width', noteWidthCSS);
      }
  
      window.addEventListener('resize', calculateColumns);
      calculateColumns();

    }, [data]);
    
    return (
        <div className='note-board'>
            <TakeNote />
            {
              data.length === 0 ? <p>Loading...</p> :
              <div className='note-container'>
                  { notes.map((column, i) => <NoteColumn key={i} column={column} ></NoteColumn>) }
              </div>
            }
        </div>
    )
}

export default NoteBoard;