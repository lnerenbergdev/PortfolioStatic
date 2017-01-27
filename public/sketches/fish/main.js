var WIDTH = 720;
var HEIGHT = 480;

var canvas;

var numFish = 100;
var numFood = 5;

var fish = [];
var food = [];

function setup() {
	canvas = createCanvas(WIDTH, HEIGHT);
	canvas.parent("canvas");

	for(var i = 0; i < numFish; i++){
		// Add new fish
		fish.push(new Fish(0,0));
		// initiate fish
		fish[fish.length-1].init(WIDTH,HEIGHT);
	}

	testFish = new Fish(WIDTH/2,HEIGHT/2);
	testFish.init(WIDTH,HEIGHT);

	for(var i = 0; i < numFood; i++){
		food.push(new Food(WIDTH/2 + 300,HEIGHT/2, WIDTH, HEIGHT));
		food[food.length-1].reset();
	}
}
var numAlive = 0;
var numParents = 3;
var parentWeights = [];

var recorded = false;

function draw() {
	background(10);

	numAlive = 0;
	for(var f of fish){
		if(f.isAlive){
			numAlive ++;
			f.update(food);
			f.display();
		}
	}

	// testFish.update(food);
	// testFish.display();


	for(var f of food){
		f.display();
	}

	if(numAlive < numParents && recorded == false){
		recorded = true;
		parentWeights =[];
		for(var f of fish){
			if(f.isAlive){
				parentWeights.push([]);
				parentWeights[parentWeights.length-1] = f.brain.getWeights();
			}
		}
	}

	if(numAlive < 1){
		var Weights = crossOver(parentWeights);
		recorded = false;
		for(var i = 0; i < numFish; i++){
			// Add new fish

			// initiate fish
			fish[i].init(WIDTH,HEIGHT);
			fish[i].brain.setWeights(Weights[i]);
		}

		var string = '';
		for(var f of fish){
			string += f.location.x;
		}
	}
}

function crossOver(parentWeights) {
	// Get all fish brain weights

	var Weights = [];

	for(var f = 0; f < fish.length; f++){
		Weights.push(fish[f].brain.getWeights());
	}

	for(var z = 0; z < Weights.length; z++){
		for(var l = 0; l < Weights[z].length; l++){
			for(var j = 0; j < Weights[z][l].length; j++){
				for(var k = 0; k < Weights[z][l][j].length; k++){
					if(Math.random() > 0.2 && parentWeights.length >= 1){
						var randParent = Math.floor(Math.random() * parentWeights.length);
						Weights[z][l][j][k] = parentWeights[randParent][l][j][k];
					} else{
						if(Math.random() > 0.5){
							Weights[z][l][j][k] = Math.random()-0.5;
						}
					}
				}
			}
		}
	}

	for(var i in parentWeights){
		Weights[i] = parentWeights[i];
	}
	
	return Weights;
}


function keyPressed(){
	// if(keyCode == LEFT_ARROW){
	// 	testFish.turn(10);
	// }

	// if(keyCode == RIGHT_ARROW){
	// 	testFish.turn(-10);
	// }

	// if(keyCode == UP_ARROW){
	// 	testFish.velocityMag = 1;
	// }

	// if(keyCode == DOWN_ARROW){
	// 	testFish.velocityMag = 0;
	// }
	// console.log(testFish.visualCortex(food));
}


















