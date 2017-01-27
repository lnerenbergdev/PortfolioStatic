var snippets = {
"main":
`&lt;!DOCTYPE html>
&lt;html>
&lt;head>
	&lt;title> Drayson Wilson Photography &lt;/title>
	&lt;style type="text/css" src="style.css">&lt;/style>
	&lt;link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
	&lt;script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous">&lt;/script>
	&lt;script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous">&lt;/script>
	&lt;link rel="stylesheet" href="draywilsonphotography-style.css">
&lt;/head>
&lt;body>
&lt;div class="container-fluid">
	&lt;div class="col-lg-12 col-md-12">
		&lt;div class="row">
			&lt;div class="container-fluid">
				&lt;div class="col-lg-2 col-md-2">
					&lt;div id="navbar">
						&lt;div id="title">
							&lt;h1> Drayson &lt;/h1>
						&lt;/div>
						&lt;div id="title">
							&lt;h1> Wilson &lt;/h1>
						&lt;/div>
						&lt;div id="title">
							&lt;h1> Photography &lt;/h1>
						&lt;/div>

						&lt;div id="menu">
							&lt;h4> Ocean &lt;/h4>
						&lt;/div>
						&lt;div id="menu">
							&lt;h4> Land &lt;/h4>
						&lt;/div>
						&lt;div id="menu">
							&lt;h4> Sky &lt;/h4>
						&lt;/div>
						&lt;div id="menu">
							&lt;h4> Travel &lt;/h4>
						&lt;/div>
						&lt;div id="menu">
							&lt;h4> Portfolio &lt;/h4>		
						&lt;/div>
					&lt;/div>
				&lt;/div>


				&lt;div class="col-lg-10 col-md-10">
					&lt;div class="col-lg-8 col-md-8">
						&lt;div id="frame">
							&lt;img id="preview" class="img" src="images/5.jpg" height="100%">
						&lt;/div>
					&lt;/div>


					&lt;div class="col-md-4">
						&lt;div class="col-md-12 centered-vertically gallery-column">
							&lt;div class="col-md-6">
								&lt;img class="img-responsive thumbnail thumbnail-custom" src="images/1.jpg">
								&lt;img class="img-responsive thumbnail thumbnail-custom" src="images/2.jpg">
								&lt;img class="img-responsive thumbnail thumbnail-custom" src="images/3.jpg">
								&lt;img class="img-responsive thumbnail thumbnail-custom" src="images/4.jpg">
								&lt;img class="img-responsive thumbnail thumbnail-custom" src="images/5.jpg">
								&lt;img class="img-responsive thumbnail thumbnail-custom" src="images/6.jpg">
								&lt;img class="img-responsive thumbnail thumbnail-custom" src="images/7.jpg">
								&lt;img class="img-responsive thumbnail thumbnail-custom" src="images/8.jpg">
							&lt;/div>
							&lt;div class="col-md-6">
								&lt;img class="img-responsive thumbnail thumbnail-custom" src="images/9.jpg">
								&lt;img class="img-responsive thumbnail thumbnail-custom" src="images/10.jpg">
								&lt;img class="img-responsive thumbnail thumbnail-custom" src="images/11.jpg">
								&lt;img class="img-responsive thumbnail thumbnail-custom" src="images/12.jpg">
								&lt;img class="img-responsive thumbnail thumbnail-custom" src="images/13.jpg">
								&lt;img class="img-responsive thumbnail thumbnail-custom" src="images/14.jpg">
								&lt;img class="img-responsive thumbnail thumbnail-custom" src="images/15.jpg">
								&lt;img class="img-responsive thumbnail thumbnail-custom" src="images/16.jpg">
							&lt;/div>
						&lt;/div>
					&lt;/div>
				&lt;/div>
			&lt;/div>
		&lt;/div>
	&lt;/div>
&lt;/div>

&lt;!-- &lt;footer class="footer">
  &lt;div class="container-fluid text-centered">
    &lt;p class="text-muted">&lt;/p>
  &lt;/div>
&lt;/footer> -->

&lt;footer class="navbar-fixed-bottom">
      &lt;div class="container">
        &lt;p class="text-muted">© 2016  Dray Wilson Photography - All Rights&lt;/p>
      &lt;/div>
&lt;/footer>

&lt;/body>

&lt;script>
$(function() {
 	$('.thumbnail').mouseover(function(){
 		$('#preview').attr('src',(this).src);

 		if($('#frame').width() &lt; $('#preview').width()){
 			$('#preview').attr('width','100%');
 			$('#preview').attr('height','auto');
 			$('#preview').css('margin-left','0');
 		} else if($('#frame').height() &lt; $('#preview').height()){
 			$('#preview').attr('width','auto');
 			$('#preview').attr('height','100%');

 			var offset = ($('#frame').width() - $('#preview').width())/2;
 			console.log(offset);

 			$('#preview').css('margin-left',offset);
 		}

 		$('#preview').center();
 		console.log("Frame width: " + $('#frame').width());
 		console.log("Preview width: " + $('#preview').width());

 	});
 });
&lt;/script>
&lt;/html>`};