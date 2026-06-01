function Navbar({ searchText, onSearch, darkMode, onToggleTheme }) {
  return (
    <header className="navbar">
      <div className="brand">
        <span className="brand-mark">📝</span>
        <div>
          <h1>NoteNow</h1>
          <p>Simple notes with colors, pins, tags and search.</p>
        </div>
      </div>

      <div className="navbar-actions">
        <label className="search-input">
          <input
            type="text"
            value={searchText}
            onChange={(e) => onSearch(e.target.value)}
            placeholder="Search notes..."
          />
        </label>

        <button className="theme-toggle" onClick={onToggleTheme}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
