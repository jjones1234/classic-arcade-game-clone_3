// Enemies our player must avoid
var Enemy = function (x, y, speed) {
        "use strict";
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.sprite = 'images/enemy-bug.png';
    };
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks

Enemy.prototype.update = function (dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.x <= 500) {
        this.x = ((dt * this.speed) + this.x);  
    } else {
        this.x = -10;
    } 
    if (player.x > this.x - 50 && player.x < this.x + 50 && player.y > this.y - 50 && player.y < this.y + 50) {
             player.playerreset();
    } 
};
// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function () {
    this.x = 200;
    this.y = 400;
    this.sprite = 'images/char-boy.png';
};

Player.prototype.update = function() {};
// Draw the Player on the screen, required method for game
Player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
//Prepares the keys to be pressed according to the buttons and moves the player.
Player.prototype.handleInput = function(keypress) {
    switch (keypress) {
    case 'left':
        if (this.x > 0) {
            this.x -= 40;
        }
        break;
    case 'up':          
        this.y -= 40;
        if (this.y < 20) {
                this.playerreset();
        }  
        break;
    case 'right':
        if (this.x !== 400) {
            this.x += 40;
        }
        break;
    case 'down':
        if (this.y !== 400) {
            this.y += 40;
        }
        break;
    }
};
//Resets the player to original start
Player.prototype.playerreset = function () {
    this.x = 200;
    this.y = 400;
    this.sprite = 'images/char-boy.png';
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var enemies = 0;
var allEnemies = [];
//enemyspeed, sets a different speed for each enemy during the loop
var enemySpeedA = Math.floor((Math.random() * 120) + 30);
var enemySpeedB = Math.floor((Math.random() * 130) + 20);
var enemySpeedC = Math.floor((Math.random() * 120) + 30);
while (enemies < 3) {
    allEnemies.push(new Enemy(-2, 60, enemySpeedA));
    allEnemies.push(new Enemy(-2, 140, enemySpeedB)); 
    allEnemies.push(new Enemy(-2, 233, enemySpeedC));
    enemies++;
};  
// Place the player object in a variable called player
var player = new Player(); 
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});