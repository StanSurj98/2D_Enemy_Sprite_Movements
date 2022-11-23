/** @type {HTMLCanvasElement} */ // Enables the VSCODE helper to realize it's a canvas project
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
// Make equal sizing as styles.css for init canvas
CANVAS_WIDTH = canvas.width = 500;
CANVAS_HEIGHT = canvas.height = 1000;

// We want a factory function that will EVENTUALLY create many enemies for us
// Let's start with 1 enemy and make sure we understand how it should behave 
// This is "Polymorphism" concept of OOP 

enemy1 = {
  x: 0,
  y: 0,
  width: 200,
  height: 200,
}

const animate = () => {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); // ensures we delete old paint at each recursion
  enemy1.x ++; // Let's say I want to move its x position
  enemy1.y ++; // Let's say I want to move its y position
  ctx.fillRect(enemy1.x, enemy1.y, enemy1.width, enemy1.height) // draws at x, y "start" && width, height "how big"
  requestAnimationFrame(animate); // our handy recursion method
}
animate();
