// Rest param style Original
// print Team function that takes team name, coach and players
const printTeam = (teamName, coach, ...team) => {
  let teamMems = ''
  team.forEach((teamster) => teamMems += teamster + ', ');
  return `The Coach of ${teamName} is ${coach}, supervising the foolery of the ${teamMems}`

}

console.log(printTeam('Liberty', 'Cyrus Higginbotham ClapDick III', 'Harper Shart', 'Dingle Clapp', 'harb Binghamton', 'Roninald Gladcrapp'))

// Case where incoming data not formatted for functoin
// Data from DB
const team = {
  name:'Liberty',
  coach: 'Cyrus Higginbotham ClapDick III',
  players: ['Harper Shart', 'Dingle Clapp', 'harb Binghamton', 'Roninald Gladcrapp']

}

console.log(printTeam(team.name, team.coach, ...team.players))

// Spread syntax to copy arr vals to another
// Makes it so you ASSIGN a new array, not reference the original array and mutate it
const cities = ['New York', 'Montreal', 'Edmonton', 'Charlotte'];
const citiesCopy = [...cities]

console.log({cities})
console.log({citiesCopy})

// To add on values




