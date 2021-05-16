let firstPlayerName = document.getElementById('firstPlayer');
let secondPlayerName = document.getElementById('secondPlayer');
let btnModal = document.getElementById('closeModal');
let name1 = document.getElementById('name1');
let name2 = document.getElementById('name2');
let avatarPlayer1 = document.getElementById('avatarPlayer1');
let avatarPlayer2 = document.getElementById('avatarPlayer2');

// Personnalisation du nom des joueurs
btnModal.addEventListener('click', function() {
  name1.textContent = firstPlayerName.value;
  name2.textContent = secondPlayerName.value;
  
  gambling.play()
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

