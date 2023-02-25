//* Create the Spaceship class

class Spaceship {
    constructor(spaceshipName, isAlien) {
    // Create alien spaceships
    if (isAlien) {
        this.name = spaceshipName;
        this.hull = Math.floor(Math.random() * 4) + 3;
        this.firepower = Math.floor(Math.random() * 3) + 2;
        this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10;
    // Create player spaceship
    } else {
        this.name = spaceshipName;
        this.hull = 20;
        this.firepower = 5;
        this.accuracy = 0.7;
    }
  }

  attack(enemyShip) {
    // If the attacker accuracy is greater than a random generated number
    if (this.accuracy > Math.random()) {
        // Determine damage to the enemy ship hull with a switch statement
        let damage = 0;
        switch (this.firepower) {
            case 2:
                damage = 1;
            case 3:
                damage = 2;
            case 4:
                damage = 3;
            case 5:
                damage = 4;
        }

        // Deduct damage from the enemy hull
        console.log(`${damage} is damage`);
        enemyShip.hull -= damage;

        // Decide if enemy ship has been destroyed our not
        
        console.log(`${this.name} strikes ${enemyShip.name} with a firepower of ${this.firepower}! || ${enemyShip.name} hull: ${enemyShip.hull}`);

    // If the attacker accuracy is less than a random generated number
    } else {
        console.log("Damn! You missed.");
    }

  }

  retreat() {

  }

}

//* Create 6 alien spaceship objects (add to alienFleet) and a player object

const alienShip1 = new Spaceship("Alien Spaceship 1", true);
const alienShip2 = new Spaceship("Alien Spaceship 2", true);
const alienShip3 = new Spaceship("Alien Spaceship 3", true);
const alienShip4 = new Spaceship("Alien Spaceship 4", true);
const alienShip5 = new Spaceship("Alien Spaceship 5", true);
const alienShip6 = new Spaceship("Alien Spaceship 6", true);
const ussAssembly = new Spaceship("USS Assembly", false)

const alienFleet = [alienShip1, alienShip2, alienShip3, alienShip4, alienShip5, alienShip6]

// console.log(alienShip1);
// console.log(alienShip2);
// console.log(alienShip3);
// console.log(alienShip4);
// console.log(alienShip5);
// console.log(alienShip6);
// console.log(alienFleet);
// console.log(ussAssembly);

//* Playing the game! 

// Initialize a gameInPlay variable to false
let gameInPlay = false;

// Create a button to start the game when clicked
const startButton = document.querySelector("#start-button");
startButton.addEventListener("click", playGame);

// Create the playGame function
function playGame() {
  // change gameInPlay to true
  gameInPlay = true;

  // Get the container div element (to append and remove children later)
  const gameScreen = document.querySelector("#container");

  // Create an intro to be displayed on the page
  const intro = document.createElement("p");
  intro.textContent =
    "Earth has been attacked by a horde of aliens! You are the captain of the USS Assembly, on a mission to destroy every last alien ship. Battle the aliens as you try to destroy them with your lasers.";

  // Create a yourMove button to move forward in the game
  const yourMove = document.createElement("button");
  yourMove.classList.add("your-move");
  yourMove.textContent = "Your Move!"

  gameScreen.removeChild(startButton);
  gameScreen.appendChild(intro);
  gameScreen.appendChild(yourMove);

  console.log(alienShip1);
  console.log(ussAssembly);
  ussAssembly.attack(alienShip1);
  console.log(alienShip1);
  console.log(ussAssembly);

}

