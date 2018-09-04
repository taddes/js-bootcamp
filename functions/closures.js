// BASIC CLOSURE EXAMPLE 
const myFunction = () => {
  const message = 'This is a message'
  const printMessage = () => {
    console.log({message});
  }
  return printMessage;
}

const myPrintMessage = myFunction();
myPrintMessage();

//

const createCounter = () => {
  let count = 0;

  return {
    increment() {
      count++;
    },
    decrement() {
      count--;
    },
    get() {
      return count;
    }
  }
}

const counter = createCounter();
counter.increment();
counter.increment();
counter.increment();
counter.decrement();

counter.get();

console.log(counter.get())

// Adder
const createAdder = (a) => {
  return (b) => {
    return a + b;
  }
}

const add10 = createAdder(10);
console.log(add10(-2))
console.log(add10(20))

// Tipper

/* 
  1. create createTipper which takes in base tip (20% .2)
  2. set up to return a function thtat takes in bill amount
  3. call createTipper to generate a few functions for different percentages
  4. use generated functions to calc tips and print them
*/

const createTipper = (baseTip) => {
  return (billAmount) => {
    return billAmount * baseTip;
  }
}

const tip20 = createTipper(.2);
const tip30 = createTipper(.3)

console.log(tip20(100));
console.log(tip30(250))
