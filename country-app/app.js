

let request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.eu/rest/v2/all');
request.send();

request.addEventListener('readystatechange', (e) => {
  // console.log(e.target.responseText)
  if(e.target.readyState === 4 && e.target.status === 200) {
    const countryData = JSON.parse(e.target.responseText)
    console.log(countryData[0])
    for(let i = 0; i < countryData.length; i++) {
      if(countryData[i].alpha2Code === "AF") {
        let countryInfo = {};
        countryInfo.name = countryData[i].name;
        countryInfo.capital = countryData[i].capital;
        countryInfo.population = countryData[i].population;
        countryInfo.languages = [];
        countryData[i].languages.forEach(function(language) {
          console.log(language.name);
          countryInfo.languages.push(language.name)
        });
        // countryInfo.languages = countryData[i].languages;
        console.log(countryInfo)
        return countryInfo;
      }
    }
  } else {
    console.log('ERROR')
    return 'Error. Invalid request'
  }
})


// // Alternate solution
// const countryCode = "US";
// const countryRequest = new XMLHttpRequest();

// countryRequest.addEventListener('readystatechange', (e) => {
//   if(e.target.readyState === 4 && e.target.status === 200) {
//     const data = JSON.parse(e.target.responseText);
//     const country = data.find((country) => country.alpha2Code === countryCode);
//     console.log(country.name)
//   } else if (e.target.readyState === 4) {
//     console.log('Cannot fetch data');
//   }
// })

// countryRequest.open('GET', 'https://restcountries.eu/rest/v2/all');
// countryRequest.send();



// CHALLENGE FOR ASYNC FUNCTION AND CALLBACKS

/* 
  1. Create new funciton for getting country details
  2. Call it with two arguments: country code, callback
  3. Make the HTTP request and call the callback with country info
  4. Use callback to print the country name
*/

const getCountry = (countryCode, callback) => {
  const countryRequest = new XMLHttpRequest();
  countryRequest.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText)
      const country = data.find((country) => country.alpha2Code === countryCode)
      callback(undefined, country)
    } else if(e.target.readyState === 4) {
      callback('Unable to fetch data');
    }
  })
}

getCountryFetch('CA').then((country) => {
  console.log(country.name)
}).catch((err) => {
  console.log('Error',err)
})
// Promise Version

// getCountryPromise('CA').then((countryInfo) => {
//   console.log(countryInfo)
//   }, (err) => {
//     console.log(`Error ${err}`)
//   });

getCountryAsyncAwait('CH').then((country) => {
  console.log(country)
})