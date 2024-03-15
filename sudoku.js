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

  console.log(result);
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

function prettyBoard() {
  /**1
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}

read();
function printBoard(board) {
  board.forEach((row, rowIndex) => {
    if (rowIndex % 3 === 0 && rowIndex !== 0) {
      console.log("-".repeat(21)); // Выводим разделитель между блоками по 3 строки
    }
    row.forEach((cell, cellIndex) => {
      if (cellIndex % 3 === 0 && cellIndex !== 0) {
        process.stdout.write("| "); // Выводим разделитель между блоками по 3 столбца
      }
      process.stdout.write(cell + " ");
    });
    console.log(); // Переход на новую строку в конце каждой строки
  });
}