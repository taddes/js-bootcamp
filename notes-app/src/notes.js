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

// Save the notes to local storage

const saveNotes = () => {
  localStorage.setItem('notes', JSON.stringify(notes));
}
// Expose notes from module
const getNotes = () => notes;

const createNote = () => {
  const id = uuidv4();
  const timestamp = moment().valueOf();

  notes.push({
    id: id,
    title: '',
    body: '',
    createdAt: timestamp,
    updatedAt: timestamp
  });
  saveNotes();
}

notes = loadNotes();

export { getNotes, createNote }