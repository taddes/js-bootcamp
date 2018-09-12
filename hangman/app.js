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

getPuzzle('2').then((puzzle) => {
  console.log(puzzle);
}).catch((err) => {
  console.log(`Error: ${err}`)
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
// const request = new XMLHttpRequest();

// request.addEventListener('readystatechange', (e) => {
//   // Ensure response text only used when state and status correct
//   if(e.target.readyState === 4 && e.target.status === 200) {
//     const data = JSON.parse(e.target.responseText)
//     console.log(e.target.status);
//     console.log(data);
//   } else if (e.target.readyState === 4) {
//     console.log('An error has occured')
//   }

// })

// request.open('GET', 'http://puzzle.mead.io/puzzle')
// request.send();

// Make request for all countries
// Parse the responseText to get the array of objects
// Find your country object by its country code (alpha2Code prop)
// Print full country name data


// MY SOLUTION


// request.open('GET', 'https://restcountries.eu/rest/v2/all');
// request.send();

// request.addEventListener('readystatechange', (e) => {
//   // console.log(e.target.responseText)
//   if(e.target.readyState === 4 && e.target.status === 200) {
//     const countryData = JSON.parse(e.target.responseText)
//     console.log(countryData[0])
//     for(let i = 0; i < countryData.length; i++) {
//       if(countryData[i].alpha2Code === "AF") {
//         let countryInfo = {};
//         countryInfo.name = countryData[i].name;
//         countryInfo.capital = countryData[i].capital;
//         countryInfo.population = countryData[i].population;
//         countryInfo.languages = [];
//         countryData[i].languages.forEach(function(language) {
//           console.log(language.name);
//           countryInfo.languages.push(language.name)
//         });
//         // countryInfo.languages = countryData[i].languages;
//         console.log(countryInfo)
//         return countryInfo;
//       }
//     }
//   } else {
//     console.log('ERROR')
//     return 'Error. Invalid request'
//   }
// })

// // Alternate solution
// const countryCode = "US";
// const countryRequest = new XMLHttpRequest();

// countryRequest.addEventListener('readystatechange', (e) => {
//   if(e.target.readyState === 4 && e.target.status === 200) {
//     const data = JSON.parse(e.target.responseText);
//     const country = data.find((country) => country.alpha2Code === countryCode);
//     console.log(country.name)
//   } else if (e.target.readyState === 4) {
//     console.log('Cannot fetch data');
//   }
// })

// countryRequest.open('GET', 'https://restcountries.eu/rest/v2/all');
// countryRequest.send();