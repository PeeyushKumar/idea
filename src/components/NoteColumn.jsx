import Note from "./Note";

const NoteColumn = ({column, editorId, setEditorId, users}) => {

    return (
        <div
            className='note-column'
        >
            {column.map(note =>
                <Note
                    key={note.id}
                    {...note}
                    users = {users}
                    editorId={editorId}
                    setEditorId={setEditorId}
                />
            )}

        </div>
    )
}

export default NoteColumn;