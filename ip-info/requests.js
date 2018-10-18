const getLocation = () => {
  return fetch('http://ipinfo.io/json?token=61319d95afa834').then((response) => {
    if(response.status === 200) {
      return response.json();
    } else {
      throw new Error('Unable to fetch location')
    }
  })
}


// Async Await Version

const getLocationAsyncAwait = async () => {
  const response = await fetch('http://ipinfo.io/json?token=61319d95afa834');
  if(response.status === 200) {
    console.log('success, mothafucka')
    return response.json()
  } else {
    throw new Error('Fuck yaself')
  }
}