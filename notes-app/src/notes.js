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
  return id;
}

const removeNote = (id) => {
  const noteIndex = notes.findIndex((note) => note.id === id);

  if (noteIndex > -1) {
    notes.splice(noteIndex, 1)
  }
}

// sort your notes in 3 ways
const sortNotes = (sortBy) => {
  if (sortBy === 'byEdited'){
    return notes.sort((a, b) => {
      if (a.updatedAt > b.updatedAt) {
        return -1
      } else if (a.updatedAt < b.updatedAt) {
        return 1
      } else {
        return 0
      }
    })
  } else if (sortBy === 'byCreated') {
    return notes.sort((a, b) => {
      if (a.createdAt > b.createdAt) {
        return -1
      } else if (a.createdAt < b.createdAt) {
        return 1
      } else {
        return 0
      }
    })

  } else if (sortBy === 'alphabetical') {
    return notes.sort((a, b) => {
      if(a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1
      }
      else if(a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1
      } else {
        return 0
      }
    })
  } else {
    return notes
  }
}

const updateNote = (id, updates) => {
  const note = notes.find((note) => note.id === id);

  if (!note) {
    return
  }

  if (typeof updates.title === 'string') {
    note.title = updates.title;
    note.updatedAt = moment().valueOf();
  }
  if (typeof updates.body === 'string') {
    note.body = updates.body;
    note.updatedAt = moment().valueOf();
  }
  saveNotes();
}

notes = loadNotes();

export { getNotes, createNote, removeNote,  sortNotes, updateNote }