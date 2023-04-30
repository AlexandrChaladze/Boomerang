// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().

const Hero = require("./game-models/Hero");
const Enemy = require("./game-models/Enemy");
const Boomerang = require("./game-models/Boomerang");
const View = require("./View");
const getBoard = require("./getBoardFunc");
const recordBoard = require("./recordnewPlayers");
const getBanned = require("./getBannedListFunc");
const readBanned = require("./readBannedFunc");
const chalk = require("chalk");
const sound = require("sound-play");

// const Boomerang = require("./game-models/Boomerang");

// Основной класс игры.
// Тут будут все настройки, проверки, запуск.

class Game {
  constructor({ trackLength }) {
    this.trackLength = trackLength;
    this.boomerang = new Boomerang(trackLength);
    this.hero = new Hero({ position: 0, boomerang: this.boomerang });
    this.enemy = new Enemy(trackLength);
    this.view = new View(this);
    this.cheatsStatus = "off";
    this.track = [];
    this.regenerateTrack();
  }

  regenerateTrack() {
    // Сборка всего необходимого (герой, враг(и), оружие)
    // в единую структуру данных
    this.track = new Array(this.trackLength).fill(" ");
    this.track[this.hero.position] = this.hero.skin;
    this.track[this.enemy.position] = this.enemy.skin; // Добавьте эту строку
    if (
      this.hero.boomerang.position >= 0 &&
      this.hero.boomerang.position < this.trackLength
    ) {
      this.track[this.hero.boomerang.position] = this.hero.boomerang.skin;
    }
  }

  check() {
    if (this.hero.position === this.enemy.position) {
      this.hero.die();
    }
  }

  async play() {
    this.view.sayHello();
    if (this.view.gameStatus === "Scoreboard") {
      console.clear();
      await getBoard();
      // console.log("ScoreBoard");
      process.exit();
    }
    if (this.view.gameStatus === "Banned") {
      console.clear();
      await readBanned();
      // console.log("ScoreBoard");
      process.exit();
    }
    //тут запрещаю играть забанненому игроку
    const forbiddenArr = await getBanned();
    if (forbiddenArr.includes(this.view.name)) {
      console.clear();
      console.log(chalk.red.bold(`${this.view.name} is banned!`));
      process.exit();
    }

    setInterval(() => {
      // Let's play!
      this.handleCollisions();
      this.regenerateTrack();

      // Добавьте логику движения врагов, например, двигаться влево
      this.enemy.moveLeft();

      // Если враг достиг края трека, перемещаем его в начало
      if (this.enemy.position < 0) {
        this.enemy.position = this.trackLength - 1;
      }

      this.view.render(this.track);
    }, 100); // Вы можете настроить частоту обновления игрового цикла
  }

  async handleCollisions() {
    if (this.hero.position >= this.enemy.position) {
      sound.play("src/sounds/zvuk-unitaza.mp3");

      const name = this.view.sayBye()[0];
      const score = this.view.sayBye()[1];
      await recordBoard(name, score, this.cheatsStatus);

      this.hero.die();

      this.view.sayBye();
      process.exit();
    }

    if (this.boomerang.position >= this.enemy.position) {
      sound.play("src/sounds/die1.mp3");
      this.enemy.die();
      //Прибавляем очки
      this.view.score.scoreCount();
      // Обнуляем позицию бумеранга после столкновения с врагом
      // this.boomerang.position = -1;
      this.enemy = new Enemy(this.trackLength); // Создаем нового врага
    }
  }
  //читы включаем
  cheat() {
    this.enemy.die();
    sound.play("src/sounds/die1.mp3");

    //Прибавляем очки
    this.view.score.scoreCount();
    // Обнуляем позицию бумеранга после столкновения с врагом
    // this.boomerang.position = -1;
    this.enemy = new Enemy(this.trackLength); // Создаем нового врага
    this.cheatsStatus = "on";
  }
}

module.exports = Game;
