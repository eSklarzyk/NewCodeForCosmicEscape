(function (window) {
    //Global Variables
    var canvas;
    var stage;
    var clickMeButton;
    window.game = window.game || {};
    function GameMenu() {
        this.initialize();
    }
    var p = GameMenu.prototype = new createjs.Container();
    this.Container_initialize = this.initialize;
    this.addButton = null;
    this.count = 0;
    this.initialize = function () {
        this.Container_initialize();
        this.addBG();
        this.addButton();
    };
    this.addBG = function () {
        var bg = new createjs.Bitmap("./assets/gameStart.png");
        this.addChild(bg);
    };
    this.addButton = function () {
        clickMeButton = new createjs.Bitmap("../Assets/Sprites/enemyUFO.png");
        clickMeButton.on("click", clickMeButton_Click);
        stage.addChild(clickMeButton);
    };
    function clickMeButton_Click() {
        this.playGame();
    }
    this.playGame = function (e) {
        this.dispatchEvent(window.game.GameStateEvents.GAME);
    };
    return window.game.GameMenu = GameMenu;
}(window));
/* var stage = new createjs.Stage("canvasElementId");
var image = new createjs.Bitmap("./assets/gameStart.png");
stage.addChild(image); */ 
//# sourceMappingURL=mainMenu.js.map