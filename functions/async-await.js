// Async Await

// Basic Promise version

const getDataPromise = (num) => new Promise((resolve, reject) => {
  setTimeout(() => {
    typeof num === 'number' ? resolve(num*200) : reject(` ${num} is not a fucking number!`)
  }, 2000)
});

getDataPromise(2).then((result) => {
  console.log(result)
}).catch((err) => {
  throw new Error('Aw fuck sakes')
})

// Async Await version

const processData = async () => {
  let data = await getDataPromise(2);
  console.log(data)
  data = await getDataPromise(4);
  return data;
}

processData().then((data) => {
  console.log('Data:', data)
}).catch((error) => {
  console.log(error)
})

