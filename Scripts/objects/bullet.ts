module objects {
    export class _Bullet extends createjs.Bitmap {

        player: _Player;
        width: number;
        height: number;
        speed: number;
        MX: number;
        MY: number;

        constructor() {
            super("./Assets/Sprites/laserRed.png");
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
        }

        private _reset(): void {
            this.x = this.player.x;
            this.y = this.player.y;
        }

        public Start(): void {
            this._reset();
        }

        public Update(): void {
        
        }

        public bulletDespawn(): void {
            if (this.x >= 640 || this.x <= 0 || this.y >= 480 || this.y <= 0) {
                this._reset();
            }
        }

        public bulletFire(stage: any):void
        {
            this.MX = stage.mouseX + 10000;
            this.MY = stage.mouseY + 10000;
            this.bulletMove(this.MX, this.MY);
            
        }

        public bulletMove(posX:number, posY:number): void {
            /*this.x -= (posX/);
            this.y -= ();*/
            console.log("bullet Move working");
        }
    }
}
