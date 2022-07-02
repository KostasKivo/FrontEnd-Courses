var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomNumber2 = Math.floor(Math.random()*6) + 1;

var diceSelector1 = document.querySelector(".img1");
var diceSelector2 = document.querySelector(".img2");

function changeDice(diceSelector,number) {
  var imgPath = "images/dice" + number + ".png";
  diceSelector.src = imgPath;
}

function startGame () {

  changeDice(diceSelector1,randomNumber1);
  changeDice(diceSelector2,randomNumber2);

  if(randomNumber1>randomNumber2) {
    document.querySelector("h1").textContent = "Player 1 wins";
  } else if (randomNumber1<randomNumber2) {
    document.querySelector("h1").textContent = "Player 2 wins";
  } else {
    document.querySelector("h1").textContent = "It's a tie";
  }
}


startGame()
