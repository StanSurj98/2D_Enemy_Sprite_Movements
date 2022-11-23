/** @type {HTMLCanvasElement} */ // Enables the VSCODE helper to realize it's a canvas project
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

// ---- Relevant Global Params
CANVAS_WIDTH = canvas.width = 500; // Ensure same as styles.css
CANVAS_HEIGHT = canvas.height = 1000; // Ensure same as styles.css
const NUM_OF_ENEMIES = 100;
const enemiesArray = [];

// ---- Sprite Resources
const enemyImage = new Image();
enemyImage.src = "./images/enemy1.png";

// ---- Enemy Factory Class
class Enemy {
  constructor() {
    // Random start location
    this.x = Math.floor(Math.random() * canvas.width);
    this.y = Math.floor(Math.random() * canvas.height);
    // Variable movement speed, a range between -2 to 2
    this.speed = Math.random() * 4 - 2;
    // ---- Sprite Sheets
    this.spriteWidth = 293; // (Total img width) / (num of frames)
    this.spriteHeight = 155;
    // Size scaled to art
    this.width = this.spriteWidth / 2.5;
    this.height = this.spriteHeight / 2.5;
  }
  updateCoords() {
    // Randomized movement in each axis relative to speed range
    this.x += this.speed;
    this.y += this.speed;
  }
  draw() {
    // Multiple built in methods for different styles of basic rectangles to draw!
    // ctx.strokeRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(
      enemyImage,
      // The next 4 lines are where we CROP the image from the entire sheet
      // In this case, first frame ONLY, "from" (top-left 0, 0)...
      // "draw until" 1 sprite's width & height...
      0,
      0,
      this.spriteWidth,
      this.spriteHeight,
      // Next 4 lines are "Where do we DRAW that cropped frame?"
      // In this case, "a random (x, y) starting point" on our canvas
      // "Draw until maximum", the entire canvas width & height
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

  // ---- End of Func, recursion call
  requestAnimationFrame(animate);
};
animate();
