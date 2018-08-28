var person = {
  firstName: 'Tad',
  lastName: 'Korris',
  getFullName: function() {
    return this.firstName + ' ' + this.lastName
  }
}

let taddes = Object.create(person)
console.log(person)

let tharp = []
console.log(typeof tharp)