
import {setFilters} from './filters'
import { renderTodos } from './views'
import { createTodo } from './todos'

renderTodos()

document.querySelector("#enter-todo").addEventListener("input", (e) => {
  setFilters({
    searchText: e.target.value
  })
  renderTodos();
});

document.querySelector('#todo-form').addEventListener('submit', (e) => {
  const text = e.target.elements.text.value.trim();
  e.preventDefault()
  if (text.length > 0) {
    createTodo(text)
    renderTodos()
    e.target.elements.submitTodo.value = ''
  }
})


document.querySelector('#hide-completed').addEventListener('change', (e) => {
  setFilters({
    hideCompleted: e.target.checked
  })
  renderTodos()
})

