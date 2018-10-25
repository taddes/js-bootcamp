import { initializeEditPage } from './views';
import { updateNote, removeNote } from './notes';

const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const removeElement = document.querySelector('#remove-note')
const dateElement = document.querySelector('#last-edited')

// Capture the note-hash corresponding to note ID
const noteId = location.hash.substring(1)

initializeEditPage(noteId)

//Set up input event for input, text area. 
titleElement.addEventListener('input', (e) => { 
  const note = updateNote(noteId, {
    title: e.target.value
  });
  dateElement.textContent = generateLastEdited(note.updatedAt);
});

bodyElement.addEventListener('input', (e) => {
  const note = updateNote(noteId, {
    body: e.target.body
  })
  dateElement.textContent = generateLastEdited(note.updatedAt)
});

removeElement.addEventListener('click', (e) => {
  removeNote(note.id)
  location.assign('/index.html')
});

window.addEventListener('storage', (e) => {
  if (e.key === 'notes') {
    initializeEditPage(noteId)
  }
});