// Global scope (convertFahrenheit, farenheitToCelciusTest, celciusToFarenheitTest)
  // Local scope (farenheit, celcius)
    // Local scope (isFreezing)

let convertFarenheitToCelcius = function(farenheit) {
  let celcius = (farenheit - 32)* (5/9);
  
    if (celcius <= 0) {
      let isFreezing = true
    }
    return celcius;
}

// Call Function
let farenheitToCelciusTest = convertFarenheitToCelcius(32);

// Print Converted values
console.log(`Converted to Celcius ${farenheitToCelciusTest}`);

console.log('========================')

let convertCelciusToFarenheit = function(celcius) {
  let farenheit = (celcius * 1.8) + 32;
  return farenheit;
}

let celciusToFarenheitTest = convertCelciusToFarenheit(32);
console.log(`Converted to Farenheit ${celciusToFarenheitTest}`)