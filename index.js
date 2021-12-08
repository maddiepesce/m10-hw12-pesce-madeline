class Car {
    constructor (make, model, year) {
        this.make = make
        this.model = model
        this.year = year
    }
}

honk () {
    console.log ('BEEP BEEP!')
}

performMaintenance () {
    setTimeout (function() {
        console.log ('maintenance complete')
    } , 3000)
}

var mySweetRide = new Car ('Pontiac', 'Fiero', 1988)

console.log (honk)

honk()

console.log (performMaintenance)

performMaintenance()