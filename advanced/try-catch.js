const getTip = (amount) => {
  if(typeof(amount) === 'number') {
    return amount *.25
  } else {
    throw 'argument must be a number'
  }
}

try{
  const result = getTip(20)
  console.log(result)
} catch (err) {
  console.log('FAIL')
}

