var snippets = {
"main":
`var WIDTH = 480;
var HEIGHT = 480;

var display = "Nada";

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
		inputNeurons.push(new inputNeuron(WIDTH/2 - (Math.floor(Math.sqrt(numInputs) * 25 / 2) + j * 25),HEIGHT/2 - (Math.floor(Math.sqrt(numInputs) * 25 / 2) + i * 25)));
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
	text(display,WIDTH/2 - 100,HEIGHT/2 - 200);
	textSize(12);


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
			display = "X";
			break;
	}

	console.log(network.feedForward(inputs)[0]);
	console.log(network.getCost(trainingSet));
}


function keyPressed(){
	for(var i = 0; i < 100; i++){
		if(i%10==0){
			console.log(network.backProp(trainingSet));
		} else {
			network.backProp(trainingSet)
		}
	}
}`,
"neuron":
`//Neuron constructor takes constant and weights array
function Neuron(c,weights,x,y,dendrites){
	this.location = {
		x: x,
		y: y
	};
	
	this.dendrites = dendrites;
	
	//Inputs
	this.inputs = inputs;
	
	//Weights array
	this.weights = weights;
	
	//Constant
	this.c = c;
	
	//Feed Forward function that takes inputs and sums
	this.feedForward = function(){
		var sum = 0;
		for(var i in this.inputs){
			sum += this.inputs[i] * this.weights[i];
		}
		sum += c;

		return(this.activate(sum));
	}

	//Using sigmoid activation function
	this.activate = function(sum){
		return 1/(1+Math.pow(Math.E, sum * -1));
	}
	
	// Display the neuron as a cirlcle
	this.display = function(){
		for(var i = 0; i < this.dendrites.length; i++){
			line(this.location.x, this.location.y, this.dendrites[i].location.x, this.dendrites[i].location.y); 
		}
		
		fill(Math.round(this.feedForward() * 255));
		ellipse(this.location.x,this.location.y,20,20);
	}
}`,
"network":
`function Network(x, y, spaceX, spaceY, numInputs, numLayers, inputNeurons){
	var location = {
		x: x,
		y: y
	};

	var spaceing = {
		x: spaceX,
		y: spaceY
	};

	var neurons = [];

	this.init = function(){
		for(var i = 0; i < numLayers; i++){
			neurons.push([]);
		}

		var dendrites = inputNeurons;

		for(var i = 0; i < neurons.length; i++){
			var newDendrites = [];
			var nextInputs = [];
			for(var j = 0; j < 1; j++){
				var newWeights = [];
				for(var k = 0; k < numInputs; k++){
					newWeights.push(Math.round((Math.random()*100)-1)/100);
				} 
				// neurons[i][j] = new Neuron(0.01,newWeights,location.x+(j*spaceing.x),location.y+(i*spaceing.y),dendrites,inputs);

				// Single neuron network positioning
				neurons[i][j] = new Neuron(0.01,newWeights,location.x,location.y,dendrites,inputs);
				nextInputs.push(neurons[i][j].feedForward());
				newDendrites.push(neurons[i][j]);
			}
			inputs = nextInputs;
			dendrites = newDendrites;
		}
	}

	this.getLastRow = function(){
		return neurons[neurons.length-1];
	}

	this.feedForward = function(inputs){
		for(var i = 0; i < neurons.length; i++){
			for(var j = 0; j < neurons[i].length; j++){
				neurons[i][j].inputs = inputs;
			}
			inputs = [];
			for(var j = 0; j < neurons[i].length; j++){
				inputs.push(neurons[i][j].feedForward());
			}
		}
		return inputs;
	}
	
	this.display = function(){
		for(var i = 0; i < neurons.length; i++){
			for(var j = 0; j < neurons[0].length; j++){
				neurons[i][j].display();
			}
		}
	}

	this.getCost = function(trainingSet){
		var cost = 0;

		for(var i = 0; i < trainingSet.inputs.length; i++){

			cost += Math.pow(Math.abs(trainingSet.outputs[i] - this.feedForward(trainingSet.inputs[i])[0]),2);
		}

		return cost;
	}

	this.backProp = function(trainingSet){
		// Print cost 
		var initialCost = this.getCost(trainingSet);
		var cost = this.getCost(trainingSet);

		for(var z = 0; z < neurons.length; z++){
			for(var l = 0; l < neurons[z].length; l++){
				for(var i = 0; i < neurons[z][l].weights.length; i++){
					neurons[z][l].weights[i] += 0.01;
					if(cost > this.getCost(trainingSet)){
						neurons[z][l].weights[i] += 0.01;
						cost = this.getCost(trainingSet);
					} else {
						neurons[z][l].weights[i] -= 0.02;
						if(cost > this.getCost(trainingSet)){
							neurons[z][l].weights[i] -= 0.01;
							cost = this.getCost(trainingSet);
						} else {
							neurons[z][l].weights[i] += 0.01;
						}
					}
				}
			}
		}
		return cost;
	}
}`};