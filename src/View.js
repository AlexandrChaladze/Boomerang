// Сделаем отдельный класс для отображения игры в консоли.
//класс с подсчетом очков
var readlineSync = require("readline-sync");
const chalk = require("chalk");
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
    console.clear();
    console.log(chalk.green.bold("Main menu:"));
    const playOrScore = readlineSync.question(
      chalk.cyan.bold(
        "1. Input 1 to see Scoreboard\n2. Input 2 to check Ban list\n3. Input any other key to play\nYour answer: "
      )
    );
    this.gameStatus =
      playOrScore == 1 ? "Scoreboard" : playOrScore == 2 ? "Banned" : "Play";
    if (this.gameStatus == "Play") {
      console.clear();
      console.log(chalk.green.bold("Main menu"));
      const name = readlineSync.question(
        chalk.cyan.bold("Enter your name to begin:\nYour name: ")
      );

      this.name = name.trim().length > 0 ? name.trim() : this.name;
    }
  }
  sayBye() {
    console.clear();
    const finaleScore = this.score.score;
    console.log(chalk.red.bold("YOU ARE DEAD!💀"));
    console.log(chalk.cyan.bold(`${this.name} scored ${finaleScore} points`));
    if (this.game.cheatsStatus === "on" && this.name != "Player") {
      console.log(
        chalk.red.bold(`${this.name} has been banned forever for using cheats`)
      );
    }
    if (this.name === "Player") {
      console.log(
        chalk.red.bold(`Score is not recorded because of default name "Player"`)
      );
    }
    return [this.name, finaleScore];
  }
  render() {
    const finaleScore = null;
    // const yourTeamName = "Elbrus";
    let currentScore = this.score.score;
    // Тут всё рисуем.
    console.clear();
    console.log(this.game.track.join(""));
    console.log("\n\n");
    console.log(
      chalk.green.bold(`Current score: ${currentScore} by ${this.name}`)
    );
    if (this.name === "Player") {
      console.log(
        chalk.red.bold(
          `Score will be not recorded because of default name "Player"!`
        )
      );
    }
    if (this.game.cheatsStatus === "on" && this.name != "Player") {
      console.log(
        chalk.red.bold(
          `Cheats on: ${this.name} is banned forever, score will be not recorded!`
        )
      );
    }
    // console.log(`Created by "${yourTeamName}" with love`);
  }
}

module.exports = View;
