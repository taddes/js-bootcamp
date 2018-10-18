
console.log('utilities.js')

function add(a, b) {
  return a+b;
}

const name = 'Pepper'
console.log('from da code')


const square = (x) => x * x

export { add, name, square as default}