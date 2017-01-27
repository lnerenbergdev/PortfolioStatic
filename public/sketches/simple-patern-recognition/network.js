
function Network(x, y, spaceX, spaceY, numInputs, numLayers, inputNeurons){
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
				neurons[i][j] = new Neuron(0.01,newWeights,location.x,location.y-125,dendrites,inputs);
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
}