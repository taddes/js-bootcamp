//HTTP -Hypertext Transfer Protocol

//Request - what we want to do
//Response - what was done

// Primitive Value

/* 
Object: myObject --> Object.prototype --> null
Array: myArray --> Array.prototype --> Object.prototype --> null
Function: myFunc --> Function.prototype --> Object.prototype
String: myString --> String.prototype -- Object.prototype --> null
Number: myNumber --> Number.prototype -- Object.prototype --> null
Boolean: myBoolean --> Boolean.prototype -- Object.prototype --> null
*/

const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses') 
const game1 = new Hangman('Tiger', 3)

puzzleEl.textContent = game1.getPuzzle()
guessesEl.textContent = game1.getStatusMessage()


window.addEventListener('keypress', function(e) {
const guess = String.fromCharCode(e.charCode)
game1.makeGuess(guess)
puzzleEl.textContent = game1.getPuzzle()
guessesEl.textContent = game1.getStatusMessage()

})

/* Getter/Setter Version


puzzleEl.textContent = game1.puzzle
guessesEl.textContent = game1.statusMessage

window.addEventListener('keypress', function(e) {
const guess = String.fromCharCode(e.charCode)
game1.makeGuess(guess)
puzzleEl.textContent = game1.puzzle
guessesEl.textContent = game1.statusMessage

})
*/

// Making HTTP requests
// Via browser constructor func
const request = new XMLHttpRequest();

request.addEventListener('readystatechange', (e) => {
  if(e.target.readyState === 4) {
    const data = JSON.parse(e.target.responseText)
    console.log(data);
  }

})

request.open('GET', 'http://puzzle.mead.io/puzzle')
request.send();
