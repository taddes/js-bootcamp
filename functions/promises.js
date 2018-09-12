// PROMISES

// Callback example
const getDataCallback = (callback) => {
  // Simulated Delay
  setTimeout(() => {
    callback(undefined, 'THIS IS THE DATA')
  }, 2000);
    
}

getDataCallback((err, data) => {
  if(err) {
    console.log(err)

  } else {
    console.log(data)
  }
});

// Promise
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('KHARQ Promise Data, P\'tagh');
  }, 2000)
});

myPromise.then((data) => {
  console.log(data)
}, (err) => {
  console.log(err);
});

// Promise 2.0 - argument option for data
const getDataPromise = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`This is the success data: ${data}`)
      
    }, 2000)
  })

}

const testPromise = getDataPromise("This be the passed in data")

testPromise.then((data) => {
  console.log(data)
}, (err) => {
  console.log(err);
});


// PROMISE .then

const getDataPromiseChaining = (num) => new Promise((resolve, reject) => {
  setTimeout(() => {
    typeof num === 'number' ? resolve(num * 2) : reject('number must be provided')
  }, 2000)
})

// Runs the funciton twice
getDataPromiseChaining(2).then((data) => {
  getDataPromiseChaining(data).then((data) => {
    console.log(`Promise data ${data}`)
  })
  }, (err) => {
    console.log(err)
  })

  // PROMISE CHAINING
  getDataPromiseChaining(10).then((data) => {
    return getDataPromiseChaining(data)
  }).then((data) => {
    return getDataPromiseChaining(data)
  }).then((data) => {
    console.log(data)
  }).catch((err) => {
    console.log(err)
  })