var snippets = {
"main":
`var WIDTH = 480;
var HEIGHT = 480;

var canvas;

var center = {
	x:WIDTH/2,
	y:HEIGHT/2
};

var mover = {
	x:center.x+100,
	y:center.y
};

var deg = 0;

function setup(){
	angleMode(DEGREES);
	canvas = createCanvas(WIDTH,HEIGHT);
	canvas.parent("canvas-container");
}

function draw(){
	background(0);

	mover.x = center.x + cos(deg) * 75;
	mover.y = center.y + sin(deg) * 75;

	// Center circle
	fill(250);
	ellipse(center.x,center.y,10,10);

	// Path circle
	noFill();
	stroke(125);
	ellipse(center.x,center.y,150,150);

	// Cross lines
	stroke(125);
	line(0,HEIGHT/2, WIDTH, HEIGHT/2);
	line(WIDTH/2, 0, WIDTH/2, HEIGHT);

	// Moving circle
	fill(250);
	ellipse(mover.x, mover.y, 10, 10);

	// Graph Visualization
	fill(250);
	for(var i = 0; i < 300; i+=10){

		ellipse(center.x + 100 + i, center.y + sin(deg - i) * 75, 10, 10);
		ellipse(center.x - 100 - i, center.y + sin(deg - i) * 75, 10, 10);
		ellipse(center.x + cos(deg - i) * 75, center.y + 100 + i, 10, 10);
		ellipse(center.x + cos(deg - i) * 75, center.y - 100 - i, 10, 10);
		stroke(75);
		line(mover.x,mover.y, center.x + 100 + i, center.y + sin(deg - i) * 75);
		line(mover.x,mover.y, center.x - 100 - i, center.y + sin(deg - i) * 75);
		line(mover.x,mover.y, center.x + cos(deg - i) * 75, center.y + 100 + i);
		line(mover.x,mover.y, center.x + cos(deg - i) * 75, center.y - 100 - i);
	}

	// Radius line
	stroke(255);
	line(center.x, center.y, mover.x, mover.y);

	// Triangle lines
	line(center.x,center.y,center.x + cos(deg) * 75, center.y);
	line(mover.x,mover.y,center.x + cos(deg) * 75, center.y);	

	deg++;
}`};