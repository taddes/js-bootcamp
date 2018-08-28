let name = 'Taddes Korris'

// length property
let myNameLength = name.length
console.log(myNameLength)

// convert to upper case. Is a method, but takes no arguments
let upperCased = name.toUpperCase()
console.log(upperCased)

// convert to lower case. Is a method, but takes no arguments
let lowerCased = name.toLowerCase()
console.log(lowerCased)

// Includes method.  Search if something is included, returns boolean
// First argument is required, second, which is an array is not
// Good for password checking to avoid obvious words
let password = 'abc123password'
console.log(password.includes('password'))

// Trim Method - removes excess whitespace. Method, takes no args
let untrimmedName = '   Taddes Korris  '
let trimmedName = untrimmedName.trim()
console.log(trimmedName)

// Challenge
// isValidPassword
// Return true if length is > 8 and doesn't contain word 'password'

let isValidPassword = function(password) {
  if(password.length > 8 && !password.includes('password')) {
    return `Password: '${password}', is valid`
  } else {
    return `Password: '${password}', is invalid`
  }
}

// Alternative, returns boolean
let isValidPasswordTwo = function(password) {
  return password.length > 8 && !password.includes('password')
}

console.log(isValidPassword('liz'))
console.log(isValidPasswordTwo('peanutpassword'))