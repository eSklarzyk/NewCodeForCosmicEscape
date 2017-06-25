(function (window) {
    window.game = window.game || {};
    function GameOver() {
        this.initialize();
    }
    var p = GameOver.prototype = new createjs.Container();
    p.Container_initialize = p.initialize;
    p.titleTxt = null;
    p.count = 0;
    p.initialize = function () {
        this.Container_initialize();
        this.addBack();
        this.addOptions();
    };
    p.addBack = function () {
        var bag = new createjs.Bitmap("./assets/gameOver.png");
        this.addChild(bag);
    };
    p.addOptions = function () {
        var option1, option2;
        option1 = new ui.SimpleButton('Main Menu');
        option1.on('click', this.mainMenu, this);
        option1.regX = option1.width / 2;
        option1.x = canvas.width / 2;
        option1.y = 400;
        option1.setButtonListeners({ color: '#FFF', borderColor: '#FFF',
            overColor: '#900' });
        this.addChild(option1);
        option2 = new ui.SimpleButton('Play Game');
        option2.on('click', this.plGame, this);
        option2.regX = option2.width / 3;
        option2.x = canvas.width / 3;
        option2.y = 500;
        option2.setButtonListeners({ color: '#FFF', borderColor: '#FFF',
            overColor: '#900' });
        this.addChild(option2);
    };
    p.mainMenu = function (e) {
        this.dispatchEvent(game.GameStateEvents.MAIN_MENU);
    };
    p.plGame = function (e) {
        this.dispatchEvent(game.GameStateEvents.GAME);
    };
    window.game.GameOver = GameOver;
}(window));
//# sourceMappingURL=gameOver.js.map