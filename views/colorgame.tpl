<!DOCTYPE html>
<html>
<head>
	<title>color game</title>
	<link rel="stylesheet" type="text/css" href="{{links('res',filepath='css/style.css')}}">
</head>
<body>
	<h1>The Great <br>
		<span id="colordisplay"> RGB </span>
		<br>
		 Color Game</h1>
	<div id="stripe">
		<button id="reset">New Colors</button>
		<span id=message></span>
		<button id="easy">Easy</button>
		<button class="selected" id="hard">Hard</button></div>
<div id="container">
    <div class="square"></div>	
    <div class="square"></div>	
    <div class="square"></div>	
    <div class="square"></div>	
    <div class="square"></div>	
    <div class="square"></div>
   <script type="text/javascript" src="{{links('res',filepath='js/main.js')}}"></script>
	
</div>
</body>
</html>