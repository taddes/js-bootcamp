let num = 3.14187465

// toFixed method: sets the fixed number of decimal points
// Takes in single argument: how many decimals you want to keep
console.log(num.toFixed(2))

// Global JS Math object
console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

// Formula to create a random number between a range of two numbers
// random number = Math.floor(Math.random() * (max - min + 1))
let min = 10
let max = 20
let randomNum = Math.random()
console.log(randomNum)
let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
console.log(randomNumber)

// Challenge
// Guessing Game Function
// Take in a guess, generate a random number and see if they match
// Range between 1 - 5

let guessingGame = function(guess) {
  let randomGameNumber = Math.floor(Math.random() * 5) + 1
  console.log(randomGameNumber)
  if(guess <= 5) {
    return true
  } else {
    return false
  }
}

// Another guess game version
// Guess specific random number
let guessingGameTwo = function(guess) {
  let minimum = 5
  let maximum = 17
  let randoNum = Math.floor(Math.random() * (max - min + 1)) + min

  return guess === randomNum
}

console.log(guessingGame(7))
console.log(guessingGameTwo(7))