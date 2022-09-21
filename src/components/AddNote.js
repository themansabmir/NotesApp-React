import { useState } from 'react';

const AddNote = ({add}) => {

    const [text, setText] = useState('')

    const limit=200;

    const handleChange = (e) => {
        if(limit-e.target.value.length>=0)
        setText(e.target.value);

    }

    const save=()=>{
        if(text.trim().length>0)
         add(text);
         setText("");

    }

    return (
        <div className="note new">
            <textarea value={text} cols="10" rows="10" placeholder="Add a new note..." onChange={handleChange}></textarea>
            <div className="note-footer">
                <small>{limit-text.length} remaining</small>
                <button className="save" onClick={save} > Save</button>
            </div>

        </div>
    )


}

export default AddNote;