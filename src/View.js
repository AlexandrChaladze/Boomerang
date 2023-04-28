// Сделаем отдельный класс для отображения игры в консоли.
//класс с подсчетом очков
var readlineSync = require("readline-sync");

class scoreCounter {
  constructor(score = 0) {
    this.score = score;
  }
  scoreCount() {
    this.score += 10;
  }
}
class View {
  constructor(game) {
    this.game = game;
    this.score = new scoreCounter();
    this.name = "Player";
    this.gameStatus = "";
  }
  //здороваемся и определяем статус игры
  sayHello() {
    const playOrScore = readlineSync.question(
      "1. Input 1 to see scoreBoard\n2. Input any other key to play\nYour answer: "
    );
    this.gameStatus = playOrScore == 1 ? "Scoreboard" : "Play";
    if (this.gameStatus == "Play") {
      const name = readlineSync.question(
        "Enter your name to begin:\nYour name: "
      );
      this.name = name.trim().length > 0 ? name.trim() : this.name;
    }
  }
  sayBye() {
    console.clear();
    const finaleScore = this.score.score;
    console.log(`${this.name} has ${finaleScore} points`);
  }
  render() {
    const finaleScore = null;
    // const yourTeamName = "Elbrus";
    let currentScore = this.score.score;
    // Тут всё рисуем.
    console.clear();
    console.log(this.game.track.join(""));
    console.log("\n\n");
    if (!finaleScore)
      console.log(`Current score: ${currentScore} by ${this.name}`);
    // console.log(`Created by "${yourTeamName}" with love`);
  }
}

module.exports = View;
