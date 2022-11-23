/** @type {HTMLCanvasElement} */ // Enables the VSCODE helper to realize it's a canvas project
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

// ---- Relevant Global Params
CANVAS_WIDTH = canvas.width = 500;  // Ensure same as styles.css
CANVAS_HEIGHT = canvas.height = 1000; // Ensure same as styles.css
const NUM_OF_ENEMIES = 100;
const enemiesArray = [];

// We want a factory function that will EVENTUALLY create many enemies for us
// Let's start with 1 enemy and make sure we understand how it should behave 
// This is "Polymorphism" concept of OOP 

// enemy1 = {
//   x: 0,
//   y: 0,
//   width: 200,
//   height: 200,
// }

// ---- Enemy Factory Class
class Enemy {
  constructor() {
    this.x = Math.floor(Math.random() * 500); // random start loc
    this.y = Math.floor(Math.random() * 1000); // random start loc
    this.width = Math.floor(Math.random() * 50); // random size
    this.height = Math.floor(Math.random() * 50); // random size
  }
  updateCoords() {
    this.x++;
    this.y++;
  }
  draw() {
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

// What if we want to generate multiple?
for (let i = 0; i < NUM_OF_ENEMIES; i++) {
  enemiesArray.push(new Enemy());
}




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
