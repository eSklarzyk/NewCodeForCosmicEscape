
/// <reference path="../Core/_reference.ts" />

(function (window) {
    (<any>window).game = (<any>window).game || {}
    function CosmicEscape() {
       this.initialize();
    }

let canvas:HTMLElement;
let stage:createjs.Stage;
   
    let p = CosmicEscape.prototype;
    
     p.initialize = function () {
      let canvas = document.getElementById('canvas');
      let stage = new createjs.Stage(canvas);
       createjs.Ticker.setFPS(60);
       createjs.Ticker.on('tick', this.onTick, this);
       this.changeState((<any>window).game.GameStates.MAIN_MENU);
}

p.changeState = function (state) {
      this.currentGameState = state;
      switch (this.currentGameState) {
         case (<any>window).game.GameStates.MAIN_MENU:
            this.currentGameStateFunction = this.gameStateMainMenu;
            break;
         case (<any>window).game.GameStates.GAME:
            this.currentGameStateFunction = this.gameStateGame;
            break;
         case (<any>window).game.GameStates.RUN_SCENE:
            this.currentGameStateFunction = this.gameStateRunScene;
            break;
         case (<any>window).game.GameStates.GAME_OVER:
            this.currentGameStateFunction = this.gameStateGameOver;
            break;
} }
   p.onStateEvent = function (e, data) {
      this.changeState(data.state);
}

p.gameStateMainMenu = function () {
   let scene = new (<any>window).game.GameMenu();
   scene.on((<any>window).game.GameStateEvents.GAME, this.onStateEvent, this,
      false, {state:(<any>window).game.GameStates.GAME});
   stage.addChild(scene);
   stage.removeChild(this.currentScene);
   this.currentScene = scene;
   this.changeState((<any>window).game.GameStates.RUN_SCENE);
}
p.gameStateGame = function () {
   let scene = new (<any>window).game.Game();
   scene.on((<any>window).game.GameStateEvents.GAME_OVER, this.onStateEvent, this,
      false, {state:(<any>window).game.GameStates.GAME_OVER});
   stage.addChild(scene);
   stage.removeChild(this.currentScene);
   this.currentScene = scene;
   this.changeState((<any>window).game.GameStates.RUN_SCENE);
}
p.gameStateGameOver = function () {
   let scene = new (<any>window).game.GameOver();
   stage.addChild(scene);
   scene.on((<any>window).game.GameStateEvents.MAIN_MENU, this.onStateEvent, this,
      false, {state:(<any>window).game.GameStates.MAIN_MENU});
   scene.on((<any>window).game.GameStateEvents.GAME, this.onStateEvent, this,
      false, {state:(<any>window).game.GameStates.GAME});
   stage.removeChild(this.currentScene);
   this.currentScene = scene;
   this.changeState((<any>window).game.GameStates.RUN_SCENE);
}
p.gameStateRunScene = function (tickEvent) {
   if (this.currentScene.run) {
      this.currentScene.run(tickEvent);
} }
p.onTick = function (e) {
   if (this.currentGameStateFunction != null) {
      this.currentGameStateFunction(e);
   }
   stage.update();
}

 return (<any>window).game.CosmicEscape = CosmicEscape;
}(window));
 