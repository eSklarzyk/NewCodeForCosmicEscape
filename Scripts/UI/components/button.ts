
module objects {  //MODULE == namespace

export class Button extends createjs.Bitmap { //blueprint  //export allows you to get a handle through other files


constructor(){ //function initializes
  super ("../../Assets/Sprites/enemyUFO.png")    //asking path for bitmap
this.Start();

}


private Start(): void{

    this.regX = this.getBounds().width * 0.5;
    this.regY = this.getBounds().height * 0.5;

    this.y = 430;
    this.x = 330

}

public Update():void {
 //this.x = stage;
}

}} 