'use strict'

// Get localStorage data if available
const getSavedTodos = () => {
  const todosJSON = localStorage.getItem('todos')

  try {
    return todosJSON ? JSON.parse(todosJSON) : []
  } catch (e) {
    return []
  }
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
  const todoEl = document.querySelector('#todos')
  let filteredTodos = todos.filter((todo) => {
    const searchTextMatch = todo.title.toLowerCase().includes(filters.searchText.toLowerCase());
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed
    return searchTextMatch && hideCompletedMatch
  });

  const incompleteTodos = filteredTodos.filter((todo) => !todo.completed)

  todoEl.innerHTML = "";
  todoEl.appendChild(generateSummaryDOM(incompleteTodos));

  if (filteredTodos > 0) {

  filteredTodos.forEach(function(todo) {
    todoEl.appendChild(generateTodoDOM(todo));
  });
  } else {
    const messageEl = document.createElement('p')
    messageEl.classList.add('empty-message')
    messageEl.textContent = 'No todos to show'
    todoEl.appendChild(messageEl)
  }
};

// Get the DOM elements for an individual note
const generateTodoDOM = function (todo) {
  const todoEl = document.createElement('label')
  const containerEl = document.createElement('div')
  const checkbox = document.createElement('input')
  const todoText = document.createElement('span')
  const removeButton = document.createElement('button')

  // Setup todo checkbox
  checkbox.setAttribute('type', 'checkbox')
  checkbox.checked = todo.completed
  containerEl.appendChild(checkbox)
  checkbox.addEventListener('change', (e) => {
    toggleTodo(todo.id)
    saveTodos(todos)
    renderTodos(todos, filters)
  })

  // Setup todo text
  todoText.textContent = todo.title
  containerEl.appendChild(todoText)

  // Setup container
  todoEl.classList.add('list-item')
  containerEl.classList.add('list-item__container')
  todoEl.appendChild(containerEl)
  
  // Set up remove button
  removeButton.textContent = 'REMOVE'
  removeButton.classList.add('button', 'button--text')
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
  const plural = incompleteTodos === 1 ? '' : 's'
  summary.classList.add('list-title')
  summary.textContent = `You currently have ${incompleteTodos.length} todo${plural}`;
  return summary

}