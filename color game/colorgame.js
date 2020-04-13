var numsquares=6;
var colors=generatecolors(numsquares);
var h1=document.querySelector("h1");
var squares=document.querySelectorAll(".square");
var message=document.querySelector("#message");
var picked=pick();
var colordisplay=document.querySelector("#colordisplay");
var resetbutton=document.querySelector("#reset");
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");

easy.addEventListener("click",function(){
   easy.classList.add("selected");
    hard.classList.remove("selected");
    numsquares=3;
    colors=generatecolors(numsquares);
    picked=pick();
    colordisplay.textContent=picked;
    for(var i=0;i<squares.length;i++){
    	if(colors[i]){
    		squares[i].style.backgroundColor=colors[i];
    	}
    	else{
    		squares[i].style.display="none";
    	}
    }
 
});
hard.addEventListener("click",function(){
	easy.classList.remove("selected");
    hard.classList.add("selected");
    numsquares=6;
     colors=generatecolors(numsquares);
    picked=pick();
    colordisplay.textContent=picked;
    for(var i=0;i<squares.length;i++){
    	
    		squares[i].style.backgroundColor=colors[i];
    		squares[i].style.display="block";
    	
    }
});

resetbutton.addEventListener("click",function(){
	//generate all colors
	colors=generatecolors(numsquares);
	//pick a color
	picked=pick();
	//change display color name text to matched color
	colordisplay.textContent=picked;
	resetbutton.textContent="New Colors"
	//change color of squares
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=colors[i];
	}
      h1.style.backgroundColor="steelblue";
      message.textContent=" ";
});
colordisplay.textContent=picked;
for(var i=0;i<squares.length;i++)
{
	 squares[i].style.backgroundColor=colors[i];
	//add click listener
	squares[i].addEventListener("click",function(){
	//grab the color
	  var clickedcolor= this.style.backgroundColor;
	  console.log(clickedcolor,picked)
	      if (clickedcolor == picked){ 
	      message.textContent="correct!";
	      resetbutton.textContent="Play Again?";
            changecolor(clickedcolor);
            h1.style.backgroundColor=clickedcolor;
	  }
	 else{
		this.style.backgroundColor="#232323";
	    message.textContent="Try Again!!";
	}
	})
}
function changecolor(color){
	for(var i=0;i<squares.length;i++)
{
	 squares[i].style.backgroundColor=color;
}
}
function pick(){
  	var random=Math.floor(Math.random()*colors.length)
  	return colors[random];
}
function generatecolors(num){
 //make an array
 var arr=[];
 //repeat num times
 for(var i=0;i<num;i++){
 	//get random color and push into array
 	arr.push(randomcolor());
 }
 //return array
 return arr;
}
function randomcolor(){
	//pick random red part
	var r=Math.floor(Math.random()*256);
		//pick random blue part
			var g=Math.floor(Math.random()*256);
	//pick random green part
		var b=Math.floor(Math.random()*256);
		//to synthesis "rgb(r,g,b)"
		return "rgb("+r+", "+g+", "+b+")";
}