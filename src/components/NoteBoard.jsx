import { useState, useEffect } from "react";
import NoteColumn from "./NoteColumn";
import TakeNote from "./TakeNote";

const NoteBoard = () => {

    let data = [
        {
            title: 'Dream',
            body: 'my drean beautiful'
        },
        {
            title: 'Stigme tools',
            body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos rem repellat mollitia id deleniti unde vitae adipisci soluta assumenda corporis! Ipsum aspernatur ab ducimus. Perferendis non repellat doloribus quasi quae consectetur, magnam impedit sunt! A doloremque harum nemo iusto optio.'
        },
        {
            title: 'Novarak',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dignissimos in cum accusamus maiores consequatur tenetur voluptatem labore voluptas. Blanditiis?'
        },
        {
            title: 'Dream of wonderland',
            body: 'my drean beautifdul and powerful'
        },
        {
            title: 'Stigme tools',
            body: 'Lorem ipsum dolor repellat mollitia id deleniti unde vitae adipisci soluta assumenda corporis! Ipsum aspernatur ab ducimus. Perferendis non repellat doloribus quasi quae consectetur, magnam impedit sunt! A doloremque harum nemo iusto optio.'
        },
        {
            title: 'Novarak',
            body: 'Lorem ipsum dolor saiores consequatur tenetur voluptatem labore voluptas. Blanditiis?'
        },
        {
            title: 'Dream of wonderland',
            body: 'my drean beautifdul and powerful'
        },
    ]

    const [notes, setNotes] = useState([]);

    useEffect(() => {
  
      const calculateColumns = () => {
        const noteWidth = 220;
        const margin = 20;

        const columns = Math.min(5, Math.floor(window.innerWidth / (noteWidth+margin)));
        
        const tempNotes = [];
        for (let i=0; i<columns; i++) {tempNotes.push([]);}
        data.forEach((note, index) => tempNotes[index % columns].push(note));
  
        setNotes(tempNotes);

        const r = document.querySelector(':root');
        r.style.setProperty('--note-width', `${noteWidth}px`);
      }
  
      window.addEventListener('resize', calculateColumns);
      calculateColumns();

    }, []);
    

    return (
        <div className='note-board'>
            <TakeNote />

            <div className='note-container'>
                { notes.map(column => <NoteColumn column={column} ></NoteColumn>) }
            </div>
        </div>
    )
}

export default NoteBoard;