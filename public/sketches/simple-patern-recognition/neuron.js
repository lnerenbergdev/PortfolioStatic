//Neuron constructor takes constant and weights array
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
	
	//Feed Forward function that takes inputs and returns activation value of the sum of weighted inputs
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
}