// Grade calculator function
// Student's score, total possible score

const gradeCalc = (studentScore, totalScore) => {
  if(typeof totalScore === 'number' && typeof studentScore === 'number' ) {
  const percent = (studentScore / totalScore) * 100
  let letterGrade =''

  if(percent >= 90) {
    letterGrade = 'A'
  } else if (percent >= 80) {
    letterGrade = 'B'
  } else if (percent >= 70) {
    letterGrade = 'C'
  } else if (percent >= 60) {
    letterGrade = 'D'
  } else {
    letterGrade = 'F'
  }

  return `Student got a ${letterGrade} with ${percent}%`
  } else {
    throw Error('Please provide number only')
  }
}

try {
  let result = gradeCalc(34, 55)
  console.log(result)
} catch(e) {
  console.log(e.message)
}
