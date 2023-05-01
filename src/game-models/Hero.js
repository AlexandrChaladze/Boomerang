// Наш герой.

const chalk = require("chalk");

class Hero {
  constructor({ position, boomerang }) {
    this.skin = " 🥦 ";
    this.position = position;
    this.boomerang = boomerang;
  }

  moveLeft() {
    // Идём влево.
    if (this.position >= 0) {
      this.position -= 1;
    }
  }

  moveRight() {
    // Идём вправо.
    sound.play('src/sounds/glitch-in-the-matrix.wav');
    this.position += 1;
  }

  attack() {
    // Атакуем.
    this.boomerang.position = this.position + 1; // Устанавливаем начальную позицию бумеранга
    this.boomerang.fly();
    sound.play('src/sounds/congratulations.wav');
  }

  die() {

    sound.play('./src/sounds/twirl.wav');
    console.log('name');
    this.skin = '💀';
    console.log('YOU ARE DEAD!💀');
    process.exit();

  }
}

module.exports = Hero;
