const getPuzzle = (wordCount) => {
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
    if(response.status === 200) {
      return response.json()
    } else {
      throw new Error('cannot fetch the puzzle')
    }
  }).then((data) => {
    return data.puzzle
  }).catch((err) => {
    console.log(err)
  })
}






// const getPuzzle = (wordCount) => {
//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();
//     request.addEventListener('readystatechange', (e) => {
  
//       // Ensure response text only used when state and status correct
//       if(e.target.readyState === 4 && e.target.status === 200) {
//         const data = JSON.parse(e.target.responseText)
//         console.log(e.target.status);
//         console.log(data);
//         resolve(data.puzzle);
//       } else if (e.target.readyState === 4) {
//         reject('An error is up')
//       }
//   })
  
//     request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
//     request.send();
//   })

// }

// Synchronous version (NOT IDEAL)

// const getPuzzleSync = () => {
//   const request = new XMLHttpRequest();
//   request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3', false);
//   request.send();

//     if(request.readyState === 4 && request.status === 200) {
//       const data = JSON.parse(request.responseText)
//      return data.puzzle;
//     } else if (request.readyState === 4) {
//       throw new Error('MALFUNCTION')
//     }

// }