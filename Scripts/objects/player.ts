module objects {
  
    export class Player extends objects.GameObject {
         // PRIVATE INSTANCE VARIABLES ++++++++++++++++++++++++++++

        // PUBLIC PROPERTIES +++++++++++++++++++++++++++++++++++++++

        // CONSTRUCTORS 
      //creates an instance of player
        constructor(imageString:string) {
            super(imageString)

//window.addEventListener('keydown', this.KeyDown.bind(this), false);
// window.addEventListener('keyup', this.KeyUp.bind(this), false);

            this.start();
        }

         // This method checks if the object has reached its boundaries
       
        private _checkBounds():void {
            // checkbounds to stop player from going outside

            // check right bounds
            if(this.x >= (640 - (this.width * 0.5))) {
                this.x = (640 - (this.width * 0.5));
            }

            // check left bounds
            if(this.x <= (0 + (this.width * 0.5))) {
                this.x = (0 + (this.width * 0.5));
            }
        }



        // PUBLIC METHODS
        // used to initialize public properties 
        
        public start():void {
            this.y = 430;
        }

        // updates the object's properties every time it's called
       
        public update():void {
            // player to follow mouse
            this.position = new Vector2(this.x, this.y);
            this.x = core.stage.mouseX;
            this._checkBounds();
        }
    }
}