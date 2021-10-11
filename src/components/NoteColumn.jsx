import Note from "./Note";

const NoteColumn = ({column}) => {

    return (
        <div className='note-column'>

            {column.map((note, i) => <Note key={i} {...note} ></Note>)}         
              
        </div>
    )
}

export default NoteColumn;