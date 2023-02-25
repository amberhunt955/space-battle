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
      // Determine damage to the enemy ship hull
      let damage = 0;
      switch (this.firepower) {
        case 2:
          damage = 1;
          break;
        case 3:
          damage = 2;
          break;
        case 4:
          damage = 3;
          break;
        case 5:
          damage = 4;
          break;
      }

      // Deduct damage from the enemy hull
      console.log(
        `%c${this.name} strikes ${enemyShip.name} with a firepower of ${this.firepower}!`,
        `color: red;`
      );
      console.log(`-${damage} points in damage.`);
      enemyShip.hull -= damage;
      console.log(`${enemyShip.name} hull: ${enemyShip.hull}`);

      // If the attacker accuracy is less than a random generated number
    } else {
      console.log(`${this.name} has missed!`);
    }
  }

  retreat() {
    console.log("%cYou have left the game. The game is over.", "color: green;");
    gameScreen.appendChild(newGame);
  }
}

//* gameInPlay status and User Interface

// Designate the container div as the game screen
const gameScreen = document.querySelector("#container");

// // Create a p element to contain game play text
// let gameText = document.createElement("p");

// Designate the #start-button to start the game when clicked
const startButton = document.querySelector("#start-button");
startButton.addEventListener("click", playGame);

// Start a new game button
const newGame = document.createElement("button");
newGame.textContent = "Start a new game";
newGame.addEventListener("click", gameOver);

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

  if (alienFleet.length !== 0 && ussAssembly.hull > 0) {
    battle(ussAssembly, alienFleet[0]);
  } else if (alienFleet.length === 0) {
    console.log(`%cThe game is over. You have won!`, `color: green;`);
    gameScreen.appendChild(newGame);
  } else {
    console.log(`%cThe game is over. Aliens have won!`, `color: green;`);
    gameScreen.appendChild(newGame);
  }

  function battle(playerShip, enemyShip) {
    let continueGame;
    playerShip.attack(enemyShip);

    if (enemyShip.hull <= 0) {
      console.log("You have defeated this spaceship!");
      alienFleet.shift();
      console.log(alienFleet);
      continueGame = confirm("Do you want to continue?");
      if (!continueGame) {
        playerShip.retreat();
      }
    } else {
      console.log("Prepare for a counter attack!");
      enemyShip.attack(playerShip);
    }
  }
}

function gameOver() {
  console.clear();
  gameScreen.removeChild(newGame);
}
