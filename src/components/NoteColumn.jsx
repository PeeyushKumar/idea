import Note from "./Note";

const NoteColumn = ({column, editorId, setEditorId}) => {

    return (
        <div
            className='note-column'
        >
            {column.map(note =>
                <Note
                    key={note.id}
                    {...note}
                    editorId={editorId}
                    setEditorId={setEditorId}
                />
            )}

        </div>
    )
}

export default NoteColumn;