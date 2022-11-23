/** @type {HTMLCanvasElement} */ // Enables the VSCODE helper to realize it's a canvas project
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
// Make equal sizing as styles.css for init canvas
CANVAS_WIDTH = canvas.width = 500;
CANVAS_HEIGHT = canvas.height = 1000;

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
  constructor(x, y, width, height) {
    // this.name = name,
    this.x = x,
    this.y = y,
    this.width = width,
    this.height = height
  }
  updateCoords() {
    this.x++;
    this.y++;
  }
  draw() {
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

const enemy1 = new Enemy(10, 50, 100, 100);
const enemy2 = new Enemy(70, 30, 175, 50);

const animate = () => {
  // ---- Clears old "paint"
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  // ---- Calling our Enemy class methods
  enemy1.updateCoords();
  enemy1.draw();
  enemy2.updateCoords();
  enemy2.draw();


  // ---- End of Func, recursion call
  requestAnimationFrame(animate);
}
animate();
