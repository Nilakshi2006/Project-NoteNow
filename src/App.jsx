import { useEffect, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import AddNote from './components/AddNote.jsx';
import NoteList from './components/NoteList.jsx';

const STORAGE_KEY = 'noteNow.notes';
const THEME_KEY = 'noteNow.theme';

function App() {
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [editingNote, setEditingNote] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = localStorage.getItem(STORAGE_KEY);
    const savedTheme = localStorage.getItem(THEME_KEY);
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
    if (savedTheme === 'dark') {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    localStorage.setItem(THEME_KEY, darkMode ? 'dark' : 'light');
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const addOrUpdateNote = (note) => {
    if (note.id) {
      setNotes((currentNotes) =>
        currentNotes.map((item) => (item.id === note.id ? note : item))
      );
      setEditingNote(null);
      return;
    }

    const newNote = {
      ...note,
      id: Date.now().toString(),
      pinned: false,
      createdAt: Date.now(),
    };

    setNotes((currentNotes) => [newNote, ...currentNotes]);
  };

  const deleteNote = (id) => {
    setNotes((currentNotes) => currentNotes.filter((note) => note.id !== id));
  };

  const togglePin = (id) => {
    setNotes((currentNotes) =>
      currentNotes.map((note) =>
        note.id === id ? { ...note, pinned: !note.pinned } : note
      )
    );
  };

  const startEdit = (note) => {
    setEditingNote(note);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredNotes = notes.filter((note) => {
    const query = searchText.toLowerCase();
    const inTitle = note.title.toLowerCase().includes(query);
    const inContent = note.content.toLowerCase().includes(query);
    const inTags = note.tags.some((tag) => tag.toLowerCase().includes(query));
    return inTitle || inContent || inTags;
  });

  const sortedNotes = [...filteredNotes].sort((a, b) => {
    if (a.pinned === b.pinned) {
      return b.createdAt - a.createdAt;
    }
    return b.pinned ? 1 : -1;
  });

  return (
    <div className={`app ${darkMode ? 'dark' : ''}`}>
      <Navbar
        searchText={searchText}
        onSearch={setSearchText}
        darkMode={darkMode}
        onToggleTheme={() => setDarkMode((value) => !value)}
      />

      <main className="container">
        <AddNote
          onSave={addOrUpdateNote}
          editingNote={editingNote}
          onCancel={() => setEditingNote(null)}
        />

        <NoteList
          notes={sortedNotes}
          onDelete={deleteNote}
          onEdit={startEdit}
          onTogglePin={togglePin}
        />
      </main>
    </div>
  );
}

export default App;
