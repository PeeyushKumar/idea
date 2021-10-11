import Note from "./Note";

const NoteColumn = ({column}) => {

    return (
        <div className='note-column'>

            {column.map(note => <Note {...note} ></Note>)}         
              
        </div>
    )
}

export default NoteColumn;