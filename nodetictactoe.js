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
  
  for (let i = 0; i < 3; i++) {
    console.log(` ${i + 1} ${board[i].join(' | ')}`);
    console.log(' -----------'); //seperator
  }
}

function checkWin() {
}

function gameLoop() {
  printBoard();
  rl.question(`Player ${currentPlayer}, Turn (row and column): `, answer => {
    const [row, col] = answer.split(' ').map(num => parseInt(num) - 1);

    if (row >= 0 && row < 3 && col >= 0 && col < 3 && board[row][col] === ' ') {
      board[row][col] = currentPlayer;

      if (checkWin()) {
        printBoard();
        console.log(`Player ${currentPlayer} wins`);
        rl.close();
      } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        gameLoop();
      }
    } else {
      console.log('Invalid');
      gameLoop();
    }
  });
}

gameLoop();
