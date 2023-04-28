// Основной файл.
// Запускает игру.
const Game = require("./src/Game");
const runInteractiveConsole = require("./src/keyboard");

// Инициализация игры с настройками.
const game = new Game({
  trackLength: 30,
});

// Запуск игры.
async function play() {
  await game.play();
  runInteractiveConsole(game);
}
play();
