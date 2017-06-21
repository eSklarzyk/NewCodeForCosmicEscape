/// <reference path="../Core/_reference.ts" />
function GameMenu(): void {
    this.initialize();
}
 
 var p = GameMenu.prototype = new createjs.Container();

 let canvas:HTMLElement;
 let stage:createjs.Stage;
// Game Object Variables
let buts:objects.Button;  

function initialize(){
this.addBG();
//this.addButton();

  }

 function addBG (){
   var bg = new createjs.Bitmap("./Assets/Sprites/gameStart.png");
    this.addChild(bg);  
}

