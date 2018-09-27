getLocation().then((location) => {
  console.log(location)
  let parentDiv = document.createElement('div');
  parentDiv.setAttribute('id', 'parent');

  let header = document.createElement('h2')
  let list = document.createElement('ul');
  let listContents = document.createElement('li');

  header.textContent = location.city + ', ' + location.region;
  parentDiv.appendChild(header);
  document.body.appendChild(parentDiv)

  list.textContent = 'Latitude & Longitude:'
  parentDiv.appendChild(list)

  let latLong = location.loc.split(',');
 
  let lat = latLong[0];
  let lon = latLong[1];

  listContents.textContent = `Latitude ${lat}`;
  list.appendChild(listContents);

  let listContents2 = document.createElement('li')

  listContents2.textContent = `Longitude ${lon}`;
  list.appendChild(listContents2)



  
}).catch((err) => {
  console.log(err)
})

getLocationAsyncAwait().then((data) => {
  console.log(data)
}).catch((err) => {
  console.log(err)
})