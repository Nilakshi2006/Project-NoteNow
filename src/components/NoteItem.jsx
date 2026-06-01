import { useEffect, useState } from 'react';

function NoteItem({ note, onDelete, onEdit, onTogglePin }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(true);
  }, []);

  const handleDelete = () => {
    setVisible(false);
    setTimeout(() => onDelete(note.id), 200);
  };

  return (
    <article className={`note-card ${note.color} ${visible ? 'enter' : 'exit'}`}>
      <div className="note-header">
        <strong>{note.title || 'Untitled note'}</strong>
        <button className="pin-button" onClick={() => onTogglePin(note.id)}>
          {note.pinned ? '📌' : '📍'}
        </button>
      </div>

      <p>{note.content}</p>

      {note.tags.length > 0 && (
        <div className="tags-row">
          {note.tags.map((tag) => (
            <span key={tag} className="tag">
              #{tag}
            </span>
          ))}
        </div>
      )}

      <div className="note-actions">
        <button onClick={() => onEdit(note)} className="action-button edit">
          Edit
        </button>
        <button onClick={handleDelete} className="action-button delete">
          Delete
        </button>
      </div>
    </article>
  );
}

export default NoteItem;
