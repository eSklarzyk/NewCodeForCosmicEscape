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
            this.x = 640 / 4;
            this.y = 480 / 4;
        }

        public Start(): void {
            this._reset();
        }


        public Update(): void {
        
    }

    }
}