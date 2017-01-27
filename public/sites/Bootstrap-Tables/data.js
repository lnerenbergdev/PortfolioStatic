var snippets = {
"main":
`&lt;!DOCTYPE html>
&lt;html>
&lt;head>
	&lt;title>Yey bootstrap!&lt;/title>
	&lt;!-- Latest compiled and minified CSS -->
	&lt;link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
	&lt;style>
		.centered{
			text-align: center;
		}
		.text-block{
			width:40%;
			margin:auto;
		}
		.code-block{
			width:50%;
			margin:auto;
		}
	&lt;/style>
&lt;/head>
&lt;body>
	&lt;div class="container">
		&lt;div class="row">
			&lt;div class="col-lg-12 centered">
				&lt;h1> Jumbotron and Table Demonstration &lt;/h1>
				&lt;h5> By Lawson &lt;/h5>
			&lt;/div>
		&lt;/div>
		&lt;hr>
		&lt;div class="row">
			&lt;div class="col-lg-12">
				&lt;h2> Jumbotron Bootstrap Class &lt;/h2>
				&lt;div class="text-block">
					&lt;p> 
						A jumbotron indicates a big box for calling extra attention to some special content or information.
					&lt;/p>
					&lt;p>
						A jumbotron is displayed as a grey box with rounded corners. It also enlarges the font sizes of the text inside it.
					&lt;/p>
					&lt;p>
						Tip: Inside a jumbotron you can put nearly any valid HTML, including other Bootstrap elements/classes.
					&lt;/p>
					&lt;p>
						(Blatently stolen from &lt;a href="http://www.w3schools.com/bootstrap/bootstrap_jumbotron_header.asp">w3schools.com&lt;/a>)
					&lt;/p>
				&lt;/div>
				&lt;div class="jumbotron centered">
					&lt;h1> I am JUMBOTRON &lt;/h1>
					&lt;p> Hear me rawr &lt;/p>
				&lt;/div>
				&lt;div class="code-block">
					&lt;pre style="background:#000;color:#f8f8f8">&lt;span style="color:#89bdff">&lt;&lt;span style="color:#89bdff">div&lt;/span> &lt;span style="color:#89bdff">class&lt;/span>=&lt;span style="color:#65b042">"jumbotron centered"&lt;/span>>&lt;/span>
    &lt;span style="color:#89bdff">&lt;&lt;span style="color:#89bdff">h1&lt;/span>>&lt;/span> I am JUMBOTRON &lt;span style="color:#89bdff">&lt;/&lt;span style="color:#89bdff">h1&lt;/span>>&lt;/span>
    &lt;span style="color:#89bdff">&lt;&lt;span style="color:#89bdff">p&lt;/span>>&lt;/span> Hear me rawr &lt;span style="color:#89bdff">&lt;/&lt;span style="color:#89bdff">p&lt;/span>>&lt;/span>
&lt;span style="color:#89bdff">&lt;/&lt;span style="color:#89bdff">div&lt;/span>>&lt;/span>
&lt;/pre>
				&lt;/div>
			&lt;/div>
		&lt;/div>
		&lt;hr>
		&lt;h2> 
			Tables
		&lt;/h2>
		&lt;div class="row">
			&lt;div class="col-lg-12">
				
				&lt;div class="text-block">
					&lt;h3>
						Basic Bootstrap Table
					&lt;/h3>
					&lt;p> Basic bootstrap tables look like this. Typical table css attributes can be used to overide defaults to achieve customization. &lt;/p>
				&lt;/div>
				&lt;table class="table">
					&lt;thead>
						&lt;th> ID &lt;/th>
						&lt;th> Name &lt;/th>
						&lt;th> Amount Owed &lt;/th>
						&lt;th> Phone Number &lt;/th>
					&lt;/thead>
					&lt;tbody>
						&lt;tr>
							&lt;td> 1 &lt;/td>
							&lt;td> Blake Miles &lt;/td>
							&lt;td> $500.00 &lt;/td>
							&lt;td> 808-555-2023 &lt;/td>
						&lt;/tr>
						&lt;tr>
							&lt;td> 2 &lt;/td>
							&lt;td> Adam Sandler &lt;/td>
							&lt;td> $3.50 &lt;/td>
							&lt;td> 808-555-2223 &lt;/td>
						&lt;/tr>
						&lt;tr>
							&lt;td> 3 &lt;/td>
							&lt;td> Chuck Testa &lt;/td>
							&lt;td> $111.11 &lt;/td>
							&lt;td> 808-555-2023 &lt;/td>
						&lt;/tr>
						&lt;tr>
							&lt;td> 4 &lt;/td>
							&lt;td> Samuel Adams &lt;/td>
							&lt;td> $1500.00 &lt;/td>
							&lt;td> 808-555-2013 &lt;/td>
						&lt;/tr>
						&lt;tr>
							&lt;td> 5 &lt;/td>
							&lt;td> Elon Musk &lt;/td>
							&lt;td> $5,000,0000,000 &lt;/td>
							&lt;td> 808-555-2423 &lt;/td>
						&lt;/tr>
					&lt;/tbody>
				&lt;/table>
				&lt;div class="code-block">
					&lt;pre style="background:#000;color:#f8f8f8">&lt;span style="color:#e0c589">&lt;&lt;span style="color:#e0c589">table&lt;/span> &lt;span style="color:#e0c589">class&lt;/span>=&lt;span style="color:#65b042">"table"&lt;/span>>&lt;/span>
    &lt;span style="color:#e0c589">&lt;&lt;span style="color:#e0c589">thead&lt;/span>>&lt;/span>
        &lt;span style="color:#e0c589">&lt;&lt;span style="color:#e0c589">th&lt;/span>>&lt;/span> ID &lt;span style="color:#e0c589">&lt;/&lt;span style="color:#e0c589">th&lt;/span>>&lt;/span>
        &lt;span style="color:#e0c589">&lt;&lt;span style="color:#e0c589">th&lt;/span>>&lt;/span> Name &lt;span style="color:#e0c589">&lt;/&lt;span style="color:#e0c589">th&lt;/span>>&lt;/span>
        &lt;span style="color:#e0c589">&lt;&lt;span style="color:#e0c589">th&lt;/span>>&lt;/span> Amount Owed &lt;span style="color:#e0c589">&lt;/&lt;span style="color:#e0c589">th&lt;/span>>&lt;/span>
        &lt;span style="color:#e0c589">&lt;&lt;span style="color:#e0c589">th&lt;/span>>&lt;/span> Phone Number &lt;span style="color:#e0c589">&lt;/&lt;span style="color:#e0c589">th&lt;/span>>&lt;/span>
    &lt;span style="color:#e0c589">&lt;/&lt;span style="color:#e0c589">thead&lt;/span>>&lt;/span>
    &lt;span style="color:#e0c589">&lt;&lt;span style="color:#e0c589">tbody&lt;/span>>&lt;/span>
        &lt;span style="color:#e0c589">&lt;&lt;span style="color:#e0c589">tr&lt;/span>>&lt;/span>
            &lt;span style="color:#e0c589">&lt;&lt;span style="color:#e0c589">td&lt;/span>>&lt;/span> 1 &lt;span style="color:#e0c589">&lt;/&lt;span style="color:#e0c589">td&lt;/span>>&lt;/span>
            &lt;span style="color:#e0c589">&lt;&lt;span style="color:#e0c589">td&lt;/span>>&lt;/span> Blake Miles &lt;span style="color:#e0c589">&lt;/&lt;span style="color:#e0c589">td&lt;/span>>&lt;/span>
            &lt;span style="color:#e0c589">&lt;&lt;span style="color:#e0c589">td&lt;/span>>&lt;/span> $500.00 &lt;span style="color:#e0c589">&lt;/&lt;span style="color:#e0c589">td&lt;/span>>&lt;/span>
            &lt;span style="color:#e0c589">&lt;&lt;span style="color:#e0c589">td&lt;/span>>&lt;/span> 808-555-2023 &lt;span style="color:#e0c589">&lt;/&lt;span style="color:#e0c589">td&lt;/span>>&lt;/span>
        &lt;span style="color:#e0c589">&lt;/&lt;span style="color:#e0c589">tr&lt;/span>>&lt;/span>
    &lt;span style="color:#e0c589">&lt;/&lt;span style="color:#e0c589">tbody&lt;/span>>&lt;/span>
&lt;span style="color:#e0c589">&lt;/&lt;span style="color:#e0c589">table&lt;/span>>&lt;/span>

&lt;/pre>
				&lt;/div>
			&lt;/div>
		&lt;/div>
		&lt;hr>
		&lt;div class="row">
			&lt;div class="col-lg-12">
				&lt;div class="text-block">
					&lt;h3>
						Striped Table
					&lt;/h3>
					&lt;p> The table-stripe class can be used in conjunction with the table class to add alternating colored rows to a table. &lt;/p>
				&lt;/div>
				&lt;table class="table table-striped">
					&lt;thead>
						&lt;th> ID &lt;/th>
						&lt;th> Name &lt;/th>
						&lt;th> Amount Owed &lt;/th>
						&lt;th> Phone Number &lt;/th>
					&lt;/thead>
					&lt;tbody>
						&lt;tr>
							&lt;td> 1 &lt;/td>
							&lt;td> Blake Miles &lt;/td>
							&lt;td> $500.00 &lt;/td>
							&lt;td> 808-555-2023 &lt;/td>
						&lt;/tr>
						&lt;tr>
							&lt;td> 2 &lt;/td>
							&lt;td> Adam Sandler &lt;/td>
							&lt;td> $3.50 &lt;/td>
							&lt;td> 808-555-2223 &lt;/td>
						&lt;/tr>
						&lt;tr>
							&lt;td> 3 &lt;/td>
							&lt;td> Chuck Testa &lt;/td>
							&lt;td> $111.11 &lt;/td>
							&lt;td> 808-555-2023 &lt;/td>
						&lt;/tr>
						&lt;tr>
							&lt;td> 4 &lt;/td>
							&lt;td> Samuel Adams &lt;/td>
							&lt;td> $1500.00 &lt;/td>
							&lt;td> 808-555-2013 &lt;/td>
						&lt;/tr>
						&lt;tr>
							&lt;td> 5 &lt;/td>
							&lt;td> Elon Musk &lt;/td>
							&lt;td> $5,000,0000,000 &lt;/td>
							&lt;td> 808-555-2423 &lt;/td>
						&lt;/tr>
					&lt;/tbody>
				&lt;/table>
				&lt;div class="code-block">
					&lt;pre style="background:#000;color:#f8f8f8">&lt;span style="color:#e0c589">&lt;&lt;span style="color:#e0c589">table&lt;/span> &lt;span style="color:#e0c589">class&lt;/span>=&lt;span style="color:#65b042">"table table-striped"&lt;/span>>&lt;/span>
    &lt;span style="color:#e0c589">&lt;&lt;span style="color:#e0c589">thead&lt;/span>>&lt;/span>
        &lt;span style="color:#e0c589">&lt;&lt;span style="color:#e0c589">th&lt;/span>>&lt;/span> ID &lt;span style="color:#e0c589">&lt;/&lt;span style="color:#e0c589">th&lt;/span>>&lt;/span>
        &lt;span style="color:#e0c589">&lt;&lt;span style="color:#e0c589">th&lt;/span>>&lt;/span> Name &lt;span style="color:#e0c589">&lt;/&lt;span style="color:#e0c589">th&lt;/span>>&lt;/span>
        &lt;span style="color:#e0c589">&lt;&lt;span style="color:#e0c589">th&lt;/span>>&lt;/span> Amount Owed &lt;span style="color:#e0c589">&lt;/&lt;span style="color:#e0c589">th&lt;/span>>&lt;/span>
        &lt;span style="color:#e0c589">&lt;&lt;span style="color:#e0c589">th&lt;/span>>&lt;/span> Phone Number &lt;span style="color:#e0c589">&lt;/&lt;span style="color:#e0c589">th&lt;/span>>&lt;/span>
    &lt;span style="color:#e0c589">&lt;/&lt;span style="color:#e0c589">thead&lt;/span>>&lt;/span>
    &lt;span style="color:#e0c589">&lt;&lt;span style="color:#e0c589">tbody&lt;/span>>&lt;/span>
        &lt;span style="color:#e0c589">&lt;&lt;span style="color:#e0c589">tr&lt;/span>>&lt;/span>
            &lt;span style="color:#e0c589">&lt;&lt;span style="color:#e0c589">td&lt;/span>>&lt;/span> 1 &lt;span style="color:#e0c589">&lt;/&lt;span style="color:#e0c589">td&lt;/span>>&lt;/span>
            &lt;span style="color:#e0c589">&lt;&lt;span style="color:#e0c589">td&lt;/span>>&lt;/span> Blake Miles &lt;span style="color:#e0c589">&lt;/&lt;span style="color:#e0c589">td&lt;/span>>&lt;/span>
            &lt;span style="color:#e0c589">&lt;&lt;span style="color:#e0c589">td&lt;/span>>&lt;/span> $500.00 &lt;span style="color:#e0c589">&lt;/&lt;span style="color:#e0c589">td&lt;/span>>&lt;/span>
            &lt;span style="color:#e0c589">&lt;&lt;span style="color:#e0c589">td&lt;/span>>&lt;/span> 808-555-2023 &lt;span style="color:#e0c589">&lt;/&lt;span style="color:#e0c589">td&lt;/span>>&lt;/span>
        &lt;span style="color:#e0c589">&lt;/&lt;span style="color:#e0c589">tr&lt;/span>>&lt;/span>
    &lt;span style="color:#e0c589">&lt;/&lt;span style="color:#e0c589">tbody&lt;/span>>&lt;/span>
&lt;span style="color:#e0c589">&lt;/&lt;span style="color:#e0c589">table&lt;/span>>&lt;/span>

&lt;/pre>
				&lt;/div>
			&lt;/div>
		&lt;/div>
		&lt;hr>
		&lt;div class="row">
			&lt;div class="col-lg-12">	
				&lt;div class="text-block">
					&lt;h3>
						Bordered Table
					&lt;/h3>
					&lt;p> The table-bordered class can be used in conjunction with the table class to add a border around the entire table. &lt;/p>
				&lt;/div>
				&lt;table class="table table-bordered">
					&lt;thead>
						&lt;th> ID &lt;/th>
						&lt;th> Name &lt;/th>
						&lt;th> Amount Owed &lt;/th>
						&lt;th> Phone Number &lt;/th>
					&lt;/thead>
					&lt;tbody>
						&lt;tr>
							&lt;td> 1 &lt;/td>
							&lt;td> Blake Miles &lt;/td>
							&lt;td> $500.00 &lt;/td>
							&lt;td> 808-555-2023 &lt;/td>
						&lt;/tr>
						&lt;tr>
							&lt;td> 2 &lt;/td>
							&lt;td> Adam Sandler &lt;/td>
							&lt;td> $3.50 &lt;/td>
							&lt;td> 808-555-2223 &lt;/td>
						&lt;/tr>
						&lt;tr>
							&lt;td> 3 &lt;/td>
							&lt;td> Chuck Testa &lt;/td>
							&lt;td> $111.11 &lt;/td>
							&lt;td> 808-555-2023 &lt;/td>
						&lt;/tr>
						&lt;tr>
							&lt;td> 4 &lt;/td>
							&lt;td> Samuel Adams &lt;/td>
							&lt;td> $1500.00 &lt;/td>
							&lt;td> 808-555-2013 &lt;/td>
						&lt;/tr>
						&lt;tr>
							&lt;td> 5 &lt;/td>
							&lt;td> Elon Musk &lt;/td>
							&lt;td> $5,000,0000,000 &lt;/td>
							&lt;td> 808-555-2423 &lt;/td>
						&lt;/tr>
					&lt;/tbody>
				&lt;/table>
				&lt;div class="code-block">
					&lt;pre style="background:#000;color:#f8f8f8">&lt;span style="color:#e0c589">&lt;&lt;span style="color:#e0c589">table&lt;/span> &lt;span style="color:#e0c589">class&lt;/span>=&lt;span style="color:#65b042">"table table-boardered"&lt;/span>>&lt;/span>
    &lt;span style="color:#e0c589">&lt;&lt;span style="color:#e0c589">thead&lt;/span>>&lt;/span>
        &lt;span style="color:#e0c589">&lt;&lt;span style="color:#e0c589">th&lt;/span>>&lt;/span> ID &lt;span style="color:#e0c589">&lt;/&lt;span style="color:#e0c589">th&lt;/span>>&lt;/span>
        &lt;span style="color:#e0c589">&lt;&lt;span style="color:#e0c589">th&lt;/span>>&lt;/span> Name &lt;span style="color:#e0c589">&lt;/&lt;span style="color:#e0c589">th&lt;/span>>&lt;/span>
        &lt;span style="color:#e0c589">&lt;&lt;span style="color:#e0c589">th&lt;/span>>&lt;/span> Amount Owed &lt;span style="color:#e0c589">&lt;/&lt;span style="color:#e0c589">th&lt;/span>>&lt;/span>
        &lt;span style="color:#e0c589">&lt;&lt;span style="color:#e0c589">th&lt;/span>>&lt;/span> Phone Number &lt;span style="color:#e0c589">&lt;/&lt;span style="color:#e0c589">th&lt;/span>>&lt;/span>
    &lt;span style="color:#e0c589">&lt;/&lt;span style="color:#e0c589">thead&lt;/span>>&lt;/span>
    &lt;span style="color:#e0c589">&lt;&lt;span style="color:#e0c589">tbody&lt;/span>>&lt;/span>
        &lt;span style="color:#e0c589">&lt;&lt;span style="color:#e0c589">tr&lt;/span>>&lt;/span>
            &lt;span style="color:#e0c589">&lt;&lt;span style="color:#e0c589">td&lt;/span>>&lt;/span> 1 &lt;span style="color:#e0c589">&lt;/&lt;span style="color:#e0c589">td&lt;/span>>&lt;/span>
            &lt;span style="color:#e0c589">&lt;&lt;span style="color:#e0c589">td&lt;/span>>&lt;/span> Blake Miles &lt;span style="color:#e0c589">&lt;/&lt;span style="color:#e0c589">td&lt;/span>>&lt;/span>
            &lt;span style="color:#e0c589">&lt;&lt;span style="color:#e0c589">td&lt;/span>>&lt;/span> $500.00 &lt;span style="color:#e0c589">&lt;/&lt;span style="color:#e0c589">td&lt;/span>>&lt;/span>
            &lt;span style="color:#e0c589">&lt;&lt;span style="color:#e0c589">td&lt;/span>>&lt;/span> 808-555-2023 &lt;span style="color:#e0c589">&lt;/&lt;span style="color:#e0c589">td&lt;/span>>&lt;/span>
        &lt;span style="color:#e0c589">&lt;/&lt;span style="color:#e0c589">tr&lt;/span>>&lt;/span>
    &lt;span style="color:#e0c589">&lt;/&lt;span style="color:#e0c589">tbody&lt;/span>>&lt;/span>
&lt;span style="color:#e0c589">&lt;/&lt;span style="color:#e0c589">table&lt;/span>>&lt;/span>

&lt;/pre>
				&lt;/div>
			&lt;/div>
		&lt;/div>
		&lt;hr>
		&lt;div class="row">
			&lt;div class="col-lg-12">
				&lt;div class="text-block">
					&lt;h3>
						Hover Rows
					&lt;/h3>
					&lt;p> The table-hover class can be used in conjunction with the table class to enable hovering over table rows. &lt;/p>
				&lt;/div>
				&lt;table class="table table-hover">
					&lt;thead>
						&lt;th> ID &lt;/th>
						&lt;th> Name &lt;/th>
						&lt;th> Amount Owed &lt;/th>
						&lt;th> Phone Number &lt;/th>
					&lt;/thead>
					&lt;tbody>
						&lt;tr>
							&lt;td> 1 &lt;/td>
							&lt;td> Blake Miles &lt;/td>
							&lt;td> $500.00 &lt;/td>
							&lt;td> 808-555-2023 &lt;/td>
						&lt;/tr>
						&lt;tr>
							&lt;td> 2 &lt;/td>
							&lt;td> Adam Sandler &lt;/td>
							&lt;td> $3.50 &lt;/td>
							&lt;td> 808-555-2223 &lt;/td>
						&lt;/tr>
						&lt;tr>
							&lt;td> 3 &lt;/td>
							&lt;td> Chuck Testa &lt;/td>
							&lt;td> $111.11 &lt;/td>
							&lt;td> 808-555-2023 &lt;/td>
						&lt;/tr>
						&lt;tr>
							&lt;td> 4 &lt;/td>
							&lt;td> Samuel Adams &lt;/td>
							&lt;td> $1500.00 &lt;/td>
							&lt;td> 808-555-2013 &lt;/td>
						&lt;/tr>
						&lt;tr>
							&lt;td> 5 &lt;/td>
							&lt;td> Elon Musk &lt;/td>
							&lt;td> $5,000,0000,000 &lt;/td>
							&lt;td> 808-555-2423 &lt;/td>
						&lt;/tr>
					&lt;/tbody>
				&lt;/table>
				&lt;div class="code-block">
					&lt;pre style="background:#000;color:#f8f8f8">&lt;span style="color:#e0c589">&lt;&lt;span style="color:#e0c589">table&lt;/span> &lt;span style="color:#e0c589">class&lt;/span>=&lt;span style="color:#65b042">"table table-hover"&lt;/span>>&lt;/span>
    &lt;span style="color:#e0c589">&lt;&lt;span style="color:#e0c589">thead&lt;/span>>&lt;/span>
        &lt;span style="color:#e0c589">&lt;&lt;span style="color:#e0c589">th&lt;/span>>&lt;/span> ID &lt;span style="color:#e0c589">&lt;/&lt;span style="color:#e0c589">th&lt;/span>>&lt;/span>
        &lt;span style="color:#e0c589">&lt;&lt;span style="color:#e0c589">th&lt;/span>>&lt;/span> Name &lt;span style="color:#e0c589">&lt;/&lt;span style="color:#e0c589">th&lt;/span>>&lt;/span>
        &lt;span style="color:#e0c589">&lt;&lt;span style="color:#e0c589">th&lt;/span>>&lt;/span> Amount Owed &lt;span style="color:#e0c589">&lt;/&lt;span style="color:#e0c589">th&lt;/span>>&lt;/span>
        &lt;span style="color:#e0c589">&lt;&lt;span style="color:#e0c589">th&lt;/span>>&lt;/span> Phone Number &lt;span style="color:#e0c589">&lt;/&lt;span style="color:#e0c589">th&lt;/span>>&lt;/span>
    &lt;span style="color:#e0c589">&lt;/&lt;span style="color:#e0c589">thead&lt;/span>>&lt;/span>
    &lt;span style="color:#e0c589">&lt;&lt;span style="color:#e0c589">tbody&lt;/span>>&lt;/span>
        &lt;span style="color:#e0c589">&lt;&lt;span style="color:#e0c589">tr&lt;/span>>&lt;/span>
            &lt;span style="color:#e0c589">&lt;&lt;span style="color:#e0c589">td&lt;/span>>&lt;/span> 1 &lt;span style="color:#e0c589">&lt;/&lt;span style="color:#e0c589">td&lt;/span>>&lt;/span>
            &lt;span style="color:#e0c589">&lt;&lt;span style="color:#e0c589">td&lt;/span>>&lt;/span> Blake Miles &lt;span style="color:#e0c589">&lt;/&lt;span style="color:#e0c589">td&lt;/span>>&lt;/span>
            &lt;span style="color:#e0c589">&lt;&lt;span style="color:#e0c589">td&lt;/span>>&lt;/span> $500.00 &lt;span style="color:#e0c589">&lt;/&lt;span style="color:#e0c589">td&lt;/span>>&lt;/span>
            &lt;span style="color:#e0c589">&lt;&lt;span style="color:#e0c589">td&lt;/span>>&lt;/span> 808-555-2023 &lt;span style="color:#e0c589">&lt;/&lt;span style="color:#e0c589">td&lt;/span>>&lt;/span>
        &lt;span style="color:#e0c589">&lt;/&lt;span style="color:#e0c589">tr&lt;/span>>&lt;/span>
    &lt;span style="color:#e0c589">&lt;/&lt;span style="color:#e0c589">tbody&lt;/span>>&lt;/span>
&lt;span style="color:#e0c589">&lt;/&lt;span style="color:#e0c589">table&lt;/span>>&lt;/span>

&lt;/pre>
				&lt;/div>
			&lt;/div>
		&lt;/div>
		&lt;hr>
		&lt;div class="row">
			&lt;div class="col-lg-12">
				&lt;div class="text-block">
					&lt;h3>
						Condensed Table
					&lt;/h3>
					&lt;p> The table-condensed class can be used in conjunction with the table class create compact table by reducing cell padding by half. &lt;/p>
				&lt;/div>
				&lt;table class="table table-condensed">
					&lt;thead>
						&lt;th> ID &lt;/th>
						&lt;th> Name &lt;/th>
						&lt;th> Amount Owed &lt;/th>
						&lt;th> Phone Number &lt;/th>
					&lt;/thead>
					&lt;tbody>
						&lt;tr>
							&lt;td> 1 &lt;/td>
							&lt;td> Blake Miles &lt;/td>
							&lt;td> $500.00 &lt;/td>
							&lt;td> 808-555-2023 &lt;/td>
						&lt;/tr>
						&lt;tr>
							&lt;td> 2 &lt;/td>
							&lt;td> Adam Sandler &lt;/td>
							&lt;td> $3.50 &lt;/td>
							&lt;td> 808-555-2223 &lt;/td>
						&lt;/tr>
						&lt;tr>
							&lt;td> 3 &lt;/td>
							&lt;td> Chuck Testa &lt;/td>
							&lt;td> $111.11 &lt;/td>
							&lt;td> 808-555-2023 &lt;/td>
						&lt;/tr>
						&lt;tr>
							&lt;td> 4 &lt;/td>
							&lt;td> Samuel Adams &lt;/td>
							&lt;td> $1500.00 &lt;/td>
							&lt;td> 808-555-2013 &lt;/td>
						&lt;/tr>
						&lt;tr>
							&lt;td> 5 &lt;/td>
							&lt;td> Elon Musk &lt;/td>
							&lt;td> $5,000,0000,000 &lt;/td>
							&lt;td> 808-555-2423 &lt;/td>
						&lt;/tr>
					&lt;/tbody>
				&lt;/table>
				&lt;div class="code-block">
					&lt;pre style="background:#000;color:#f8f8f8">&lt;span style="color:#e0c589">&lt;&lt;span style="color:#e0c589">table&lt;/span> &lt;span style="color:#e0c589">class&lt;/span>=&lt;span style="color:#65b042">"table table-condensed"&lt;/span>>&lt;/span>
    &lt;span style="color:#e0c589">&lt;&lt;span style="color:#e0c589">thead&lt;/span>>&lt;/span>
        &lt;span style="color:#e0c589">&lt;&lt;span style="color:#e0c589">th&lt;/span>>&lt;/span> ID &lt;span style="color:#e0c589">&lt;/&lt;span style="color:#e0c589">th&lt;/span>>&lt;/span>
        &lt;span style="color:#e0c589">&lt;&lt;span style="color:#e0c589">th&lt;/span>>&lt;/span> Name &lt;span style="color:#e0c589">&lt;/&lt;span style="color:#e0c589">th&lt;/span>>&lt;/span>
        &lt;span style="color:#e0c589">&lt;&lt;span style="color:#e0c589">th&lt;/span>>&lt;/span> Amount Owed &lt;span style="color:#e0c589">&lt;/&lt;span style="color:#e0c589">th&lt;/span>>&lt;/span>
        &lt;span style="color:#e0c589">&lt;&lt;span style="color:#e0c589">th&lt;/span>>&lt;/span> Phone Number &lt;span style="color:#e0c589">&lt;/&lt;span style="color:#e0c589">th&lt;/span>>&lt;/span>
    &lt;span style="color:#e0c589">&lt;/&lt;span style="color:#e0c589">thead&lt;/span>>&lt;/span>
    &lt;span style="color:#e0c589">&lt;&lt;span style="color:#e0c589">tbody&lt;/span>>&lt;/span>
        &lt;span style="color:#e0c589">&lt;&lt;span style="color:#e0c589">tr&lt;/span>>&lt;/span>
            &lt;span style="color:#e0c589">&lt;&lt;span style="color:#e0c589">td&lt;/span>>&lt;/span> 1 &lt;span style="color:#e0c589">&lt;/&lt;span style="color:#e0c589">td&lt;/span>>&lt;/span>
            &lt;span style="color:#e0c589">&lt;&lt;span style="color:#e0c589">td&lt;/span>>&lt;/span> Blake Miles &lt;span style="color:#e0c589">&lt;/&lt;span style="color:#e0c589">td&lt;/span>>&lt;/span>
            &lt;span style="color:#e0c589">&lt;&lt;span style="color:#e0c589">td&lt;/span>>&lt;/span> $500.00 &lt;span style="color:#e0c589">&lt;/&lt;span style="color:#e0c589">td&lt;/span>>&lt;/span>
            &lt;span style="color:#e0c589">&lt;&lt;span style="color:#e0c589">td&lt;/span>>&lt;/span> 808-555-2023 &lt;span style="color:#e0c589">&lt;/&lt;span style="color:#e0c589">td&lt;/span>>&lt;/span>
        &lt;span style="color:#e0c589">&lt;/&lt;span style="color:#e0c589">tr&lt;/span>>&lt;/span>
    &lt;span style="color:#e0c589">&lt;/&lt;span style="color:#e0c589">tbody&lt;/span>>&lt;/span>
&lt;span style="color:#e0c589">&lt;/&lt;span style="color:#e0c589">table&lt;/span>>&lt;/span>

&lt;/pre>
				&lt;/div>
			&lt;/div>
		&lt;/div>
		&lt;hr>
		&lt;div class="row">
			&lt;div class="col-lg-12">
				&lt;div class="text-block">
					&lt;h3>
						Contextual Tables
					&lt;/h3>
					&lt;p> Contextual classes are used to color table rows and cells&lt;/p>
					&lt;table class="table table-striped">
						&lt;thead>
							&lt;tr>
							  &lt;th>Class&lt;/th>
							  &lt;th>Description&lt;/th>
							&lt;/tr>
							&lt;/thead>
							&lt;tbody>
							&lt;tr>
							  &lt;td>&lt;code class="w3-codespan">.active&lt;/code>&lt;/td>
							  &lt;td>Applies the hover color to the table row or table cell&lt;/td>
							&lt;/tr>
							&lt;tr>
							  &lt;td>&lt;code class="w3-codespan">.success&lt;/code>&lt;/td>
							  &lt;td>Indicates a successful or positive action&lt;/td>
							&lt;/tr>
							&lt;tr>
							  &lt;td>&lt;code class="w3-codespan">.info&lt;/code>&lt;/td>
							  &lt;td>Indicates a neutral informative change or action&lt;/td>
							&lt;/tr>
							&lt;tr>
							  &lt;td>&lt;code class="w3-codespan">.warning&lt;/code>&lt;/td>
							  &lt;td>Indicates a warning that might need attention&lt;/td>
							&lt;/tr>
							&lt;tr>
							  &lt;td>&lt;code class="w3-codespan">.danger&lt;/code>&lt;/td>
							  &lt;td>Indicates a dangerous or potentially negative action&lt;/td>
							&lt;/tr>
						&lt;/tbody>
					&lt;/table>

					&lt;p> Table curtosiy of w3schools &lt;/p>
				&lt;/div>
				&lt;table class="table">
					&lt;thead>
						&lt;th> ID &lt;/th>
						&lt;th> Name &lt;/th>
						&lt;th> Amount Owed &lt;/th>
						&lt;th> Phone Number &lt;/th>
					&lt;/thead>
					&lt;tbody>
						&lt;tr class="success">
							&lt;td> 1 &lt;/td>
							&lt;td> Blake Miles &lt;/td>
							&lt;td> $500.00 &lt;/td>
							&lt;td> 808-555-2023 &lt;/td>
						&lt;/tr>
						&lt;tr class="danger">
							&lt;td> 2 &lt;/td>
							&lt;td> Adam Sandler &lt;/td>
							&lt;td> $3.50 &lt;/td>
							&lt;td> 808-555-2223 &lt;/td>
						&lt;/tr>
						&lt;tr class="info">
							&lt;td> 3 &lt;/td>
							&lt;td> Chuck Testa &lt;/td>
							&lt;td> $111.11 &lt;/td>
							&lt;td> 808-555-2023 &lt;/td>
						&lt;/tr>
						&lt;tr>
							&lt;td> 4 &lt;/td>
							&lt;td> Samuel Adams &lt;/td>
							&lt;td> $1500.00 &lt;/td>
							&lt;td> 808-555-2013 &lt;/td>
						&lt;/tr>
						&lt;tr>
							&lt;td> 5 &lt;/td>
							&lt;td> Elon Musk &lt;/td>
							&lt;td> $5,000,0000,000 &lt;/td>
							&lt;td> 808-555-2423 &lt;/td>
						&lt;/tr>
					&lt;/tbody>
				&lt;/table>
				&lt;div class="code-block">
					&lt;pre style="background:#000;color:#f8f8f8">&lt;span style="color:#e0c589">&lt;&lt;span style="color:#e0c589">table&lt;/span> &lt;span style="color:#e0c589">class&lt;/span>=&lt;span style="color:#65b042">"table"&lt;/span>>&lt;/span>
    &lt;span style="color:#e0c589">&lt;&lt;span style="color:#e0c589">thead&lt;/span>>&lt;/span>
        &lt;span style="color:#e0c589">&lt;&lt;span style="color:#e0c589">th&lt;/span>>&lt;/span> ID &lt;span style="color:#e0c589">&lt;/&lt;span style="color:#e0c589">th&lt;/span>>&lt;/span>
        &lt;span style="color:#e0c589">&lt;&lt;span style="color:#e0c589">th&lt;/span>>&lt;/span> Name &lt;span style="color:#e0c589">&lt;/&lt;span style="color:#e0c589">th&lt;/span>>&lt;/span>
        &lt;span style="color:#e0c589">&lt;&lt;span style="color:#e0c589">th&lt;/span>>&lt;/span> Amount Owed &lt;span style="color:#e0c589">&lt;/&lt;span style="color:#e0c589">th&lt;/span>>&lt;/span>
        &lt;span style="color:#e0c589">&lt;&lt;span style="color:#e0c589">th&lt;/span>>&lt;/span> Phone Number &lt;span style="color:#e0c589">&lt;/&lt;span style="color:#e0c589">th&lt;/span>>&lt;/span>
    &lt;span style="color:#e0c589">&lt;/&lt;span style="color:#e0c589">thead&lt;/span>>&lt;/span>
    &lt;span style="color:#e0c589">&lt;&lt;span style="color:#e0c589">tbody&lt;/span>>&lt;/span>
        &lt;span style="color:#e0c589">&lt;&lt;span style="color:#e0c589">tr &lt;span style="color:#e0c589">class&lt;/span>=&lt;span style="color:#65b042">"success"&lt;/span>&lt;/span>>&lt;/span>
            &lt;span style="color:#e0c589">&lt;&lt;span style="color:#e0c589">td&lt;/span>>&lt;/span> 1 &lt;span style="color:#e0c589">&lt;/&lt;span style="color:#e0c589">td&lt;/span>>&lt;/span>
            &lt;span style="color:#e0c589">&lt;&lt;span style="color:#e0c589">td&lt;/span>>&lt;/span> Blake Miles &lt;span style="color:#e0c589">&lt;/&lt;span style="color:#e0c589">td&lt;/span>>&lt;/span>
            &lt;span style="color:#e0c589">&lt;&lt;span style="color:#e0c589">td&lt;/span>>&lt;/span> $500.00 &lt;span style="color:#e0c589">&lt;/&lt;span style="color:#e0c589">td&lt;/span>>&lt;/span>
            &lt;span style="color:#e0c589">&lt;&lt;span style="color:#e0c589">td&lt;/span>>&lt;/span> 808-555-2023 &lt;span style="color:#e0c589">&lt;/&lt;span style="color:#e0c589">td&lt;/span>>&lt;/span>
        &lt;span style="color:#e0c589">&lt;/&lt;span style="color:#e0c589">tr&lt;/span>>&lt;/span>
    &lt;span style="color:#e0c589">&lt;/&lt;span style="color:#e0c589">tbody&lt;/span>>&lt;/span>
&lt;span style="color:#e0c589">&lt;/&lt;span style="color:#e0c589">table&lt;/span>>&lt;/span>

&lt;/pre>

				&lt;/div>
			&lt;/div>
		&lt;/div>
		&lt;hr>
		&lt;div class="row">
			&lt;div class="col-lg-12">
				&lt;div class="text-block">
					&lt;h3>
						Responsive Tables
					&lt;/h3>
					&lt;p> The table-responsive class enables scrolling within the table on small devices&lt;/p>
				&lt;/div>
				&lt;div class="table-responsive">
					&lt;table class="table">
						&lt;thead>
							&lt;th> ID &lt;/th>
							&lt;th> Name &lt;/th>
							&lt;th> Amount Owed &lt;/th>
							&lt;th> Phone Number &lt;/th>
						&lt;/thead>
						&lt;tbody>
							&lt;tr>
								&lt;td> 1 &lt;/td>
								&lt;td> Blake Miles &lt;/td>
								&lt;td> $500.00 &lt;/td>
								&lt;td> 808-555-2023 &lt;/td>
							&lt;/tr>
							&lt;tr>
								&lt;td> 2 &lt;/td>
								&lt;td> Adam Sandler &lt;/td>
								&lt;td> $3.50 &lt;/td>
								&lt;td> 808-555-2223 &lt;/td>
							&lt;/tr>
							&lt;tr>
								&lt;td> 3 &lt;/td>
								&lt;td> Chuck Testa &lt;/td>
								&lt;td> $111.11 &lt;/td>
								&lt;td> 808-555-2023 &lt;/td>
							&lt;/tr>
							&lt;tr>
								&lt;td> 4 &lt;/td>
								&lt;td> Samuel Adams &lt;/td>
								&lt;td> $1500.00 &lt;/td>
								&lt;td> 808-555-2013 &lt;/td>
							&lt;/tr>
							&lt;tr>
								&lt;td> 5 &lt;/td>
								&lt;td> Elon Musk &lt;/td>
								&lt;td> $5,000,0000,000 &lt;/td>
								&lt;td> 808-555-2423 &lt;/td>
							&lt;/tr>
						&lt;/tbody>
					&lt;/table>
				&lt;/div>
				&lt;div class="code-block">
					&lt;pre style="background:#000;color:#f8f8f8">&lt;span style="color:#89bdff">&lt;&lt;span style="color:#89bdff">div&lt;/span> &lt;span style="color:#89bdff">class&lt;/span>=&lt;span style="color:#65b042">"table-responsive"&lt;/span>>&lt;/span>
    &lt;span style="color:#e0c589">&lt;&lt;span style="color:#e0c589">table&lt;/span> &lt;span style="color:#e0c589">class&lt;/span>=&lt;span style="color:#65b042">"table"&lt;/span>>&lt;/span>
        &lt;span style="color:#e0c589">&lt;&lt;span style="color:#e0c589">thead&lt;/span>>&lt;/span>
            &lt;span style="color:#e0c589">&lt;&lt;span style="color:#e0c589">th&lt;/span>>&lt;/span> ID &lt;span style="color:#e0c589">&lt;/&lt;span style="color:#e0c589">th&lt;/span>>&lt;/span>
            &lt;span style="color:#e0c589">&lt;&lt;span style="color:#e0c589">th&lt;/span>>&lt;/span> Name &lt;span style="color:#e0c589">&lt;/&lt;span style="color:#e0c589">th&lt;/span>>&lt;/span>
            &lt;span style="color:#e0c589">&lt;&lt;span style="color:#e0c589">th&lt;/span>>&lt;/span> Amount Owed &lt;span style="color:#e0c589">&lt;/&lt;span style="color:#e0c589">th&lt;/span>>&lt;/span>
            &lt;span style="color:#e0c589">&lt;&lt;span style="color:#e0c589">th&lt;/span>>&lt;/span> Phone Number &lt;span style="color:#e0c589">&lt;/&lt;span style="color:#e0c589">th&lt;/span>>&lt;/span>
        &lt;span style="color:#e0c589">&lt;/&lt;span style="color:#e0c589">thead&lt;/span>>&lt;/span>
        &lt;span style="color:#e0c589">&lt;&lt;span style="color:#e0c589">tbody&lt;/span>>&lt;/span>
            &lt;span style="color:#e0c589">&lt;&lt;span style="color:#e0c589">tr&lt;/span>>&lt;/span>
                &lt;span style="color:#e0c589">&lt;&lt;span style="color:#e0c589">td&lt;/span>>&lt;/span> 1 &lt;span style="color:#e0c589">&lt;/&lt;span style="color:#e0c589">td&lt;/span>>&lt;/span>
                &lt;span style="color:#e0c589">&lt;&lt;span style="color:#e0c589">td&lt;/span>>&lt;/span> Blake Miles &lt;span style="color:#e0c589">&lt;/&lt;span style="color:#e0c589">td&lt;/span>>&lt;/span>
                &lt;span style="color:#e0c589">&lt;&lt;span style="color:#e0c589">td&lt;/span>>&lt;/span> $500.00 &lt;span style="color:#e0c589">&lt;/&lt;span style="color:#e0c589">td&lt;/span>>&lt;/span>
                &lt;span style="color:#e0c589">&lt;&lt;span style="color:#e0c589">td&lt;/span>>&lt;/span> 808-555-2023 &lt;span style="color:#e0c589">&lt;/&lt;span style="color:#e0c589">td&lt;/span>>&lt;/span>
            &lt;span style="color:#e0c589">&lt;/&lt;span style="color:#e0c589">tr&lt;/span>>&lt;/span>
        &lt;span style="color:#e0c589">&lt;/&lt;span style="color:#e0c589">tbody&lt;/span>>&lt;/span>
    &lt;span style="color:#e0c589">&lt;/&lt;span style="color:#e0c589">table&lt;/span>>&lt;/span>
&lt;span style="color:#89bdff">&lt;/&lt;span style="color:#89bdff">div&lt;/span>>&lt;/span>
&lt;/pre>
				&lt;/div>
			&lt;/div>
		&lt;/div>
	&lt;/div>
&lt;/body>
&lt;/html>`};