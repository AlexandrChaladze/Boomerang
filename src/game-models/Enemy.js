// Враг.

class Enemy {
  constructor(trackLength) {
    this.generateSkin();
    this.position = trackLength - 1;
  }

  generateSkin() {
    const skins = [
      "🥃",
      "🍺",
      "🍷",
      "🍾",
      "🍸",
      "🥂",
      "🍹",
      "🍟",
      "🍔",
      "🌭",
      "🍕",
      "🥃",
    ];
    this.skin = skins[Math.floor(Math.random() * skins.length)];
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  die() {
    this.position = 0;
    // console.log("Enemy is dead!");
  }
}

module.exports = Enemy;
