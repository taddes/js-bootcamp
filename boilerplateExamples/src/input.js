const name = 'Taddes'
console.log(name)

class Hangman {
  myMethod() {
    return `Hey there ${name}`
  }
}

const hangman = new Hangman()
console.log(hangman.myMethod())

const calculateAverage = (numOne, numTwo) => {
  return (numOne + numTwo) / 2
}

console.log(calculateAverage(0, 100))

// Rest parameter - dynamic array handling
// Works regardless of the number of args you pass in!
const calculateAverageRest = (...numbers) => {
  let sum = 0;
  numbers.forEach((num) => sum += num);
  return sum / numbers.length;
}

console.log(calculateAverageRest(45, 66, 46, 78));

// To grab subset of arguments
const calculateAverageRestSubset = (thing, ...numbers) => {
  let sum = 0;
  numbers.forEach((num) => sum += num);
  let average =  sum / numbers.length;
  return `The average ${thing} is ${average}`;
}

console.log(calculateAverageRestSubset('Age', 65, 54, 67, 87));

// 