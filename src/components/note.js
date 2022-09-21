import { MdDeleteForever } from 'react-icons/md'

import './style.css'

const Note = ({id, text, date, del}) => {
    return (
        <div className="note">


            <span> {text} </span>


            <div className="note-footer">
                <small>{date}</small>
                <MdDeleteForever className='delete-icon' onClick={()=> del(id)} />
            </div>

        </div>


    )
}

export default Note;
