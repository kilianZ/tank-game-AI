
const canvas = document.getElementById('map-canvas')
const w = canvas.width = window.innerWidth
const h = canvas.height = window.innerHeight
const ctx = canvas.getContext('2d')

// figure out how to rotate around some point??

// save last 6 circle positions, should get progressivesly smaller
// to make cool trailing effect

// draw background
ctx.fillStyle = '#3487b3'
ctx.fillRect(0,0,w,h)

// draw object
let x = w/2, y = h/2;
let r = 40, r2 = 40, r3 = 6;

// upper half circle
ctx.fillStyle = 'white'
ctx.beginPath();
ctx.arc(x, y, r + r2, 0, Math.PI);
ctx.fill();

// upper half circle
ctx.fillStyle = 'black'
ctx.beginPath();
ctx.arc(x, y, r + r2, Math.PI, 0);
ctx.fill();

// outer circles
ctx.fillStyle = 'white'
ctx.beginPath();
ctx.arc(x + r, y, r2, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = 'black'
ctx.beginPath();
ctx.arc(x - r, y, r2, 0, 2 * Math.PI);
ctx.fill();

// inner circles
ctx.fillStyle = 'black'
ctx.beginPath();
ctx.arc(x + r, y, r3, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = 'white'
ctx.beginPath();
ctx.arc(x - r, y, r3, 0, 2 * Math.PI);
ctx.fill();
