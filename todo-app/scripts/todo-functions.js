'use strict'

// Get localStorage data if available
const getSavedTodos = () => {
  const todosJSON = localStorage.getItem('todos')

  return todosJSON !== null ? JSON.parse(todosJSON) : []
//   if(todosJSON !== null) {
//     return JSON.parse(todosJSON)
//   } else {
//     return []
//   }
}

// Save todos to localStorage
const saveTodos = () => {
  localStorage.setItem('todos', JSON.stringify(todos))
}

// Function to remove todo from list based on UUID
const removeTodo = (id) => {
  const todoIndex = todos.findIndex((todo) => todo.id === id)

  if(todoIndex > -1) {
    todos.splice(todoIndex, 1)
  }
}

// Toggle the completed value for a given todo
const toggleTodo = (id) => {
  const todo = todos.find((todo) => todo.id === id)

  if (!todo) {
    todo.completed = !todo.completed
  }
}

// Render Todos

const renderTodos = (todos, filters) => {
  let filteredTodos = todos.filter((todo) => {
    const searchTextMatch = todo.title.toLowerCase().includes(filters.searchText.toLowerCase());
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed
    return searchTextMatch && hideCompletedMatch
  });

 
  const incompleteTodos = filteredTodos.filter((todo) => !todo.completed)

  document.querySelector("#todos").innerHTML = "";
  document.querySelector("#todos").appendChild(generateSummaryDOM(incompleteTodos));

  filteredTodos.forEach(function(todo) {
    document.querySelector("#todos").appendChild(generateTodoDOM(todo));
  });
};

// Get the DOM elements for an individual note
const generateTodoDOM = function (todo) {
  const todoEl = document.createElement('div')
  const checkbox = document.createElement('input')
  const todoText = document.createElement('span')
  const removeButton = document.createElement('button')

  // Setup todo checkbox
  checkbox.setAttribute('type', 'checkbox')
  checkbox.checked = todo.completed
  todoEl.appendChild(checkbox)
  checkbox.addEventListener('change', (e) => {
    toggleTodo(todo.id)
    saveTodos(todos)
    renderTodos(todos, filters)
  })

  // Setup todo text
  todoText.textContent = todo.title
  todoEl.appendChild(todoText)

  // Set up remove button
  removeButton.textContent = 'x'
  todoEl.appendChild(removeButton)
  removeButton.addEventListener('click', () =>{
    removeTodo(todo.id)
    saveTodos(todos)
    renderTodos(todos, filters)

  })

  return todoEl
}

// Get DOm elements for list summary
const generateSummaryDOM = (incompleteTodos) => {
  const summary = document.createElement("h2");
  summary.textContent = `You currently have ${incompleteTodos.length} incomplete tasks`;
  return summary

}