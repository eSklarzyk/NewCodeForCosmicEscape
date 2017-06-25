(function (window) {
window.game = window.game || {}
function GameMenu(){
    this.initialize();
}
var p = GameMenu.prototype = new createjs.Container();
p.Container_initialize = p.initialize;

p.addButton = null;
p.count = 0;

p.initialize = function (){
this.Container_initialize();
this.addBG();
this.addButton();
}

p.addBG = function(){
   var bg = new createjs.Bitmap("./assets/gameStart.png");
    this.addChild(bg);  
}



p.addButton = function(){
 var btn, event;
      btn = new ui.SimpleButton('Play Game');
      btn.on('click',this.playGame,this);
      btn.regX = btn.width / 2;
      btn.x = canvas.width / 2;
      btn.y = 400;
      btn.setButtonListeners({color:'#FFF', borderColor:'#FFF', 
      overColor:'#900'});
      this.addChild(btn);
   }


 p.playGame = function (e) {
      this.dispatchEvent(game.GameStateEvents.GAME);
   }
 
   window.game.GameMenu = GameMenu;
}(window));







/* var stage = new createjs.Stage("canvasElementId");
var image = new createjs.Bitmap("./assets/gameStart.png");
stage.addChild(image); */ 