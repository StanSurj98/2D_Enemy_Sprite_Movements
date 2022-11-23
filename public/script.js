/** @type {HTMLCanvasElement} */ // Enables the VSCODE helper to realize it's a canvas project
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
// Make equal sizing as styles.css for init canvas
CANVAS_WIDTH = canvas.width = 500;
CANVAS_HEIGHT = canvas.height = 1000;

// We want a factory function that will EVENTUALLY create many enemies for us
// Let's start with 1 enemy and make sure we understand how it should behave 
// This is "Polymorphism" concept of OOP 

