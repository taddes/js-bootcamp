const square = (x) =>  x*x


console.log(square(5))

const squareLong = (x) => {
  return x*x
}

const people = [{
  name:'taddes',
  age:29
}, {
  name: 'Sarah',
  age: 30
}, {
  name: 'Pepper',
  age: 5
}]

const result = people.filter(function(person) {
  return person.age < 10
})
console.log(result)

const resultArrow = people.filter((person) => {
  return person.age > 10
})
console.log(resultArrow)