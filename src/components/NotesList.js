import Note from './note'
import AddNote from './AddNote'
import './style.css'



const NotesList = ({ notes , add ,del}) => {

    return (
        <div className="notes-list">
            {
                notes.map((note) => 
                (<Note id={note.id} text={note.text} date={note.date} 
                
                    del={del}
                />))
            }

<AddNote  add={add} del={del} />


        </div>
    
    );


};

export default NotesList;