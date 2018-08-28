let myBook = {
  title : '1984',
  author : 'George Orwell',
  pageCount: 326
}

let otherBook = {
  title : 'Eating Animals',
  author : 'Jonathan Safran Foer',
  pageCount: 298
}

let getSummary = function (book) {
  return {
    summary: `${book.title} by ${book.author}`,
    pageCountSummary: `${book.title} is ${book.pageCount} pages long`
  }

}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.summary)
console.log(otherBookSummary.pageCountSummary)

// Challege - create a function that creates a summary
// Create Function - take Farenheit in - return object with Celcius, Kelvin, and original Farenheit

let conversionObject = function(farenheit) {
  return {
    celcius: (farenheit - 32) * 5 / 9,
    kelvin: (farenheit + 459.67) * 5 / 9,
    farenheit: farenheit
  }
}

let converted = conversionObject(32)
console.log(converted)