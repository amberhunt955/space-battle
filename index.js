// Create the AlienSpaceship class
class AlienSpaceship {
    constructor(spaceshipName) {
        this.spaceshipName = spaceshipName;
        this.hull = Math.floor(Math.random()*4) + 3;
        this.firepower = Math.floor(Math.random()*3) + 2;
        this.accuracy = (Math.floor(Math.random()*3) + 6) / 10;
    }

    attack(spaceship) {

    }

}

// Create 6 alien spaceship objects
const alienShip1 = new AlienSpaceship("Alien Spaceship 1");
const alienShip2 = new AlienSpaceship("Alien Spaceship 2");
const alienShip3 = new AlienSpaceship("Alien Spaceship 3");
const alienShip4 = new AlienSpaceship("Alien Spaceship 4");
const alienShip5 = new AlienSpaceship("Alien Spaceship 5");
const alienShip6 = new AlienSpaceship("Alien Spaceship 6");

console.log(alienShip1);
console.log(alienShip2);
console.log(alienShip3);
console.log(alienShip4);
console.log(alienShip5);
console.log(alienShip6);

// Create the player spaceship object
const ussAssembly = {
    spaceshipName: "USS Assembly",
    hull: 20,
    firepower: 5,
    accuracy: 0.7,
    
    attack: function(spaceship) {

    }
}

console.log(ussAssembly);