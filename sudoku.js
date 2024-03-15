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
