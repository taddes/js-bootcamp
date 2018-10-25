import { getTodos, toggleTodo, removeTodo } from './todos'
import { getFilters } from './filters'

// Render Todos

const renderTodos = () => {
  const todoEl = document.querySelector('#todos')
  const filters = getFilters()
  let filteredTodos = getFilters().filter((todo) => {
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
    renderTodos()
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
    renderTodos()
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