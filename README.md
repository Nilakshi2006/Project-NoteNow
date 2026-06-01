# NoteNow

NoteNow is a beginner-friendly React notes application inspired by Google Keep. It lets users create, edit, delete, pin, and search notes with color labels and persistent storage.

## Demo

- Add notes with title, description, tags, and color labels
- Pin important notes to keep them at the top
- Search notes by title, content, or tags
- Toggle between light and dark mode
- Notes are saved in `localStorage` so they remain after refresh

## Screenshots

### Dashboard(Light Mode)

![NoteNow dashboard](Screenshots/Dashboard(Light).png)

### Dashboard(Dark Mode)

![NoteNow Dashboard](Screenshots/Dashboard(Dark).png)

### Notes(Light Mode)

![Notes list](Screenshots/Notes(Light).png)

### Notes(Dark Mode)

![Dark mode example](Screenshots/Notes(Dark).png)

## Features

- Add new notes with title and description
- Edit existing notes
- Delete notes
- Pin notes so they appear first
- Assign a color label to each note
- Search notes by title, description, or tags
- Dark/light theme toggle
- Responsive card layout with simple animation
- Data persistence using `localStorage`

## Folder structure

```
NoteNow/
├── package.json
├── vite.config.js
├── index.html
├── README.md
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    └── components/
        ├── Navbar.jsx
        ├── AddNote.jsx
        ├── NoteList.jsx
        └── NoteItem.jsx
```

## Installation

1. Clone this repository or download the files.
2. Open the project folder:
   ```bash
   cd NoteNow
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev -- --open
   ```

## Usage

- Use the top form to add or edit notes.
- Choose a color label before saving.
- Click the pin icon to pin/unpin a note.
- Use the search bar to filter notes instantly.
- Toggle dark mode using the button in the navbar.

## Technical details

- Built with React functional components
- Uses `useState` and `useEffect` hooks
- Stores notes in browser `localStorage`
- Simple CSS styling for a clean UI
- Responsive layout for desktop and mobile



Made with React and Vite for a simple, beginner-friendly note-taking experience.
