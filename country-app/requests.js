const getCountryPromise = (countryCode) => {
  return new Promise((resolve, reject) => {

    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', (e) => {
      // console.log(e.target.responseText)
      if(e.target.readyState === 4 && e.target.status === 200) {
        const countryData = JSON.parse(e.target.responseText)
        console.log(countryData[0])
        for(let i = 0; i < countryData.length; i++) {
          if(countryData[i].alpha2Code === countryCode) {
            let countryInfo = {};
            countryInfo.name = countryData[i].name;
            countryInfo.capital = countryData[i].capital;
            countryInfo.population = countryData[i].population;
            countryInfo.languages = [];
            countryData[i].languages.forEach(function(language) {
              console.log(language.name);
              countryInfo.languages.push(language.name)
            });
            resolve(countryInfo)
          }
        }
      } else if(e.target.readyState ===4) {
        reject(`Error: ${err}`)
      }
    })
    request.open('GET', 'https://restcountries.eu/rest/v2/all');
    request.send();
  })

}


// FETCH VERSION

const getCountryFetch = (countryCode) => {
  return fetch('https://restcountries.eu/rest/v2/all').then((response) => {
    if(response.status === 200) {
      return response.json();
    } else {
      throw new Error('Unable to fetch data')
    }
  }).then((data) => {
    return data.find((country) => country.alpha2Code === countryCode)
  })
}

// Async Await Version

const getCountryAsyncAwait = async (countryCode) => {
  const response = await fetch('https://restcountries.eu/rest/v2/all')

    if (response.status === 200) {
      const data = await response.json()
      return data.find((country) => country.alpha2Code === countryCode)
    } else {
      throw new Error('SHYT')
    }
  }

