// Let based variabes are mutable

let isRaining = true

isRaining = false

console.log(isRaining)

// Const-based variable cannot be reassigned after declared
// Things you write to, like arrays or variables that can change should not be const!
const person = {
  name: 'Taddes'
}

person.age = 29

console.log(person)