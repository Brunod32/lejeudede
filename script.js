// Personnalisation du nom des joueur
let firstPlayerName = document.getElementById('firstPlayer');
let secondPlayerName = document.getElementById('secondPlayer');
let btnModal = document.getElementById('closeModal');
let name1 = document.getElementById('name1');
let name2 = document.getElementById('name2');

btnModal.addEventListener('click', function() {
  name1.textContent = firstPlayerName.value;
  name2.textContent = secondPlayerName.value;
});

