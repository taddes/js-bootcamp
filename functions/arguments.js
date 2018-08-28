// Multiple Arguments
let add = function(a, b, c) {
  return a + b + c
}

let result = add(5, 10, 15)
console.log(`Addition result: ${result}`)

// Default Arguments
let getScoreText = function(name ='Anonymous', score = 0) {
  return 'Name: ' + name + ' Score: ' + score
}

let scoreText = getScoreText('Taddes', 77)
console.log(scoreText)

// Challenge Area
console.log('========TIP CALCULATOR=============')
// total, tipPercent .2

let tipCalculator = function(total, tipPercent = 0.2) {
  let percent = tipPercent * 100
  let tip = total * tipPercent
  return `a ${percent}% tip on $${total} would be $${tip} `
}

let calculated = tipCalculator(58.99, .18)
console.log(calculated)