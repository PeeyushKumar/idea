import { useState, useEffect } from "react";
import NoteColumn from "./NoteColumn";
import TakeNote from "./TakeNote";

const NoteBoard = ({filteredData}) => {

    const [notes, setNotes] = useState([]);

    useEffect(() => {
  
      const calculateColumns = () => {
        let mounted = true;
        const noteWidth = 220;
        const margin = 20;
        const maxColumns = 4;

        const columns = Math.max(1, Math.min(maxColumns, Math.floor(window.innerWidth / (noteWidth+margin))));
        
        const tempNotes = [];
        for (let i=0; i<columns; i++) {tempNotes.push([]);}
        filteredData.forEach((note, index) => tempNotes[index % columns].push(note));
        if (mounted) setNotes(tempNotes);

        const r = document.querySelector(':root');
        let noteWidthCSS = columns === 1 ? '100%' : `${noteWidth}px`;
        r.style.setProperty('--note-width', noteWidthCSS);

        return () => mounted = false;
      }
  
      window.addEventListener('resize', calculateColumns);
      calculateColumns();

    }, [filteredData]);

  
    return (
        <div className='note-board'>
            <TakeNote />
            {
              filteredData.length === 0 ? <p>Loading...</p> :
              <div className='note-container'>
                  { notes.map((column, columnIndex) =>
                    <NoteColumn
                      key={columnIndex}
                      column={column}
                    />
                  )}
              </div>
            }
        </div>
    )
}

export default NoteBoard;