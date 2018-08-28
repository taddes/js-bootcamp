const data = {
  locations: [],
  get location() {
    return this._location
  },
  set location(value) {
    this._location = value.trim()
    this.locations.push(this._location)
  }
}

//Code that uses the data object
data.location = '  Charlotte     ' 
data.location = 'New York'

console.log(data)