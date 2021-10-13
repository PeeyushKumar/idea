import Note from "./Note";

const NoteColumn = ({column}) => {

    return (
        <div className='note-column'>

            {column.map(note => <Note key={note.id} {...note} ></Note>)}         
              
        </div>
    )
}

export default NoteColumn;