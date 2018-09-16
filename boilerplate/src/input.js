const name = 'Taddes'
console.log(name)

class Hangman {
  myMethod() {
    return `Hey there ${name}`
  }
}

const hangman = new Hangman()
console.log(hangman.myMethod())