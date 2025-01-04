const colors = ['red', 'blue', 'green', 'yellow'];
let sequence = [];
let playerSequence = [];
let level = 0;

const k = document.getElementById('start');
const stat = document.getElementById('stat');
const cont = document.getElementById('container');

function play(color) {
  const element = document.getElementById(color);
  element.classList.add('active');
  setTimeout(() => element.classList.remove('active'), 500);
}

function nextSequence() {
  level++;
  stat.textContent = `Level ${level}`;
  playerSequence = [];

  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  sequence.push(randomColor);

  sequence.forEach((color, index) => {
    setTimeout(() => play(color), (index + 1) * 600);
  });
}

function handleColorClick(event) {
  const color = event.target.id;
  playerSequence.push(color);
  play(color);

  if (playerSequence[playerSequence.length - 1] !== sequence[playerSequence.length - 1]) {
    stat.textContent = 'Game Over! Press Start to Try Again!';
    resetGame();
    return;
  }

  if (playerSequence.length === sequence.length) {
    setTimeout(nextSequence, 1000);
  }
}

function resetGame() {
  sequence = [];
  playerSequence = [];
  level = 0;
}

k.addEventListener('click', () => {
  resetGame();
  nextSequence();
});

cont.addEventListener('click', handleColorClick);
