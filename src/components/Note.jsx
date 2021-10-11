
const Note = ({title, body}) => {

    return (

        <div className='note'>

            { title && <h4 className='title' >{title}</h4> }
            { <p className='body' >{body}</p> }

        </div>
    );
}

export default Note;