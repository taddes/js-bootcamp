// Prototypal Inheritance
// myPerson --> Person.prototype --> Object.prototype --> null

class PersonClass {
  constructor(firstName, lastName, age, likes = []) {
    this.firstName = firstName
    this.lastName = lastName,
    this.age = age,
    this.likes = likes
  }
  getBio() {
    let bio = `${this.firstName} is ${this.age}.`

    this.likes.forEach((like) => {
      bio = bio + ` ${this.firstName} likes ${like}.`
    })
  return bio  
  }
  set fullName(fullName) {
    const names = fullName.split(' ')
    this.firstName = names[0]
    this.lastName = names[1]
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

class Employee extends PersonClass{
  constructor(firstName, lastName, age, position, likes) {
    super(firstName, lastName, age, likes)
    this.position = position

  }
  getBio() {
    return `${this.firstName} ${this.lastName} is a ${this.position}`
  }
  getYearsLeft() {
    return 65 - this.age
  }

}


// const myPerson = new Employee('Pepper', 'Markle-Korris', 5, 'Panther', ['Kooks', 'Mouse units'])
// console.log(myPerson.getBio())
// console.log(myPerson)
// console.log(myPerson.getYearsLeft())

class Student extends PersonClass {
  constructor(firstName, lastName, age, grade, likes) {
    super(firstName, lastName, age, likes)
    this.grade = grade
  }
  getBio() {
    /* Ternary Op
    const status = this.grade >= 70 ? 'passing' : 'failing'
    return `Student is ${status} with a grade of ${this.grade}`

    */
    if(this.grade > 70) {
      return `Student is passing with a grade of ${this.grade}`
    } else {
      return `Student is failing with a grade of ${this.grade}`
    }
  }
  updateGrade(change) {
    this.grade = this.grade + change
  }
}

const myStudent = new Student('Derk', 'Fuckhead', 28, 88, [])
myStudent.fullName = 'Tyrone Jakoff'
console.log(myStudent)
console.log(myStudent.getBio())
myStudent.updateGrade(-60)
console.log(myStudent.getBio())

const me = new Employee('Thaddeus', 'Forthwith', 42, 'Thespian', [])
console.log(me.getBio())
console.log(me.fullName)

/* const Person = function (firstName, lastName, age, likes = []) {
  this.firstName = firstName
  this.lastName = lastName,
  this.age = age,
  this.likes = likes
}

Person.prototype.getBio = function () {
  let bio = `${this.firstName} is ${this.age}.`

    this.likes.forEach((like) => {
      bio = bio + ` ${this.firstName} likes ${like} .`
    })
  return bio
}

Person.prototype.setName = function(fullName) {
  const names = fullName.split(' ')
  this.firstName = names[0]
  this.lastName = names[1]
}

const me = new Person('Taddes', 'Korris', 29, ['cats', 'tea', 'star trek'])

me.getBio = function() {
  return 'this is fake'
}


me.setName('Todd korris')
console.log(me.getBio())


const person2 = new Person('Sarah', 'Markle', 30)
console.log(person2.getBio()) */