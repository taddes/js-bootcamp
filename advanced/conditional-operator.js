const myAge = 20


// if(myAge >= 18) {
//   message = 'You can vote'
// } else {
//   'You cannot vote'
// }

// message = myAge >= 18 ? 'You can vote' : 'You cannot vote'

// console.log(message)

const showPage = () => {
  return 'showing page'
}

const showErrorPage = () => {
  return'showing error page'
}

let message = myAge >= 21 ? showPage() : showErrorPage()
console.log(message)

/* Challenge 
Print team size 3 if less than or equal to 4
Print Too many people otherwise
*/
const team = ['Tyler', 'Porter', 'Joe', 'Dustin', 'Kark']

const result = team.length <= 4 ?  `Team size ${team.length}` : `Too many people`
console.log(result)
