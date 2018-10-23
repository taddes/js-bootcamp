let notes = [];

// Check for existing notes information in local storage
const loadNotes = () => {
  const notesJSON = localStorage.getItem('notes');

  try {
    return notesJSON !== null ? JSON.parse(notesJSON) : [];
  } catch (e) {
    return [];
  }

}

// Expose notes from module
const getNotes = () => notes;

const createNote = () => {
  
}

notes = loadNotes();

export { getNotes }