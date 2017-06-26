/// <reference path="../Core/_reference.ts" />
(function (window) {
    window.game = window.game || {};
    function CosmicEscape() {
        this.initialize();
    }
    var canvas;
    var stage;
    var p = CosmicEscape.prototype;
    p.initialize = function () {
        var canvas = document.getElementById('canvas');
        var stage = new createjs.Stage(canvas);
        createjs.Ticker.setFPS(60);
        createjs.Ticker.on('tick', this.onTick, this);
        this.changeState(window.game.GameStates.MAIN_MENU);
    };
    p.changeState = function (state) {
        this.currentGameState = state;
        switch (this.currentGameState) {
            case window.game.GameStates.MAIN_MENU:
                this.currentGameStateFunction = this.gameStateMainMenu;
                break;
            case window.game.GameStates.GAME:
                this.currentGameStateFunction = this.gameStateGame;
                break;
            case window.game.GameStates.RUN_SCENE:
                this.currentGameStateFunction = this.gameStateRunScene;
                break;
            case window.game.GameStates.GAME_OVER:
                this.currentGameStateFunction = this.gameStateGameOver;
                break;
        }
    };
    p.onStateEvent = function (e, data) {
        this.changeState(data.state);
    };
    p.gameStateMainMenu = function () {
        var scene = new window.game.GameMenu();
        scene.on(window.game.GameStateEvents.GAME, this.onStateEvent, this, false, { state: window.game.GameStates.GAME });
        stage.addChild(scene);
        stage.removeChild(this.currentScene);
        this.currentScene = scene;
        this.changeState(window.game.GameStates.RUN_SCENE);
    };
    p.gameStateGame = function () {
        var scene = new window.game.Game();
        scene.on(window.game.GameStateEvents.GAME_OVER, this.onStateEvent, this, false, { state: window.game.GameStates.GAME_OVER });
        stage.addChild(scene);
        stage.removeChild(this.currentScene);
        this.currentScene = scene;
        this.changeState(window.game.GameStates.RUN_SCENE);
    };
    p.gameStateGameOver = function () {
        var scene = new window.game.GameOver();
        stage.addChild(scene);
        scene.on(window.game.GameStateEvents.MAIN_MENU, this.onStateEvent, this, false, { state: window.game.GameStates.MAIN_MENU });
        scene.on(window.game.GameStateEvents.GAME, this.onStateEvent, this, false, { state: window.game.GameStates.GAME });
        stage.removeChild(this.currentScene);
        this.currentScene = scene;
        this.changeState(window.game.GameStates.RUN_SCENE);
    };
    p.gameStateRunScene = function (tickEvent) {
        if (this.currentScene.run) {
            this.currentScene.run(tickEvent);
        }
    };
    p.onTick = function (e) {
        if (this.currentGameStateFunction != null) {
            this.currentGameStateFunction(e);
        }
        stage.update();
    };
    return window.game.CosmicEscape = CosmicEscape;
}(window));
//# sourceMappingURL=cosmicEscape.js.map