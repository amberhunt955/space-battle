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
      console.log(`${this.name} strikes ${enemyShip.name} with a firepower of ${this.firepower}!`);
      console.log(`Nice one! You have caused -${damage} points in damage.`);
      enemyShip.hull -= damage;
      console.log(`${enemyShip.name} hull: ${enemyShip.hull}`);

      // If the attacker accuracy is less than a random generated number
    } else {
      console.log("Damn! You missed.");
    }
  }

  retreat() {
    gameInPlay = false;
    console.log("You have left the game.");
  }
}

//* Create 6 alien spaceship objects (add to alienFleet) and a player object
//* For now - we will focus on just one

const alienShip1 = new Spaceship("Alien Spaceship 1", true);
const alienShip2 = new Spaceship("Alien Spaceship 2", true);
const alienShip3 = new Spaceship("Alien Spaceship 3", true);
const alienShip4 = new Spaceship("Alien Spaceship 4", true);
const alienShip5 = new Spaceship("Alien Spaceship 5", true);
const alienShip6 = new Spaceship("Alien Spaceship 6", true);
const ussAssembly = new Spaceship("USS Assembly", false);

const alienFleet = [
  alienShip1,
  alienShip2,
  alienShip3,
  alienShip4,
  alienShip5,
  alienShip6,
];

//* gameInPlay status and User Interface

// Initialize a gameInPlay variable to false
let gameInPlay = false;

// // Designate the container div as the game screen
// const gameScreen = document.querySelector("#container");

// // Create a p element to contain game play text
// let gameText = document.createElement("p");

// Designate the #start-button to start the game when clicked
const startButton = document.querySelector("#start-button");
startButton.addEventListener("click", playGame);

// // Create a button to move forward in the game
// const beginBattle = document.createElement("button");
// beginBattle.textContent = "Begin the battle!";
// beginBattle.addEventListener("click", battleShip(alienShip1));
// console.dir(beginBattle);

// // Create a button for the user to attack 
// const yourMove = document.createElement("button");
// yourMove.textContent = "Your Move!";
// yourMove.addEventListener("click", ussAssembly.attack(alienShip1));

// // Create a button for the alien to attack
// const alienAttack = document.createElement("button");
// alienAttack.textContent = "Prepare for counter attack...";
// alienAttack.addEventListener("click", alienShip1.attack(ussAssembly));

//* Start the game!

function playGame() {
  gameInPlay = true;
  // gameScreen.removeChild(startButton);
  
  // gameText.textContent =
  //   "Earth has been attacked by a horde of aliens! You are the captain of the USS Assembly, on a mission to destroy every last alien ship. Battle the aliens as you try to destroy them with your lasers.";
  // gameScreen.appendChild(gameText);
  // gameScreen.appendChild(beginBattle);

  battleShip(alienFleet[0]);

}

function battleShip(enemyShip) {
    // gameScreen.removeChild(beginBattle);
    // gameText = "It's your move! Shoot your lasers, quick!";
    ussAssembly.attack(enemyShip);

    if (enemyShip.hull <= 0) {
      console.log("You have defeated this spaceship!");
      alienFleet.shift();
      console.log(alienFleet);
    } else {
      console.log("Prepare for a counter attack!");
    }
}
