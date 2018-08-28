let todos = [{
    title: 'Brush Teeth',
    completed: false
  }, {
    title: 'Meditate',
    completed: false
  }, {
    title: 'Cardio',
    completed: true
  }, {
    title: 'Play with Cat',
    completed: true
  }, {
    title: 'Make Breakfast',
    completed: false
  }]


// 1. convert array to array of objects -> text, completed property

// 2. create function to remove todo by text value

// const deleteToDo = function (todos, thingToDelete) {
//   const index = todos.findIndex(function (todo) {
//     return todo.title.toLowerCase() === thingToDelete.toLowerCase()
//   })
//   if(index > -1) {
//     todos.splice(index, 1)
//   }
// }

// const deleted  = deleteToDo(todos, 'Brush Teeth')
// console.log(deleted)
// console.log(todos)


// Sort Method for completed properties

const sortedTodos = function (todos) {
  todos.sort(function (a, b) {
    if(a.completed === false && b.completed === true) {
      return -1
    } else if (b.completed === false && a.completed === true) {
      return 1
    } else {
      return 0
    }

  })
}
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

sortedTodos(todos)
console.log(todos)

// Filter Method 

// const getThingsToDo = function(todos) {
//   return todos.filter((todo) => {
//     if(todo.completed === false) {
//       return todo
//     }
//   })
// }

// OR

// const getThingsToDo2 = function(todos) {
//   return todos.filter((todo) => {
//     return todo.completed === false
//   })
// }

// OR

// const getThingsToDo3 = function(todos) {
//   return todos.filter((todo) => {
//     return !todo.completed 
//   })
// }




// console.log(getThingsToDo(todos))