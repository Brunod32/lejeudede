// initialisation des variables
let firstPlayerName = document.getElementById('firstPlayer');
let secondPlayerName = document.getElementById('secondPlayer');
let btnModal = document.getElementById('closeModal');
let name1 = document.getElementById('name1');
let name2 = document.getElementById('name2');
let avatarPlayer1 = document.getElementById('avatarPlayer1');
let avatarPlayer2 = document.getElementById('avatarPlayer2');
let player1 = document.getElementById('player1');
let player2 = document.getElementById('player2');
let roll = document.getElementById('roll');
let tempScore = 0;
let tempGlobalScore1 = 0;
let tempGlobalScore2 = 0;
let hold = document.getElementById('hold');
let current1 = document.getElementById('currentScore1');
let global1 = document.getElementById('globalScore1');
let current2 = document.getElementById('currentScore2');
let global2 = document.getElementById('globalScore2');

// Personnalisation du nom des joueurs et initialisation jeu
btnModal.addEventListener('click', function() {
  name1.textContent = firstPlayerName.value.toUpperCase();
  name2.textContent = secondPlayerName.value.toUpperCase();
  gambling.play();
  resetScore();
  resetGlobal();
  activePlayer = 1;
  player1.style.opacity = 1;
  player2.style.opacity = 0.5;
});

// Réinitialisation des rounds
function resetScore() {
  current1.textContent = 0;
  current2.textContent = 0;
  tempScore = 0;
};

// Réinitialisation des globaux
function resetGlobal() {
  global1.textContent = 0;
  global2.textContent = 0;
  tempGlobalScore1 = 0;
  tempGlobalScore2 = 0;
};

// personnalisation de l'avatar
avatarPlayer1.addEventListener('click', function() {
  let mySrc = avatarPlayer1.getAttribute('src');
  if (mySrc === './pictures/ksmiletris.png') {
    avatarPlayer1.setAttribute('src', './pictures/face-angel.png');
  } else if (mySrc === './pictures/face-angel.png') {
    avatarPlayer1.setAttribute('src', './pictures/face-devilish.png');
  } else if (mySrc === './pictures/face-devilish.png') {
    avatarPlayer1.setAttribute('src', './pictures/face-smile.png');
  } else if (mySrc === './pictures/face-smile.png') {
    avatarPlayer1.setAttribute('src', './pictures/crystal-smiley.png');
  } else if (mySrc === './pictures/crystal-smiley.png') {
    avatarPlayer1.setAttribute('src', './pictures/face-angel.png');
  }
});

avatarPlayer2.addEventListener('click', function() {
  let mySrc = avatarPlayer2.getAttribute('src');
  if (mySrc === './pictures/ksmiletris.png') {
    avatarPlayer2.setAttribute('src', './pictures/face-angel.png');
  } else if (mySrc === './pictures/face-angel.png') {
    avatarPlayer2.setAttribute('src', './pictures/face-devilish.png');
  } else if (mySrc === './pictures/face-devilish.png') {
    avatarPlayer2.setAttribute('src', './pictures/face-smile.png');
  } else if (mySrc === './pictures/face-smile.png') {
    avatarPlayer2.setAttribute('src', './pictures/crystal-smiley.png');
  } else if (mySrc === './pictures/crystal-smiley.png') {
    avatarPlayer2.setAttribute('src', './pictures/face-angel.png');
  }
});

// fonction du context de jeu
function letsPlayGame() {
  roll.addEventListener('click', rollDice);
  hold.addEventListener('click', holdDice);
};

function rollDice() {
  let dice = Math.ceil(Math.random() * 6);
  if (activePlayer === 1 && dice !== 1) {
    player1.style.opacity = 1;
    player2.style.opacity = 0.5;
    tempScore += dice;
    current1.textContent = tempScore;
  } else if (activePlayer === 1 && dice === 1){
    player2.style.opacity = 1;
    player1.style.opacity = 0.5;
    resetScore();
    activePlayer += activePlayer;
  } else if (activePlayer === 2 && dice !== 1) {
    player2.style.opacity = 1;
    player1.style.opacity = 0.5;
    tempScore += dice;
    current2.textContent = tempScore;
  } else if (activePlayer === 2 && dice === 1){
    player1.style.opacity = 1;
    player2.style.opacity = 0.5;
    resetScore();
    activePlayer = 1;
};

  // Affiche l'image du dé en fonction de la valeur de random
  let imgDice = document.getElementById('img-dice');
  if (dice === 1) {
    imgDice.setAttribute('src', './pictures/dice-1.png');
  } else if (dice === 2) {
    imgDice.setAttribute('src', './pictures/dice-2.png');
  } else if (dice === 3) {
    imgDice.setAttribute('src', './pictures/dice-3.png');
  } else if (dice === 4) {
    imgDice.setAttribute('src', './pictures/dice-4.png');
  } else if (dice === 5) {
    imgDice.setAttribute('src', './pictures/dice-5.png');
  } else if (dice === 6) {
    imgDice.setAttribute('src', './pictures/dice-6.png');
  } else {
    imgDice.setAttribute('src', './pictures/dice-1.png');
  }
  diceSound.play();
  if (dice === 1) {
    lose.play();
  }
};

// fonction cumul des points round dans le total
function holdDice() {
  tempGlobalScore1 += Number(current1.textContent);
  global1.textContent = tempGlobalScore1;
  tempGlobalScore2 += Number(current2.textContent);
  global2.textContent = tempGlobalScore2;
  if (activePlayer === 1 && global1.textContent < 100) {
    resetScore();
    player1.style.opacity = 0.5;
    player2.style.opacity = 1;
    activePlayer = 2;
  } else if (activePlayer === 1 && global1.textContent >= 100) {
    bravo.play();
    activePlayer = 1;
    player2.style.opacity = 0.5;
    alert(`Fin de partie, ${name1.textContent} a gagné`);
  } else if (activePlayer === 2 && global2.textContent < 100) {
    resetScore();
    player1.style.opacity = 1;
    player2.style.opacity = 0.5;
    activePlayer = 1;
  } else if (activePlayer === 2 && global2.textContent >= 100) {
    bravo.play();
    activePlayer = 2;
    player1.style.opacity = 0.5;
    alert(`Fin de partie, ${name2.textContent} a gagné`);
  }
};
