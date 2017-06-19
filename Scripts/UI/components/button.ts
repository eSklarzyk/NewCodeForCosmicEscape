(function (){

window.ui = window.ui || {};

let SimpleButton = function (label) {
this.label = label;
this.initialize();

}


let p = SimpleButton.prototype = new createjs.Container();


function initialize(){
this.drawButton(); 

}


p.drawButton = function () {
    this.removeAllChildren();
    this.labelTxt = new createjs.Text(this.label, this.fontSize + this.color);
    this.labelTxt.textAlign = 'center';

    this.labelTxt.textBaseline = 'top';
    this.width = this.labelTxt.getMeasuredWidth() + 30;
    this.height = this.labelTxt.getMeasuredHeight() + 20;
    this.labelTxt.x = this.width / 2;
    this.labelTxt.y = 10;
    this.background = new createjs.Shape();
    this.background.graphics.beginStroke(this.borderColor)
        .beginFill(this.buttonColor)
        .drawRect(0, 0, this.width, this.height);
    this.addChild(this.background, this.labelTxt);
}


p.setButtonListeners = function () {
    this.cursor = 'pointer';
    this.on('click', this.onButtonOver);
    
}
  p.playGame = function (e) {
      this.dispatchEvent(game.GameStateEvents.GAME);
   }
p.onButtonOver = function () {
    this.buttonColor = this.overColor;
    this.drawButton();
}


  window.ui.SimpleButton = SimpleButton;
}());





/* let label;
let width;
let height;
let background;
let labelTxt;
let fontSize = 24;
let borderColor = '#000';
let buttonColor = '#ccc';
let upColor = '#ccc';
let overColor = '#aaa';

let Container_initialize = p.initialize;
   */


})