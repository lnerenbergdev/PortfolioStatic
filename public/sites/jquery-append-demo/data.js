var snippets = {
"main":
`&lt;!DOCTYPE html>
&lt;html>
&lt;head>
	&lt;title>Yey bootstrap!&lt;/title>
	&lt;!-- Latest compiled and minified CSS -->
	&lt;link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
	&lt;script src="https://code.jquery.com/jquery-3.1.1.js" >&lt;/script>
	&lt;script src="https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js">&lt;/script>
	&lt;style>
		.centered{
			text-align: center;
		}
		.jumbotron-custom{
			background-color: #272822;
			color: white;
		}

		.jumbotron-custom > h3 {
			font-family: Consolas, monaco, monospace;
			font-size: 23px;
			font-style: normal;
			font-variant: normal;
			font-weight: 500;
			line-height: 15.4px;
		}


		.text-block-left{
			text-align: left;
			width:100%;
		}

		.text-block-centered{
			text-align: center;
			width:100%;
			margin:auto;
		}
		.code-block{
			width:50%;
			margin:auto;
		}

		.form-custom{
			width: 100%;
			height: 100%;
		}

		.demo-input-wrapper{
			width: 100%;
		}

		.demo-display{
			border-style: dotted;
			border-color: red;
			border-radius: 5px;
			padding: 10px;
			height: 250px;
		}
	&lt;/style>
&lt;/head>
&lt;body>
	
	&lt;div class="container">
		&lt;div class="row">
			&lt;div class="col-lg-12 centered">
				&lt;h1> jQuery Method Demonstation: DOM Manipulation &lt;/h1>
				&lt;h5> By Lawson &lt;/h5>
			&lt;/div>
		&lt;/div>
		&lt;hr>
		&lt;div class="row">
			&lt;div class="col-lg-12 centered">
				&lt;button id="nav-button-1"> &lt;code> .append() &lt;/code> &lt;/button>
				&lt;button id="nav-button-2"> &lt;code> .appendTo() &lt;/code> &lt;/button>
				&lt;button id="nav-button-3"> &lt;code> .prepend() &lt;/code> &lt;/button>
				&lt;button id="nav-button-4"> &lt;code> .prependTo() &lt;/code> &lt;/button>

				&lt;div class="text-block-centered">
					&lt;h4> &lt;div id="description">&lt;/div> &lt;/h4>
				&lt;/div>
				&lt;div class="jumbotron jumbotron-custom centered">

					&lt;h2> &lt;div id="banner">&lt;/div> &lt;/h2>
				&lt;/div>
			&lt;/div>
		&lt;/div>
		&lt;div class="row">
		
			&lt;div class="col-lg-4 col-md-4">
			
					&lt;h3> &lt;code>content&lt;/code> &lt;/h3>

					&lt;table class="table table-bordered table-custom centered">
					
						&lt;tbody>
							&lt;th> Accepted Types &lt;/th>
							&lt;td> htmlString &lt;/td>
							&lt;td> Element &lt;/td>
							&lt;td> Text &lt;/td>
							&lt;td> Array &lt;/td>
							&lt;td> jQuery &lt;/td>
						&lt;/tbody>
					&lt;/table>

					&lt;div class="text-block-left">
						&lt;p> Appendable content may be supplied as a DOM element, HTML string, text node, array of elements and text nodes or jQuery object. Supplying the method append with one or more of these content types results in its insertion as the last child of the matched element/s.    &lt;/p>
					&lt;/div>

			&lt;/div>

			&lt;div class="col-lg-4 col-md-4">
				&lt;h3> Demo &lt;/h3>
				&lt;div id="demo-input-container">
			
					&lt;textarea class="form-control form-custom" id="demo-input" rows="12">&lt;/textarea>
					
				&lt;/div>
				&lt;button id="demo-button-submit">&lt;/button>

			&lt;/div>

			&lt;div class="col-lg-4 col-md-4" >
				&lt;h3> &lt;code> id='element' &lt;/code> &lt;/h3>
				&lt;div class="demo-display">
					
					&lt;div id="demo-results">
						&lt;div id="element">&lt;/div>
					&lt;/div>
				&lt;/div>
			 &lt;/div>
		&lt;/div>
		&lt;hr>
	&lt;/div>

	&lt;script type="text/javascript">

		var inp = $('#demo-input').val();

		function Page(description,banner,demoCode,demoElement){
			

			this.getDescription = function(){
				return description;
			};

			this.getDemoCode = function(){
				return demoCode;
			};

			this.getBanner = function(){
				return banner;
			};

		}


		var pages = [];
		pages.push(new Page("jQuery's &lt;code>.append()&lt;/code> method allows for the insertion of content to the end of elements in a matched set",
			"&lt;h2> &lt;span style='color:#f92672'>$&lt;/span>(&lt;span style='color:#fd971f'>'element'&lt;/span>).&lt;span style='color:#66D9EF'>append&lt;/span>( content [, moreContent] ) &lt;/h2>",
"&lt;script>\n$(function(){\n  for(var i = 0; i &lt; 10; i++){\n    $('#element').append('&lt;tr>');\n    $('#element').append(i);\n    $('#element').append('&lt;/tr>');\n  }\n});\n&lt;/"+"script>"));

			pages.push(new Page("jQuery's &lt;code>.appendTo()&lt;/code> method allows for the insertion of content to the end of a target element/s",
			"&lt;h2> &lt;span style='color:#f92672'>$&lt;/span>(&lt;span style='color:#fd971f'>content&lt;/span>).&lt;span style='color:#66D9EF'>appendTo&lt;/span>( target ) &lt;/h2>",
"&lt;script>\n$(function(){\n  for(var i = 0; i &lt; 10; i++){\n    $('&lt;tr>').appendTo('.target');\n    $(i).appendTo('.target');\n    $('&lt;/tr>').appendTo('.target');\n  }\n});\n&lt;/"+"script>"));

			pages.push(new Page("jQuery's &lt;code>.prepend()&lt;/code> method allows for the insertion of content as the first child of elements in a matched set",
			"&lt;h2> &lt;span style='color:#f92672'>$&lt;/span>(&lt;span style='color:#fd971f'>'element'&lt;/span>).&lt;span style='color:#66D9EF'>prepend&lt;/span>( content [, moreContent] ) &lt;/h2>",
"&lt;script>\n$(function(){\n  for(var i = 0; i &lt; 10; i++){\n    $('#element').prepend('&lt;tr>');\n    $('#element').prepend(i);\n    $('#element').prepend('&lt;/tr>');\n  }\n});\n&lt;/"+"script>"));

			pages.push(new Page("jQuery's &lt;code>.prependTo()&lt;/code> method allows for the insertion of content as the first child of a target",
			"&lt;h2> &lt;span style='color:#f92672'>$&lt;/span>(&lt;span style='color:#fd971f'>content&lt;/span>).&lt;span style='color:#66D9EF'>prependTo&lt;/span>( target ) &lt;/h2>",
"&lt;script>\n$(function(){\n  for(var i = 0; i &lt; 10; i++){\n    $('&lt;tr>').prependTo('.target');\n    $(i).prependTo('.target');\n    $('&lt;/tr>').prependTo('.target');\n  }\n});\n&lt;/"+"script>"));


	
		function demo(){

			inp = $('#demo-input').text();

			$('#demo-results').empty();
			$('#demo-results').append('&lt;div id="element">&lt;/div>');
			$('#demo-results').append(inp);
		}

		$('#demo-button-submit').click(function(){
				demo();
		});

		$('#nav-button-1').click(function(){
				displayCurrentPage(pages[0]);
		});

		$('#nav-button-2').click(function(){
				displayCurrentPage(pages[1]);
		});

		$('#nav-button-3').click(function(){
				displayCurrentPage(pages[2]);
		});

		$('#nav-button-4').click(function(){
				displayCurrentPage(pages[3]);
		});

		$(function(){
			displayCurrentPage(pages[0]);
		});

		function displayCurrentPage(currentPage){
			$('#demo-input').empty();
			$('#description').empty();
			$('#banner').empty();

			$('#demo-input').val(currentPage.getDemoCode());
			$('#description').append(currentPage.getDescription());
			$('#banner').append(currentPage.getBanner());
		}
		
	&lt;/script>
&lt;/body>
&lt;/html>`};