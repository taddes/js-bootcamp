const person = {
  name: 'Tad',
  greet: function() { console.log(`what up, ${this.name}`) }
}
person.greet()

const cat = {
  name: 'Pepper'
}
cat.greet = person.greet
cat.greet()


const greet = person.greet.bind()

greet()