let house = {
  bedrooms: 3,
  bathrooms: 2,
  yearsOld: 7
}

let newHouse = {
  ...house
}
newHouse.yearsOld = 88;

console.log({house})
console.log({newHouse})

let person = {
  name: 'Sarah',
  age: 30,
  instrument: 'cello'
}

let newPerson = {
  ...person,
  name: 'Taddes',
  instrument: 'bass'

}

console.log({person})
console.log({newPerson})