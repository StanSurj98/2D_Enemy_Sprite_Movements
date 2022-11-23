/** @type {HTMLCanvasElement} */ // Enables the VSCODE helper to realize it's a canvas project
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

// ---- Relevant Global Params
CANVAS_WIDTH = canvas.width = 500;  // Ensure same as styles.css
CANVAS_HEIGHT = canvas.height = 1000; // Ensure same as styles.css
const NUM_OF_ENEMIES = 100;
const enemiesArray = [];

// ---- Enemy Factory Class
class Enemy {
  constructor() {
    // Random start location
    this.x = Math.floor(Math.random() * canvas.width); 
    this.y = Math.floor(Math.random() * canvas.height);
    // Random enemy sizes
    this.width = Math.floor(Math.random() * 50); 
    this.height = Math.floor(Math.random() * 50);
    // Variable movement speed, a range between -2 to 2
    this.speed = Math.random() * 4 - 2 
  }
  updateCoords() {
    // Randomized movement in each axis relative to speed range
    this.x += this.speed;
    this.y += this.speed;
  }
  draw() {
    // Multiple built in methods for different styles of basic rectangles to draw!
    ctx.strokeRect(this.x, this.y, this.width, this.height); 
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
  })


  // ---- End of Func, recursion call
  requestAnimationFrame(animate);
}
animate();
