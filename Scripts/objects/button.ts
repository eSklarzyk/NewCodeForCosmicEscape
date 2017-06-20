
module objects {  //MODULE == namespace

export class Button extends createjs.Bitmap { //blueprint  //export allows you to get a handle through other files


constructor(){ //function initializes
  super ("../../Assets/Sprites/enemyUFO.png")    //asking path for bitmap
  this.drawButton();
  this.initialize();

}

public drawButton(): void{

    let label: string;
    let width;
    let height;
    let background;
    let labelTxt;
    let fontSize: string;
    let borderColor = '#000';
    let buttonColor = '#ccc';
    let but;

    

}

private initialize():void {
this.drawButton() ; // this.setButtonListeners();
this.setButtonListeners(event);

}

private  setButtonListeners(event) {
this.cursor = 'pointer';
this.on('click', this.playGame)

}

 playGame(event){
console.log('game play')
  //this.dispatchEvent(game.GameStateEvents.GAME);
}



public Update():void {
 //this.x = stage;
}

}} 