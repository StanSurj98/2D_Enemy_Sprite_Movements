/** @type {HTMLCanvasElement} */ // Enables the VSCODE helper to realize it's a canvas project
const canvas = document.getElementById("canvas3");
const ctx = canvas.getContext("2d");

// ---- Relevant Global Params
CANVAS_WIDTH = canvas.width = 500; // Ensure same as styles.css
CANVAS_HEIGHT = canvas.height = 1000; // Ensure same as styles.css
const NUM_OF_ENEMIES = 20;
const enemiesArray = [];
let gameFrame = 0; // Global speed control of animations


// ---- Enemy Factory Class
class Enemy {
  constructor() {
    this.image = new Image();
    this.image.src = `./images/enemy3.png`
    this.speed = Math.random() * 4 + 1; // Random speed 1-5
    // ---- Sprite Details
    this.spriteWidth = 218; // (Total img width) / (num of frames)
    this.spriteHeight = 177;
    // Size ON CANVAS is scaled from Source sprite sheet
    this.width = this.spriteWidth / 2.5;
    this.height = this.spriteHeight / 2.5;
    // Initial sprite frame from the entire sheet of 6 frames
    this.frame = 0; 
    // Allow each bats to have different "flap speed"
    this.flapSpeed = Math.floor(Math.random() * 3 + 1); // Note the +1 is necessary
    // Start location boxed into Canvas now | MUST have the brackets wrapping
    this.x = Math.random() * (canvas.width - this.width); 
    this.y = Math.random() * (canvas.height - this.height);

    // ---- Let's explore Sine waves Movement using some Trig
    this.angle = 0; // Initial enemy position in the wave
    this.angleSpeed = Math.random() * 2; // Wave "length" for each enemy mvmt
    this.curve = Math.random() * 200; // Math.sin() returns num between -200 and 200
  }

  updateCoords() {
    // Enemy 3 should explore side to side wave movement
    // the sine wave for side to side mvmt      |      the starting middle position
    this.x = this.curve * Math.sin(this.angle * Math.PI/180) + (canvas.width/2 - this.width/2);
    // this.y += this.curve * Math.sin(this.angle);
    this.angle += this.angleSpeed;


    // ---- Position Reset 
    if (this.x + this.width < 0) this.x = canvas.width;
    // when ENTIRE sprite out of canvas to left, respawn immediate right of canvas

    // Animates sprites at certain frames only
    if (gameFrame % this.flapSpeed === 0) {
      this.frame > 4 ? this.frame = 0 : this.frame++;
    }
  }

  draw() {
    ctx.drawImage(
      this.image,
      // First 4 params are "where" to "CROP" image from entire sheet
      // and "draw it until" 1 sprite's dimensions...

      // Everytime sprite frame increases by 1, it crops to the next frame, animation
      this.frame * this.spriteWidth, 
      0,
      this.spriteWidth,
      this.spriteHeight,
      // Next 4 are "where" to "DRAW" the cropped image on canvas
      // here: "a random (x, y) starting point" on canvas
      // "Draw until maximum", the entire canvas dimensions
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}


// ---- Generate multiple enemies
for (let i = 0; i < NUM_OF_ENEMIES; i++) {
  enemiesArray.push(new Enemy());
}
console.log("Enemies Array: ", enemiesArray);

const animate = () => {
  // ---- Clears old "paint"
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  // ---- Calling our Enemy class methods
  enemiesArray.forEach((enemy) => {
    enemy.draw();
    enemy.updateCoords();
  });

  // ---- Game Speed Control
  gameFrame++;

  // ---- End of Func, recursion call
  requestAnimationFrame(animate);
};
animate();