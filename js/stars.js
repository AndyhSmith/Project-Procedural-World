
// Stars
var cB = document.getElementById("canvas-background");
var ctxB = cB.getContext("2d");
cB.width = window.innerWidth;
cB.height = window.innerHeight;
cB.style.backgroundColor = "black"

// Inspired by http://thenewcode.com/81/Make-A-Starfield-Background-with-HTML5-Canvas
let stars = Math.floor((window.innerWidth * window.innerHeight) / 5000)
colorrange = [0,60,240];
for (var i = 0; i < stars; i++) {
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;

    let radius = Math.random() * 1;
    let hue = colorrange[getRandom(0,colorrange.length - 1)]
    let sat = getRandom(50,100);

    ctxB.beginPath();
    ctxB.arc(x, y, radius, 0, 360);
    ctxB.fillStyle = "hsl(" + hue + ", " + sat + "%, 88%)";
    ctxB.fill();
}