import NoteColumn from "./NoteColumn";
import TakeNote from "./TakeNote";
const NoteBoard = ({columns}) => {

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


    const rows = Math.ceil(data.length / columns);
    
    const notes = [];
    for (let i=0; i<columns; i++) {
        notes.push(new Array());
    }

    data.forEach((note, index) => {
        let i = index % columns;
        notes[i].push(note);
    })

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