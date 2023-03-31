


var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

switch(randomNumber1){
	case 1:
		document.getElementById("dice").src = "dice1.png";
		break;
	case 2:
		document.getElementById("dice").src = "dice2.png";
		break;
	case 3:
		document.getElementById("dice").src = "dice3.png";
		break;
	case 4:
		document.getElementById("dice").src = "dice4.png";
		break;
	case 5:
		document.getElementById("dice").src = "dice5.png";
		break;
	case 6:
		document.getElementById("dice").src = "dice6.png";
		break;
	default:
		//caso contrário
		break;
}

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6

switch(randomNumber2){
	case 1:
		document.getElementById("dice").src = "dice1.png";
		break;
	case 2:
		document.getElementById("dice").src = "dice2.png";
		break;
	case 3:
		document.getElementById("dice").src = "dice3.png";
		break;
	case 4:
		document.getElementById("dice").src = "dice4.png";
		break;
	case 5:
		document.getElementById("dice").src = "dice5.png";
		break;
	case 6:
		document.getElementById("dice").src = "dice6.png";
		break;
	default:
		//caso contrário
		break;
}

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//If player 1 wins

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "O Jogador 1 Venceu! 🏆";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "O Jogador 2 Venceu! 🏆";
}
else {
  document.querySelector("h1").innerHTML = "Empate!";
}
