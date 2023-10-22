const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let Board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

let currentPlayer = 'X';

function printBoard() {
  console.log('  1 | 2 | 3 ');
  console.log(' -----------');
  for (let i = 0; i < 3; i++) {
    console.log(` ${i + 1} ${board[i].join(' | ')}`);
    console.log(' -----------');
  }
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

let currentPlayer = 'X';

function printBoard() {
  console.log('  1 | 2 | 3 ');
  console.log(' -----------');
  for (let i = 0; i < 3; i++) {
    console.log(` ${i + 1} ${board[i].join(' | ')}`);
    console.log(' -----------');
  }
}
function gameLooping() {
  printBoard();
  rl.question(`Player ${currentPlayer}, enter your move (row and column): `, answer => {
    const [row, col] = answer.split(' ').map(num => parseInt(num));

    if (row >= 0 && row < 3 && col >= 0 && col < 3 && board[row][col] === ' ') {
      board[row][col] = currentPlayer;

    } else {
      console.log('Invalid move. Try again.');
      gameLooping();
    }
  });
}

gameLooping();
