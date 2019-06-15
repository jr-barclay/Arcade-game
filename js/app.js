

// Enemies our player must avoid (uses a function expression)

// Enemy Class (X & Y position/location)

// ENEMY

var Enemy = function(x,y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
    this.step = 101;
    this.boundary = this.step * 5;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks

Enemy.prototype.update = function(dt) {

    // You should multiply any movement by the dt parameter
    if(this.x < this.boundary) {

        //dt controls the speed of the enemies
        this.x += this.speed * dt; 
    }
    //looping enemy – restarting position
    else {
        this.x = -100;
    }

    // collision function when ENEMY hits PLAYER
    // number value represents the proximity area of ENEMY 
    if (player.x < this.x + 60 && 
        player.x + 60 > this.x &&
        player.y < this.y + 60 && 
        60 + player.y > this.y) {
            alert('Bad luck. Try again'); // PLAYER winning message
        // starting postions of PLAYER
        player.x = 200;
        player.y = 400;
        }
};




// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class (Can duplicate the 'Enemy' code with New)
// This class requires an update(), render() and
// a handleInput() method.

// PLAYER Class

var Player = function(x,y) {

    // PLAYER starting position
    this.x = 200;
    this.y = 400;
    this.sprite = 'images/char-boy.png';
};



Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y); 
};

Player.prototype.update = function(dt) {

};

// This handles the PLAYERS movement (up, down, left & right)

Player.prototype.handleInput = function(direction) {

    if (direction === 'up' && this.y > 0) {
        this.y += -90; 
    } if (direction === 'down' && this.y < 400) {
        this.y += 90; 
    } if (direction === 'left' && this.x > 0) {
        this.x -= 102; 
    } if (direction === 'right' && this.x < 400) {
        this.x += 102; 
    }

    // Resets PLAYER position once they reach the end
     if (this.y < 0) {
         setTimeout (function () {
             player.x = 200;
             player.y = 400;
         }, 750); // this number sets the time-delay
            alert('Congratulations, you made it safely across'); // PLAYER winning message
     }
}


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player


// PLAYER
const allEnemies = [];
const player = new Player();

// ENEMIES
const enemy1 = new Enemy(300, 220, 50);
    const enemy2 = new Enemy(100, 125, 250);
        const enemy3 = new Enemy(300, 220, 125);
            const enemy4 = new Enemy(100, 50, 550);
                const enemy5 = new Enemy(100, 125, 75);
allEnemies.push(enemy1, enemy2, enemy3, enemy4, enemy5);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});


