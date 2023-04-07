//& ---------- GAME SET UP ----------

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
      console.log(
        `%c${this.name} strikes ${enemyShip.name} with a firepower of ${this.firepower}!`,
        `color: red;`
      );
      let damage = determineDamage(this.firepower);
      enemyShip.hull -= damage;
      console.log(`-${damage} points in damage.`);
      console.log(`${enemyShip.name} hull: ${enemyShip.hull}`);
      battleText.innerHTML += ` ${this.name} strikes ${enemyShip.name} with a firepower of ${this.firepower}, causing -${damage} points in damage!<br><br>${enemyShip.name} hull: ${enemyShip.hull}<br><br>${this.name} hull: ${this.hull}`
      // If the attacker accuracy is less than a random generated number
    } else {
      console.log(`${this.name} has missed!`);
      battleText.innerHTML += `${this.name} has missed!`
    }
  }

  retreatOrFight(answer) {
    if (!answer) {
      console.log(
        "%cYou have left the game. The game is over.",
        "color: green;"
      );
      gameText.innerHTML = `You have left the game. The game is over.`
      gameScreen.appendChild(newGame);
      gameScreen.removeChild(yourMove);
    } 
  }
}

//* Game screen and buttons

// Designate the container div as the game screen
const gameScreen = document.querySelector("#container");

// Designate the #start-button to start the game when clicked
const startButton = document.querySelector("#start-button");
startButton.addEventListener("click", function() {
  gameScreen.removeChild(startButton);
  gameScreen.appendChild(gameText);
  gameScreen.appendChild(yourMove);
});

// Create a paragraph element to contain game text
const gameText = document.createElement("p");
gameText.innerHTML = `Earth has been attacked by a horde of aliens!<br><br>You are the captain of the USS Assembly, on a mission to destroy every last alien ship. Battle the aliens as you try to destroy them with your lasers.<br><br>There are six alien ships. The aliens' weakness is that they are too logical and attack one at a time - they will wait to see the outcome of a battle before deploying another alien ship. Your strength is that you have the initiative and get to attack first. However, you do not have targeting lasers and can only attack the aliens in order.<br><br>PLAYING THIS GAME: Press the "your move" button to initiate an attack! After you have destroyed a ship, you have the option to make a hasty retreat.<br><br>Best of luck!`;
gameText.className = "text"

// Create a paragraph to contain results
const battleText = document.createElement("div");
battleText.className = "text"

// Create a your move button to trigger player move
const yourMove = document.createElement("button");
yourMove.textContent = "Your move!"
yourMove.addEventListener("click", playGame);

// Create a 'start new game' button
const newGame = document.createElement("button");
newGame.textContent = "Start a new game";
newGame.addEventListener("click", gameOver);

//* Create the ships and gather the alien fleet

let alienShip1 = new Spaceship("Alien Spaceship 1", true);
let alienShip2 = new Spaceship("Alien Spaceship 2", true);
let alienShip3 = new Spaceship("Alien Spaceship 3", true);
let alienShip4 = new Spaceship("Alien Spaceship 4", true);
let alienShip5 = new Spaceship("Alien Spaceship 5", true);
let alienShip6 = new Spaceship("Alien Spaceship 6", true);
let ussAssembly = new Spaceship("USS Assembly", false);

let alienFleet = [
  alienShip1,
  alienShip2,
  alienShip3,
  alienShip4,
  alienShip5,
  alienShip6,
];

//& ---------- GAME PLAY FUNCTIONS ----------

//* Start the game!

function playGame() {
  // Determine if game is over or not - if over, declare win/lose
  if (alienFleet.length !== 0 && ussAssembly.hull > 0) {
    battle(ussAssembly, alienFleet[0]);
  } else if (alienFleet.length === 0) {
    console.log(`%cThe game is over. You have won!`, `color: green;`);
    gameText.innerHTML = `The game is over. You have won!`
    gameScreen.removeChild(yourMove);
    gameScreen.appendChild(newGame);
  } else {
    console.log(`%cThe game is over. You have lost.`, `color: green;`);
    gameText.innerHTML = `The game is over. You have lost.`
    gameScreen.removeChild(yourMove);
    gameScreen.appendChild(newGame);
  }
}

//* Battle two ships

function battle(playerShip, enemyShip) {
  console.log(
    `%cBattling ${enemyShip.name} (hull: ${enemyShip.hull})`,
    `color:blue;`
  );

  gameText.textContent = `Battling ${enemyShip.name}...`;
  gameScreen.appendChild(battleText);
  battleText.textContent = "";
  
  playerShip.attack(enemyShip);
  
  if (enemyShip.hull <= 0 && alienFleet.length !== 1) {
    alienFleet.shift();
    console.log("You have defeated this spaceship!");
    console.log(alienFleet);
    battleText.innerHTML += "<br><br>You have defeated this spaceship!";
    let choice = confirm("Do you want to continue?"); // give option to retreat
    playerShip.retreatOrFight(choice);
  } else if (enemyShip.hull <= 0 && alienFleet.length === 1) {
    alienFleet.shift();
    console.log("You have defeated this spaceship!");
    console.log(alienFleet);
    battleText.innerHTML += "<br><br>You have defeated this spaceship!"
    playGame(); // display game win message
  } else {
    console.log("Prepare for a counter attack!");
    battleText.innerHTML += "<br><br>Time for a counter attack..."
    enemyShip.attack(playerShip);
  }

  if (playerShip.hull <= 0) {
    playGame(); // display game loss message
  }

}

//* Determine damage to a ship's hull

function determineDamage(firepower) {
  // Determine damage to the enemy ship hull
  let damage;
  switch (firepower) {
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
  return damage;
}

//* Game reset

function gameOver() {
  console.clear();
  gameScreen.removeChild(newGame);
  gameScreen.removeChild(gameText);
  gameScreen.appendChild(startButton);
  startButton.textContent = "Play game"

  alienShip1 = new Spaceship("Alien Spaceship 1", true);
  alienShip2 = new Spaceship("Alien Spaceship 2", true);
  alienShip3 = new Spaceship("Alien Spaceship 3", true);
  alienShip4 = new Spaceship("Alien Spaceship 4", true);
  alienShip5 = new Spaceship("Alien Spaceship 5", true);
  alienShip6 = new Spaceship("Alien Spaceship 6", true);
  ussAssembly = new Spaceship("USS Assembly", false);

  alienFleet = [
    alienShip1,
    alienShip2,
    alienShip3,
    alienShip4,
    alienShip5,
    alienShip6,
  ];

  gameText.innerHTML = `Earth has been attacked by a horde of aliens!<br><br>You are the captain of the USS Assembly, on a mission to destroy every last alien ship. Battle the aliens as you try to destroy them with your lasers.<br><br>There are six alien ships. The aliens' weakness is that they are too logical and attack one at a time - they will wait to see the outcome of a battle before deploying another alien ship. Your strength is that you have the initiative and get to attack first. However, you do not have targeting lasers and can only attack the aliens in order.<br><br>PLAYING THIS GAME: Press the "your move" button to initiate an attack! After you have destroyed a ship, you have the option to make a hasty retreat.<br><br>Best of luck!`;

  battleText.textContent = "";
  gameScreen.removeChild(battleText);
}
