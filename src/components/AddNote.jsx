import { useEffect, useState } from 'react';

const colorOptions = [
  { label: 'Yellow', value: 'yellow' },
  { label: 'Blue', value: 'blue' },
  { label: 'Green', value: 'green' },
  { label: 'Pink', value: 'pink' },
];

function AddNote({ onSave, editingNote, onCancel }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [color, setColor] = useState('yellow');
  const [tags, setTags] = useState('');

  useEffect(() => {
    if (editingNote) {
      setTitle(editingNote.title);
      setContent(editingNote.content);
      setColor(editingNote.color || 'yellow');
      setTags(editingNote.tags.join(', '));
    } else {
      setTitle('');
      setContent('');
      setColor('yellow');
      setTags('');
    }
  }, [editingNote]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title.trim() && !content.trim()) {
      return;
    }

    const note = {
      id: editingNote?.id,
      title: title.trim(),
      content: content.trim(),
      color,
      tags: tags
        .split(',')
        .map((tag) => tag.trim())
        .filter(Boolean),
    };

    onSave(note);
    setTitle('');
    setContent('');
    setColor('yellow');
    setTags('');
  };

  return (
    <section className="note-form card">
      <div className="form-header">
        <h2>{editingNote ? 'Edit Note' : 'Add New Note'}</h2>
        {editingNote && (
          <button type="button" className="cancel-button" onClick={onCancel}>
            Cancel
          </button>
        )}
      </div>

      <form onSubmit={handleSubmit}>
        <label>
          Title
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Note title"
          />
        </label>

        <label>
          Description
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your note..."
            rows="4"
          />
        </label>

        <label>
          Tags (comma separated)
          <input
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="ideas, work, personal"
          />
        </label>

        <div className="color-picker">
          <span>Color</span>
          <div className="color-options">
            {colorOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                className={`color-chip ${option.value} ${color === option.value ? 'selected' : ''}`}
                onClick={() => setColor(option.value)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        <button type="submit" className="save-button">
          {editingNote ? 'Update Note' : 'Add Note'}
        </button>
      </form>
    </section>
  );
}

export default AddNote;
