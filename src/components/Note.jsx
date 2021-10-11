
const Note = ({title, body}) => {

    return (

        <div className='note'>

            { title && <h4 className='title' >{title}</h4> }
            { title ? <p className='body' >{body}</p> : <h className='body' >{body}</h> }

        </div>
    );
}

export default Note;