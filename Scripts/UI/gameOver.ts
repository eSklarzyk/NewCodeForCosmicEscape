(function (window) {
  (<any>window).game =(<any>window).game || {}
   
   //Global Variables
 var canvas:HTMLElement;
  var stage:createjs.Stage;
  var clickMeButton: createjs.Bitmap;

   
   function GameOver() {
      this.initialize();
   }
   var p = GameOver.prototype = new createjs.Container();
   this.Container_initialize = this.initialize;
   
this.titleTxt = null;
this.count = 0;


   this.initialize = function () {
      this.Container_initialize();
      this.addBack();
     this.addOptions();
   }
   this.addBack = function () {
      var bag = new createjs.Bitmap("./assets/gameOver.png");
      this.addChild(bag);
}

this.addOptions = function () {
 var option1;
  option1 = new createjs.Bitmap("../Assets/Sprites/enemyUFO.png");
    option1.on("click", clickMeButton_Click);
    stage.addChild(option1);
}

function  clickMeButton_Click() {
this.mainMenu();
}

   

 this.mainMenu = function (e) {
      this.dispatchEvent((<any>window).game.GameStateEvents.MAIN_MENU);
   }

    this.plGame = function (e) {
      this.dispatchEvent((<any>window).game.GameStateEvents.GAME);
   }
  
 return (<any>window).game.GameOver = GameOver;
}(window));