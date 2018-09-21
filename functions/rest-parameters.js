const calculateAverage = (numOne, numTwo) => {
  return (numOne + numTwo) / 2
}

console.log(calculateAverage(0, 100))

// Rest parameter - dynamic array handling
// Works regardless of the number of args you pass in!
const calculateAverageRest = (...numbers) => {
  let sum = 0;
  numbers.forEach((num) => sum += num);
  return sum / numbers.length;
}

console.log(calculateAverageRest(45, 66, 46, 78));

// To grab subset of arguments
const calculateAverageRestSubset = (thing, ...numbers) => {
  let sum = 0;
  numbers.forEach((num) => sum += num);
  let average =  sum / numbers.length;
  return `The average ${thing} is ${average}`;
}

console.log(calculateAverageRestSubset('Age', 65, 54, 67, 87));

// print Team function that takes team name, coach and players
const printTeam = (teamName, coach, ...team) => {
  let teamMems = ''
  team.forEach((teamster) => teamMems += teamster + ', ');
  return `The Coach of ${teamName} is ${coach}, supervising the foolery of the ${teamMems}`

}

console.log(printTeam('Liberty', 'Cyrus Higginbotham ClapDick III', 'Harper Shart', 'Dingle Clapp', 'harb Binghamton', 'Roninald Gladcrapp'))

// print Team function that takes team name, coach and players
const printTeam2 = (teamName, coach, ...team) => {
  let teamMems = team.join(', ');
  return `The Coach of ${teamName} is ${coach}, supervising the foolery of the ${teamMems}`

}

console.log(printTeam2('Liberty', 'Cyrus Higginbotham ClapDick III', 'Harper Shart', 'Dingle Clapp', 'harb Binghamton', 'Roninald Gladcrapp'))