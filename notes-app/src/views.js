import moment from 'moment';
import { getFilters } from './filters';
import { sortFilters, getNotes } from './notes';

// Generate the DOM structure for anote
const generateNoteDOM = (note) => {

  const noteEl = document.createElement('a')
  const textEl = document.createElement('p')
  const statusEl = document.createElement('p')

  // Setup the note title text
  if(note.title.length > 0) {
    textEl.textContent = note.title
  } else {
    textEl.textContent = 'Unnamed note'
  }
  textEl.classList.add('list-item__title')
  noteEl.appendChild(textEl)

  // set up link
  noteEl.setAttribute('href', `/notes-app/edit.html#${note.id}`)
  noteEl.classList.add('list-item')

  // set up status
  statusEl.textContent - generateLastEdited(note.updatedAt)
  statusEl.classList.add('list-item__subtitle')
  noteEl.appendChild(statusEl)
  return noteEl
}

// Render application notes
const renderNotes = () => {
  const notesEl = document.querySelector('#notes')
  const filters = getFilters();
  const notes = sortNotes(filters.sortBy)
  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  })
    notesEl.innerHTML = ''

  if (filteredNotes.length > 0) {
    filteredNotes.forEach((note) => {
      const noteEl = generateNoteDOM(note)
     notesEl.appendChild(noteEl)
    })
  } else {
    const emptyMessage = document.createElement('p')
    emptyMessage.textContent = 'No notes to show'
    emptyMessage.classList.add('empty-message')
    notesEl.appendChild(emptyMessage);
  }
}

const initializeEditPage = (noteId) => {

const titleElement = document.querySelector('#note-title');
const bodyElement = document.querySelector('#note-body');
const dateElement = document.querySelector('#last-edited');

  // Function to return all notes stored in local storage
const notes = getNotes();

// See if note id matches a note.  If not, redirect to dashboard
const note = notes.find((note) => note.id === noteId);

if (!note) {
  location.assign('/index.html')
}

titleElement.value = note.title;
bodyElement.value = note.body;
dateElement.textContent = generateLastEdited(note.updatedAt);
}

// Generate the last edited message
const generateLastEdited = (timestamp) => `last edited ${moment(timestamp).fromNow()}`

export {generateNoteDOM, generateLastEdited, renderNotes, initializeEditPage }