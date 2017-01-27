var WIDTH = 480;
var HEIGHT = 480;

var img;

var swapped = 0;

function preload(){
	img = loadImage("unsorted.jpg");
}

function setup(){
	var canvas = createCanvas(WIDTH,HEIGHT);
	canvas.parent("canvas");

	image(img, 0, 0);
}

function draw(){
	loadPixels();
	for(var i = 1; i < WIDTH*4-4; i++){
		for(var j = 1; j < HEIGHT*4-4; j++){
			// Compare pixel values
			if(pixels[(i-1+j*WIDTH)*4+1] > pixels[(i+(j+1)*WIDTH)*4+2]){
				// if comparision is met, swap pixel values
				for(var k = 0; k < 4; k++){
					swapped = pixels[(i+j*WIDTH)*4+k];
					pixels[(i+j*WIDTH)*4+k] = pixels[(i+(j+1)*WIDTH)*4+k];
					pixels[(i+(j+1)*WIDTH)*4+k] = swapped;
				}
			}	
		}
	}
	updatePixels();
}



