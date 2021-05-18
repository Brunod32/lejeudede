let firstPlayerName = document.getElementById('firstPlayer');
let secondPlayerName = document.getElementById('secondPlayer');
let btnModal = document.getElementById('closeModal');
let name1 = document.getElementById('name1');
let name2 = document.getElementById('name2');
let avatarPlayer1 = document.getElementById('avatarPlayer1');
let avatarPlayer2 = document.getElementById('avatarPlayer2');
let roll = document.getElementById('roll');
let current1 = document.getElementById('currentScore1');
let current2 = document.getElementById('currentScore2');
let global1 = document.getElementById('globalScore1');
let global2 = document.getElementById('globalScore2');


// Personnalisation du nom des joueurs
btnModal.addEventListener('click', function() {
  name1.textContent = firstPlayerName.value;
  name2.textContent = secondPlayerName.value;
  
  gambling.play()
  current1.value = 0;
  current2.value = 0;
  global1.value = 0;
  global2.value = 0;
});

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


function effectuerLanceDe() {
  roll.addEventListener('click', lanceDe);
};

function lanceDe() {
  let de = Math.ceil(Math.random() * 6);
  current1.value = de;
  // Affiche l'image du dé en fonction de la valeur de random
  let imgDice = document.getElementById('img-dice');
  if (de === 1) {
    imgDice.setAttribute('src', './pictures/dice-1.png');
  } else if (de === 2) {
    imgDice.setAttribute('src', './pictures/dice-2.png');
  } else if (de === 3) {
    imgDice.setAttribute('src', './pictures/dice-3.png');
  } else if (de === 4) {
    imgDice.setAttribute('src', './pictures/dice-4.png');
  } else if (de === 5) {
    imgDice.setAttribute('src', './pictures/dice-5.png');
  } else if (de === 6) {
    imgDice.setAttribute('src', './pictures/dice-6.png');
  } else {
    imgDice.setAttribute('src', './pictures/dice-1.png');
  }

  diceSound.play();
};
