
var person = window.prompt("Please enter your name:");
if (person != null) 
	txt =  person + ", Welcome to play Rock Paper Scissors game!";
document.write(txt.bold());

var played = 0;
var p=0;
var s=0;
var r=0;

function play(){
	

	if((document.getElementById('paper').checked) || (document.getElementById('scissor').checked) || (document.getElementById('rock').checked))
	{
		played++;
		var options = ["Paper", "Scissors", "Rock"];
		var select = Math.floor(Math.random() * 3);
		var game = options [select];
		document.getElementById("comp1").innerHTML = game;
		document.getElementById("comp2").innerHTML = game;

	}

	//radio buttons

	if (document.getElementById('paper').checked) {
  		var chosen = document.getElementById('paper').value;
  		p++;
	}

	else if (document.getElementById('scissor').checked){
		var chosen = document.getElementById('scissor').value;
		s++;
	}

	else if (document.getElementById('rock').checked)
	{
		var chosen = document.getElementById('rock').value;
		r++;
	}

	else
		var chosen = " ";

	document.getElementById('player').innerHTML = chosen;


	document.getElementById('hist').innerHTML = played;

	document.getElementById('pap').innerHTML = p;
	document.getElementById('sci').innerHTML = s;
	document.getElementById('roc').innerHTML = r;


}




