/// <reference path="../Core/_reference.ts" />
function GameMenu() {
    this.initialize();
}
var p = GameMenu.prototype = new createjs.Container();
var canvas;
var stage;
// Game Object Variables
var buts;
function initialize() {
    this.addBG();
    //this.addButton();
}
function addBG() {
    var bg = new createjs.Bitmap("./Assets/Sprites/gameStart.png");
    this.addChild(bg);
}
//# sourceMappingURL=mainMenu.js.map