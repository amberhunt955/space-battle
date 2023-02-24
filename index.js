//* Create the Spaceship class
class Spaceship {
  constructor(spaceshipName, isAlien) {
    // Create alien spaceships
    if (isAlien) {
        this.spaceshipName = spaceshipName;
        this.hull = Math.floor(Math.random() * 4) + 3;
        this.firepower = Math.floor(Math.random() * 3) + 2;
        this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10;
    // Create player spaceship
    } else {
        this.spaceshipName = spaceshipName;
        this.hull = 20;
        this.firepower = 5;
        this.accuracy = 0.7;
    }
  }

  attack(enemyShip) {
    
  }

}

//* Create 6 alien spaceship objects and a player object
const alienShip1 = new Spaceship("Alien Spaceship 1", true);
const alienShip2 = new Spaceship("Alien Spaceship 2", true);
const alienShip3 = new Spaceship("Alien Spaceship 3", true);
const alienShip4 = new Spaceship("Alien Spaceship 4", true);
const alienShip5 = new Spaceship("Alien Spaceship 5", true);
const alienShip6 = new Spaceship("Alien Spaceship 6", true);
const ussAssembly = new Spaceship("USS Assembly", false)

console.log(alienShip1);
console.log(alienShip2);
console.log(alienShip3);
console.log(alienShip4);
console.log(alienShip5);
console.log(alienShip6);
console.log(ussAssembly);

//* Playing the game! 

// Initialize a gameStart variable to false
let gameStart = false;

// Create a button to start the game when clicked
const startButton = document.querySelector("#start-button");
startButton.addEventListener("click", playGame);

// Create the playGame function
function playGame() {
  // change gameStart to true
  gameStart = true;

  // Get the body element (to append and remove children later)
  const body = document.querySelector("body");

  // Create an intro to be displayed on the page
  const intro = document.createElement("p");
  intro.textContent =
    "Earth has been attacked by a horde of aliens! You are the captain of the USS Assembly, on a mission to destroy every last alien ship. Battle the aliens as you try to destroy them with your lasers.";

  // Create a next button to move forward in the game
  const yourMove = document.createElement("button");
  yourMove.classList.add("your-move");
  yourMove.textContent = "Your Move!"

  body.removeChild(startButton);
  body.appendChild(intro);
  body.appendChild(yourMove);
}


