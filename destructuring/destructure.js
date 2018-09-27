const todo = {
  id: '1498654',
  text: 'Pay the bills',
  completed: false
}

//typically a need to use dot notation to reference within obj
// const textItem = todo.text;
// const completed = todo.completed;

// Destructuring is a faster, simpler method to pull from objects and arrays
// and assign values to variables from said obj/arr

// Reference object itself
//Similar to named exports in an import statement
// use varName in obj : newVarName to declare a value that differs from obj
// Can define default values by using = sign
const { text:todoText, completed, details = 'No details' } = todo

console.log(todoText);
console.log(completed);
console.log(details)

// Rest operator to assign other values

let {text:newText, completed:ifDone, ...others} = todo
console.log({newText})
console.log({ifDone})
console.log({others})

// Destructuring for Arrays
let age = [65, 1, 21, 34]
const [firstAge, secondAge, ...rest] = age
console.log({firstAge});
console.log({secondAge});
console.log({rest});

// can skip, leave one out by skipping with commas ,

let fruits = ['Apple', 'Pear', 'Kiwi', 'Peach'];
const [firstFroot, , thirdFroot, fourthFroot, fifthFroot = 'Papaya'] = fruits;
console.log({firstFroot});
console.log({thirdFroot});
console.log({fifthFroot});

// Function arguments and destructuring

/* original

const printTodo = (todo) => {
  console.log(`${todo.text}: ${todo.completed}`)

}
printTodo(todo)
*/

// Destructured
const printTodo = ({ text, completed}) => {
  console.log(`${text}: ${completed}`)
}
printTodo(todo)