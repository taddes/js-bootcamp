
import { getFilters, setFilters} from './filters';
import { getTodos, createTodo, removeTodo, toggleTodo } from './todos'


console.log('index.js')
console.log(name)

console.log(add(5,10))
console.log('KARK')
console.log('pork')

console.log(scream('Aw fuck'))
console.log(screamSlim('fuck'))
console.log(otherSquare(200))

const calculateAverage = (num1, num2) => {
  return (num1 + num2) / 2
}

console.log(calculateAverage())

// Rest Param dynamic version
const calculateAverageRestParam = (thing, ...numbers) => {
  let sum = 0
  numbers.forEach((num) => sum += num)
  const average = sum / numbers.length
  return `average ${thing }is ${average}`
}

let value = calculateAverageRestParam('grade', 12, 22, 75, 68)
console.log(value)