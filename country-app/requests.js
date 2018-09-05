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