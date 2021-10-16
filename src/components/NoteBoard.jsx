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
            {
              takeNoteVisible &&
              <TakeNote setTakeNoteVisible={setTakeNoteVisible} />
            }

            <div
              style={{
                filter: takeNoteVisible?"blur(3px)":"none",
                pointerEvents: takeNoteVisible?"none":"all",
              }}
            >
              {
                <div className="new-note-btn" onClick={() => setTakeNoteVisible(true)}>
                  <FontAwesomeIcon icon={faFeatherAlt}/>
                </div>
              }

              {
                filteredData.length === 0 ? <p>Loading...</p> :
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
              }

            </div>
        </div>
    )
}

export default NoteBoard;