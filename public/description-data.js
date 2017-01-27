var info = {
"Fish":{
	"description":"Demonstration of genetically evolved neural networks. Fish use psuedo visual cortext in combination with a neural network to processes and react to information about their environment. The succsesfull fish become genetic parents to the next generation.",
	"tags": "Javascript HTML5 P5.JS Neural-Nets Genetic-Algorithm",
	"snippet":
`for(var z = 0; z < Weights.length; z++){
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
}`
},
"Glitch-Art":{
	"description": "This program demonstrates the abstract effect ofonvoluted pixel sorting on images. Think about having a group of people line up from tallest to shortest. Tell the first person to compare themselves with the secound and if they are taller, swap places. This progam dose something simular with the intensity values of pixels.",
	"tags": "Javascript HTML5 P5.js Pixel-Manipulation",
	"snippet":
`loadPixels();
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
updatePixels();`
},
"Sin-vs-Cos":{
	"description": "Animated visualization of the relationship between sine and cosine trig functions.",
	"tags": "Javascript HTML5 P5.js Trig",
	"snippet":
`// Graph Visualization
fill(250);
for(var i = 0; i < 300; i+=10){
	// Propagate ellipse string out wards from center while incrementing degree offset
	ellipse(center.x + 100 + i, center.y + sin(deg - i) * 75, 10, 10);
	ellipse(center.x - 100 - i, center.y + sin(deg - i) * 75, 10, 10);
	ellipse(center.x + cos(deg - i) * 75, center.y + 100 + i, 10, 10);
	ellipse(center.x + cos(deg - i) * 75, center.y - 100 - i, 10, 10);
	stroke(75);
	line(mover.x,mover.y, center.x + 100 + i, center.y + sin(deg - i) * 75);
	line(mover.x,mover.y, center.x - 100 - i, center.y + sin(deg - i) * 75);
	line(mover.x,mover.y, center.x + cos(deg - i) * 75, center.y + 100 + i);
	line(mover.x,mover.y, center.x + cos(deg - i) * 75, center.y - 100 - i);
}`
},
"Simple-Patern-Recog":{
	"description": "Simplistic patern recognition demonstration. The weights of a single perceptron are trained using gradient decent to accuretly recognize 4x4 bitmap patterns.",
	"tags": "Javascript HTML5 P5.js Neural-Networks",
	"snippet":
`//Feed Forward function that takes inputs and returns activation value of the sum of weighted inputs
this.feedForward = function(){
	var sum = 0;
	for(var i in this.inputs){
		sum += this.inputs[i] * this.weights[i];
	}
	sum += c;
	return(this.activate(sum));
}`
},
"Bongo":{
	"description": "CodeCraft Assignment: Recreate an existing product site using twitter Bootstrap. This is my recreation of oatis and elanors portable speaker ecommerce site with bootstrap implementation.",
	"tags": "Bootstrap HTML5 CSS",
	"snippet":
`/* Hand moves up from bottom */
@keyframes welcomeAnimation{
	0%{ top: 450px;}
	100%{ top: 0px;}
}

/* Text Fade in */

@keyframes welcomeAnimation-textfade{
	0%{ opacity: 0;}
	50%{ opacity: 0;}
	100%{ opacity: 1;}
}`
},
"Iframe-demo":{
	"description": "CodeCraft Assignment: HTML Topic demonstration. This is a collaberation site with Alex Walker with a perpose demonstration of HTML iframe functionality.",
	"tags": "HTML CSS",
	"snippet":
`&lt;a href="http://www.mit.edu" target="myIframe"> MIT </a>`
},
"Bootstrap-Concept-Demo":{
	"description": "CodeCraft Assignment: Demonstrate Twitter Bootstraps Tables and Jumbotron functionality whitin a webpage.",
	"tags": "HTML CSS Bootstrap",
	"snippet": 
`&lt;div class="jumbotron centered">
	&lt;h1> I am JUMBOTRON &lt;/h1>
	&lt;p> Hear me rawr &lt;/p>
&lt;/div>`
},
"Jquery-Append-Demo":{
	"description": "CodeCraft Assignment: Demonstrate Jquery append functionality whitin a webpage.",
	"tags": "HTML CSS Bootstrap Javascript Jquery",
	"snippet": 
`$('#demo-results').append('&lt;div id="element">&lt;/div>');`
},
"Dray-Wilson-Photography":{
	"description": "Portfolio website built for Dray Wilson to display and market his work as a photographer. Currently is still in development.",
	"tags": "HTML CSS Bootstrap Javascript",
	"snippet": 
`$('.thumbnail').mouseover(function(){
 		$('#preview').attr('src',(this).src);`
}};






