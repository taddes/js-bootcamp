const notes = [{
  title: 'JavaScript',
  body: 'Keep expanding my knowledge'
}, {
  title: 'Bass',
  body: 'Keep getting better'
}, {
  title: 'Exercise',
  body: 'Keep on schedule'
}]

// // Array .find()
// const findNote = function(notes, noteTitle) {
//   return notes.find(function(note, index) {
//     return note.title.toLowerCase() === noteTitle.toLowerCase()
//   })
// }

// const note = findNote(notes, 'javascript')
// console.log(note)


// Sort Method
const sortNotes = function (notes) {
  notes.sort(function(a, b) {
    if (a.title.toLowerCase() < b.title.toLowerCase()){
      return -1
    } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
      return 1
    } else {
      return 0
    }
  })
}

sortNotes(notes)
console.log(notes)

// ARRAY FILTERING

// const findNotes = function (notes, query) {
//   return notes.filter((note, index) => {
//     const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
//     const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
//     return isTitleMatch || isBodyMatch
//   });
// }


// console.log(findNotes(notes, 'exercise'))

// const findNote = function(notes, noteTitle) {
//   const index = notes.findIndex(function(note, index) {
//     return note.title.toLowerCase() === noteTitle.toLowerCase()
//   })
//   return notes[index]
// }

// const note = findNote(notes, 'javascript')
// console.log(note)



// // .length gives us length of array (total items)
// console.log(notes.length)

// // Bracket notation enables us to get one item in array.
// console.log(notes[2])

// // Add to Array: arrayName.push(whatToPush)
// notes.push('Note 4')

// console.log(notes)

// // Remove from end of Array: array.pop()
// notes.pop()

// console.log(notes)

// // Remove from front of Array: array.shift()
// notes.shift()
// console.log(notes)

// // Add array item to start array.unshift()
// notes.unshift('New stuff')
// console.log(notes)

// // Add or remove elements from array
// notes.splice(3, 1)

// // Replace, reassign value to a given index
// notes[3] = 'This is a different item'

// console.log(notes)

// // Loop through array forEach() method
// // 1 arg, which is a function that executes one time for each array item
// notes.forEach(function(item) {
//   console.log(item)
// });

// // For Loops for(INITIALIZER; CONDITION; FINAL EXPRESSION)
// console.log(`===FOR LOOP===`)
// for(let count = 0; count <= 2; count++) {
//   console.log(notes[count])
// }

// // indexOf Method
// console.log(notes.indexOf[{}])

// const index = notes.findIndex(function (note, index) {
//   console.log(note)
//   return note.title === 'Exercise'
// })
// console.log(index)