// Function - input: code to run - output: result of run code

let greetUser = function(person) {
  console.log(`what up`, person);
}
greetUser('Taddes');
greetUser('Sarah');
greetUser('Pep');

console.log('========================')

let square = function(number) {
  let result = number*number;
  console.log(`result`, result);
}
square(5)

console.log('========================')

let returnSquare = function(number) {
  let result = number*number;
  return result;
}
var math = returnSquare(6)
console.log(math);

// Challenge
// convertFarenheitToCelcius
console.log('========================')
console.log('=======Challenge Area====')

let convertFarenheitToCelcius = function(farenheit) {
  let convertedValue = (farenheit - 32)* (5/9);
  return convertedValue;
}

// Call Function
let convertTest = convertFarenheitToCelcius(32);

// Print Converted values
console.log(`Converted to Celcius ${convertTest}`);

console.log('========================')

let convertCelciusToFarenheit = function(celcius) {
  let convertedValue = (celcius * 1.8) + 32;
  return convertedValue;
}

let celciusToFarenheitTest = convertCelciusToFarenheit(32);
console.log(`Converted to Farenheit ${celciusToFarenheitTest}`)