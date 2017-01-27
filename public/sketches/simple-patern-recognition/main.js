var WIDTH = 480;
var HEIGHT = 480;

var display = "NA";

function inputNeuron(x,y){
	this.location = {
		x: x,
		y: y
	}
	
	this.isActive = false;
	
	this.display = function(){
		if(this.isActive){
			fill(0);
		}else{
			fill(255);
		}
		ellipse(this.location.x, this.location.y, 20,20);
	}
}

var numInputs = 16;
var numLayers = 1;

var data = [];
for(var i = 0; i < 100; i++){
	data[i] = i*10;
}

var logString = "Fitness\n";

var trainingSet = {
	inputs: [	[0,0,0,0,
				 0,1,1,0,
				 0,1,1,0,
				 0,0,0,0]
				 ,
				[0,1,1,0,
				 1,1,1,1,
				 1,1,1,1,
				 0,1,1,0]
				 ,
				[1,0,0,0,
				 0,1,0,0,
				 0,0,1,0,
				 0,0,0,1]
				 ,
				[1,0,0,1,
				 0,1,1,0,
				 0,1,1,0,
				 1,0,0,1]
				 ],
	outputs: [0.11,0.12,0.13,0.14]
};


var table;


var inputNeurons = [];
for(var i = 0; i < Math.floor(Math.sqrt(numInputs)); i++){
	for(var j = 0; j < Math.floor(Math.sqrt(numInputs)); j++){
		inputNeurons.push(new inputNeuron(WIDTH/2 + 85 - (Math.floor(Math.sqrt(numInputs) * 25 / 2) + j * 25),HEIGHT/2 - (Math.floor(Math.sqrt(numInputs) * 25 / 2) + i * 25)));
	}
}

// Network(#inputs, #layers)
var network = new Network(WIDTH/2, 200, WIDTH/2/inputNeurons.length, 30, inputNeurons.length,numLayers, inputNeurons);

var outputNeuron = {};

function setup() {
	var canvas = createCanvas(WIDTH, HEIGHT);
	canvas.parent("canvas");
	network.init();

}

function draw() {
	background(255);


	textSize(26);
	fill(0);
	textSize(14);
	text("Recognized Pattern: " + display,WIDTH/2 - 100,HEIGHT/2 - 200);
	

	fill(0);
	textSize(12);
	text(logString,0,12);
	


	// Network Display 
	network.display();

	for(var i = 0; i < inputNeurons.length; i++){
		inputNeurons[i].display();
	}
}

var inputs = [0,0,0];
function mousePressed() {
	for(var i = 0; i < inputNeurons.length; i++){
		if(mouseX <= inputNeurons[i].location.x + 10 && mouseX >= inputNeurons[i].location.x - 10 && mouseY >= inputNeurons[i].location.y - 10 && mouseY <= inputNeurons[i].location.y + 10){
			inputNeurons[i].isActive = !inputNeurons[i].isActive;
		}
	}
	
	inputs = [];
	for(var i = 0; i < inputNeurons.length; i++){
		 if(inputNeurons[i].isActive){
			inputs.push(1);
		 }else{
			 inputs.push(0);
		 }
	}

	switch(Math.round(network.feedForward(inputs)[0] * 100)){
		case 11: 
			display = "Dot";
			break;
		case 12:
			display = "Plus";
			break;
		case 13:
			display = "\\";
			break;
		case 14:
			display = "MAX";
			break;
	}

	console.log(network.feedForward(inputs)[0]);
	console.log(network.getCost(trainingSet));
}


function keyPressed(){
	for(var i = 0; i < 100; i++){
		if(i%10==0){
			logString += network.backProp(trainingSet) + "\n";
			console.log(network.backProp(trainingSet));
		} else {
			network.backProp(trainingSet)
		}
	}
}

