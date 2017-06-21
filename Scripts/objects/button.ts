
module objects {  //MODULE == namespace

export class Button extends createjs.Bitmap { //blueprint  //export allows you to get a handle through other files
stage: createjs.Stage;
    
constructor(stage:createjs.Stage){ //function initializes
  super ("../../Assets/Sprites/enemyUFO.png")    //asking path for bitmap
  this.stage=stage;
  this.initialize();

}
private initialize():void {
this.drawButton() ; // this.setButtonListeners();
this.setButtonListeners(event);

}

public drawButton(): void{
this.y = 330 ; this.x= 300; // fixed position
var butn : Button;
this.stage.addChild(butn);


}

private  setButtonListeners(event) {
this.cursor = 'pointer';
this.on('click', this.action)

}

 action(event){
console.log('game play')
  //this.dispatchEvent(game.GameStateEvents.GAME);
}


public Update():void {
 var x = this.stage;
 var y = this.stage;
}

}} 