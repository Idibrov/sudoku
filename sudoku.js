const { log } = require("console");
const fs = require("fs");
const { EOL } = require("os");

function read() {
  //  Прочесть файл puzzles.txt в кодировке 'utf-8' и вернуть эти данные из функции
  //
  let data = fs.readFileSync("puzzles.txt", "utf-8").trim();

  const result = [];
  const lines = data.split(EOL);

  lines.forEach((line) => {
    let arr = [];
    for (let i = 0; i < line.length; i += 9) {
      arr.push(line.substring(i, i + 9).split(''));
    }
    result.push(arr);
  });

  return result;
}

function solve(boards) {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */
  console.log("Solved!");
}

function isSolved() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
}

function prettyBoard(boards) {
  for (let i = 0; i < boards.length; i++) {
    console.log(`Board ${i + 1}:`);
    const board = boards[i];
    for (let j = 0; j < board.length; j++) {
      if (j % 3 === 0 && j !== 0) {
        console.log("-".repeat(21)); 
      }
      const row = board[j];
      for (let k = 0; k < row.length; k++) {
        if (k % 3 === 0 && k !== 0) {
          process.stdout.write("| "); 
        }
        process.stdout.write(row[k] + " ");
      }
      console.log();
    }
    console.log(`${EOL}${EOL}`);
  }
}

module.exports = {
  read, prettyBoard
}

