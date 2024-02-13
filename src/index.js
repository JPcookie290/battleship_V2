import "./styles.scss";
import { Gameboard } from "./modules/gameboard";
import { Player } from "./modules/player";
import { Ship } from "./modules/ship";

//Changed order of code lines
let gameboardKI = new Gameboard();
gameboardKI.createShipsCPU();
gameboardKI.createGameboard();

let gameboardPlayer = new Gameboard();
gameboardPlayer.createGameboard();

let player = new Player("Marko", gameboardKI); //enemy gameboard is given as variable to player
const carrier = new Ship("carrier", 5, 5);
const battleship = new Ship("battleship", 4, 4);
const cruiser = new Ship("cruiser", 3, 3);
const submarine = new Ship("submarine", 3, 2);
const destroyer = new Ship("Destroyer", 2, 1);

// Test placeShip
gameboardPlayer.placeShipVertical(carrier, 3, 4);
gameboardPlayer.placeShipHorizontal(destroyer, 0, 9);
gameboardPlayer.placeShipCorner(submarine, 0, 0);

gameboardKI.placeShipsCPU();

player.attackEnemy(3, 4);
console.log(gameboardPlayer.gameboard);
console.log(gameboardKI.gameboard);
