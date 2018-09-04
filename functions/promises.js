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