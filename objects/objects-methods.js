let restaurant = {
  name: 'Fern',
  guestCapacity: 68,
  guestCount: 0,
  checkAvailability: function(partySize) {
    let seatsAvailable = this.guestCapacity - this.guestCount
    return partySize <= seatsAvailable
  },
  seatParty: function(partySize) {
    let seatsAvailable = this.guestCapacity - this.guestCount
    console.log(seatsAvailable)
    if(partySize > seatsAvailable) {
      return `Your party cannot yet be seated. A total of ${this.guestCount} guests are seated`
    } else {
      this.partySize += this.guestCount
      return `Your party can be seated`
    }
  },
  removeParty: function(partySize) {
    let seatsAvailable = this.guestCapacity + this.guestCount
    return `Party removed. A total of ${this.guestCapacity} seats are open`
  
  }
}

restaurant.seatParty(89)
console.log(restaurant.checkAvailability(89))
// let status = restaurant.checkAvailability(40)
// console.log(status)