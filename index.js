import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

let randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

let randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

let randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

let randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6

let randomImageSource2 = "images/dice" + randomNumber2 + ".png";

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



reportWebVitals();
