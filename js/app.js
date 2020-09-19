// Enemies our player must avoid
var Enemy = function (x, y, movement) {
  // Variables applied to each of our instances go here,
  // we've provided one for you to get started
  this.x = x;
  this.y = y;
  this.movement = movement;
  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images
  this.sprite = "images/enemy-bug.png";
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks

Enemy.prototype.update = function (dt) {
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.

  // console.log(`something happening --- ${dt}`);
  this.x += dt * Math.random() * 1000;
  if (this.x > 500) {
    this.x = 0;
  }
  // console.log(`increment happening`);
};
// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function () {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.sprite = "images/char-boy.png";
  }
  update() {
    if (this.x < 0) {
      this.x = 0;
    } else if (this.x > 400) {
      this.x = 400;
    } else if (this.y < 0) {
      this.y = -10;
    } else if (this.y > 400) {
      this.y = 400;
    }
  }
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
  handleInput(value) {
    // if (this.x > 0 && this.x < 500) {
    if (value === "left") {
      this.x -= 100;
    } else if (value === "right") {
      this.x += 100;
    } else if (value === "up") {
      this.y -= 50;
    } else if (value === "down") {
      this.y += 50;
    }
  }
}

// Now instantiate your objects.
let enemyPosition = [50, 150, 235];
// Place all enemy objects in an array called allEnemies
let allEnemies = [];
// allEnemies.push(enemy1);
enemyPosition.forEach(function (pos) {
  let enemy = new Enemy(-90, pos, Math.random());
  allEnemies.push(enemy);
});
// Place the player object in a variable called player
let player = new Player(200, 400);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener("keyup", function (e) {
  var allowedKeys = {
    37: "left",
    38: "up",
    39: "right",
    40: "down",
  };

  player.handleInput(allowedKeys[e.keyCode]);
});
/**
 * Function to Check Collisions
 * This will check if the position of player and enemy are the same. Then returns player to its initial position
 * All enemies are in the an array AllEnemies
 * check each enemy in the array & compare its value to the player position
 * Reduce the count of lives
 */
function checkCollisions() {
  allEnemies.filter(function (elem) {
    console.log(`check collision called
    ${allEnemies}
    `);
    if (player.x === elem.x && player.y === elem.y) {
      player.x = 200;
      player.y = 400;
    } else {
    }
  });
}
