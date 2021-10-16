import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFeatherAlt } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import NoteColumn from "./NoteColumn";
import TakeNote from "./TakeNote/TakeNote";

const NoteBoard = ({filteredData}) => {

    const [notes, setNotes] = useState([]);
    const [takeNoteVisible, setTakeNoteVisible] = useState(false);

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
          {
            <div className="new-note-btn" onClick={() => setTakeNoteVisible(!takeNoteVisible)}>
              <FontAwesomeIcon icon={faFeatherAlt}/>
            </div>
          }

          <div className='note-container'>
              { notes.map((column, columnIndex) =>
                <NoteColumn
                  key={columnIndex}
                  column={column}
                  editorId={editorId}
                  setEditorId={setEditorId}
                />
              )}
          </div>

          { takeNoteVisible &&
            <div className="take-note-wrapper">
              <TakeNote setTakeNoteVisible={setTakeNoteVisible} />
            </div>
          }
        </div>
    )
}

export default NoteBoard;
