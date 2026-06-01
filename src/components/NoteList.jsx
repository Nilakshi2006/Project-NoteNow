import NoteItem from './NoteItem.jsx';

function NoteList({ notes, onDelete, onEdit, onTogglePin }) {
  return (
    <section className="note-list">
      <div className="list-header">
        <h2>Your Notes</h2>
        <p>{notes.length} {notes.length === 1 ? 'note' : 'notes'}</p>
      </div>

      {notes.length === 0 ? (
        <div className="empty-state card">
          <h3>No notes found</h3>
          <p>Use the form above to add a new note.</p>
        </div>
      ) : (
        <div className="notes-grid">
          {notes.map((note) => (
            <NoteItem
              key={note.id}
              note={note}
              onDelete={onDelete}
              onEdit={onEdit}
              onTogglePin={onTogglePin}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default NoteList;
