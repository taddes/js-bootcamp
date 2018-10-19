'use strict'

const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const removeElement = document.querySelector('#remove-note')
const dateElement = document.querySelector('#last-edited')

// Capture the note-hash corresponding to note ID
const noteId = location.hash.substring(1)

// Function to return all notes stored in local storage
let notes = getSavedNotes()

// See if note id matches a note.  If not, redirect to dashboard
let note = notes.find((note) => note.id === noteId)

if (!note) {
  location.assign('/index.html')
}

titleElement.value = note.title
bodyElement.value = note.body
dateElement.textContent = generateLastEdited(note.updatedAt)

//Set up input event for input, text area. 
titleElement.addEventListener('input', (e) => { 
  note.title = e.target.value
  note.updatedAt = moment().valueOf()
  dateElement.textContent = generateLastEdited(note.updatedAt)
  saveNotes(notes)
})

bodyElement.addEventListener('input', (e) => {
  note.body = e.target.value
  note.updatedAt = moment().valueOf()
  dateElement.textContent = generateLastEdited(note.updatedAt)
  saveNotes(notes)
})

removeElement.addEventListener('click', (e) => {
  removeNote(note.id)
  saveNotes(notes)
  location.assign('/index.html')
})

window.addEventListener('storage', (e) => {
  if (e.key === 'notes') {
    notes = JSON.parse(e.newValue)
    note = notes.find((note) => note.id === noteId)
    
    if (note === undefined) {
      location.assign('/index.html')
    }
    
    titleElement.value = note.title
    bodyElement.value = note.body
    dateElement.textContent = dateElement.textContent = generateLastEdited(note.updatedAt)
  }
})