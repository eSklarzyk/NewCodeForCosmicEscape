module objects {
    export class _Asteroid extends createjs.Bitmap {

        width: number = 44;
        height: number = 42;

         constructor() {
            super("./Assets/Sprites/meteorSmall.png");
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
         }

          private _reset(): void {
            this.x = 100;
            this.y = 100;
        }

        public Start(): void {
            this._reset();
        }


        public Update(): void {
        
    }

    }
}