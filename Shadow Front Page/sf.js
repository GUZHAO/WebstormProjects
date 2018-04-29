var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var circle1 = {
    x: 30,
    y: 45,
    r: 25
};
var circle2 = {
    x: 75,
    y: 75,
    r: 50
};

// draw circle1
ctx.save();
ctx.beginPath();
ctx.arc(circle1.x, circle1.y, circle1.r, 0, 2 * Math.PI, false);
ctx.fillStyle = "#ddd6f3";
ctx.fill();

// composite mode "source-atop" to draw the intersection
ctx.beginPath();
ctx.globalCompositeOperation = "source-atop";
ctx.arc(circle2.x, circle2.y, circle2.r, 0, 2 * Math.PI, false);
ctx.fillStyle = "#F5C15B";
ctx.fill();
ctx.restore();

// destination-over to draw fill for circle2 again
ctx.beginPath();
ctx.globalCompositeOperation = "destination-over";
ctx.arc(circle2.x, circle2.y, circle2.r, 0, 2 * Math.PI, false);
ctx.fillStyle = "#141E30";
ctx.fill();

