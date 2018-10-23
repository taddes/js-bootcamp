'use strict'

let todos = getSavedTodos();

let filters = {
  searchText: "",
  hideCompleted: false
};

renderTodos(todos, filters)

document.querySelector("#enter-todo").addEventListener("input", (e) => {
  filters.searchText = e.target.value;
  renderTodos(todos, filters);
});

document.querySelector('#todo-form').addEventListener('submit', (e) => {
  e.preventDefault()
  todos.push({
    id: uuidv4(),
    title: e.target.elements.submitTodo.value,
    completed: false
  })
  saveTodos(todos)
  renderTodos(todos, filters)
  e.target.elements.submitTodo.value = ''
})


document.querySelector('#hide-completed').addEventListener('change', (e) => {
  console.log(e.target.checked)
  filters.hideCompleted = e.target.checked
  renderTodos(todos, filters)
})
