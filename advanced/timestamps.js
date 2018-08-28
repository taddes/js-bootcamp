
const now = new Date()
const timeStamp = now.getTime()

const myDate = new Date(timeStamp)
// console.log(myDate.getMonth())


// console.log(`Year ${now.getFullYear()}`)
// console.log(`Month ${now.getMonth()}`)
// console.log(`Day ${now.getDate()}`)

// console.log(`Hour ${now.getHours()}`)
// console.log(`Min ${now.getMinutes()}`)
// console.log(`Sec ${now.getSeconds()}`)

// Create Two dates in the past (use string for date)
const dateOne = new Date('December 7 1961')
const dateTwo = new Date('January 7 1841')


// Get Timestamps for both
const stampOne = dateOne.getTime()
console.log(stampOne)
const stampTwo = dateTwo.getTime()
console.log(stampTwo)

// Figure out which is first nad print its time (toString)

if(stampOne > stampTwo) {
  console.log('Date One first', dateOne.toString())
} else {
  console.log('Date two first', dateTwo.toString())
}