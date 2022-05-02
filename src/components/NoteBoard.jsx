import { useState, useEffect } from "react";

import NoteColumn from "./NoteColumn";


const NoteBoard = ({filteredData, users}) => {

    const [notes, setNotes] = useState([]);
    const [editorId, setEditorId] = useState(null);

    useEffect(() => {
      const calculateColumns = () => {
        const noteWidth = 220;
        const margin = 20;
        const maxColumns = 4;

        const columns = Math.max(1, Math.min(maxColumns, Math.floor(window.innerWidth / (noteWidth+margin))));
        
        const tempNotes = [];
        for (let i=0; i<columns; i++) {tempNotes.push([]);}
        filteredData.forEach((note, index) => tempNotes[index % columns].push(note));
        setNotes(tempNotes);

        const r = document.querySelector(':root');
        let noteWidthCSS = columns === 1 ? '100%' : `${noteWidth}px`;
        r.style.setProperty('--note-width', noteWidthCSS);
      }

      window.addEventListener('resize', calculateColumns);
      calculateColumns();

      return () => window.removeEventListener('resize', calculateColumns);
    }, [filteredData]);

  
    return (
        <div className='note-board'>
          <div className='note-container'>
              {
                notes.map((column, columnIndex) =>
                <NoteColumn
                  key={columnIndex}
                  column={column}
                  users={users}
                  editorId={editorId}
                  setEditorId={setEditorId}
                />
              )}
          </div>
        </div>
    )
}

export default NoteBoard;
