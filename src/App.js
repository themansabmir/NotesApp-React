
import './App.css';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/search';
import Header from './components/Header';

function App() {




  const [notes, setNotes] = useState([{
    id: nanoid(),
    text: "This is my first Notes",
    date: "30/04/2022"
  },
  {
    id: nanoid(),
    text: "This is my second Notes",
    date: "30/04/2022"
  },

  {
    id: nanoid(),
    text: "This is my third Notes",
    date: "30/04/2022"
  }
  ]);

  const [search, setSearch] = useState("");

  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes)
    );
  }, [notes])

  useEffect(() => {
    const savednotes = JSON.parse(
      localStorage.getItem('react-notes-app-data')
    );

    if (savednotes) {
      setNotes(savednotes);
    }
  }, []);




  const add = (text) => {

    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),

    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id)
    setNotes(newNotes);
  }

  return (

    <div className={`${darkMode && 'darkMode'}`}>

      <div className="container">
        <Header dark={setDarkMode} />
        <Search search={setSearch} />
        <NotesList notes={notes.filter((note) =>
          note.text.toLowerCase().includes(search)
        )}
          add={add}
          del={deleteNote} />

      </div>
    </div>


  );
}

export default App;
