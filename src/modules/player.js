"use strict";

import { Gameboard } from "./gameboard";

class Player {
  constructor(name, gameboard) {
    this.name = name;
    //added gameboard as variable => so enemy gameboard is not an empty array
    // TODO want to change that later so that it does not have to be created outside of gameboard
    this.enemyGameboard = gameboard;
  }

  attackEnemy(x, y) {
    const result = this.enemyGameboard.attackShip(x, y);
    if (result === "Treffer") {
      console.log("Treffer!");
    } else if (result === "X") {
      console.log("Bereits an dieser Stelle geschossen!");
    } else if (result === "Versenkt") {
      console.log("Versenkt!");
    } else {
      console.log("Verfehlt!");
    }
  }
}

export { Player };
