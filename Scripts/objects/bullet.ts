module objects {
    export class _Bullet extends createjs.Bitmap {

        player: objects._Player = new objects._Player();
        width: number = 9;
        height: number = 33;
        speed: number = 3;
        collision: boolean = false;
        shoot: boolean = false;
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
            this.bulletDespawn();
        }

        public bulletDespawn(): void {
            if (this.x >= 640 || this.x <= 0 || this.y >= 480 || this.y <= 0 || this.collision) {
                this.shoot = false;
                this._reset();
            }
        }

        public bulletFire():void
        {
            this.rotation = Math.atan2(this.MY - this.y,this.MX - this.x) * 180 / Math.PI;
            this.shoot = true;
        }

        public bulletMove(posX:number, posY:number): void {
            if(this.shoot)
            {
                //make bullet go forward
            }
        }

        public giveData(SX:any, SY:any)
        {
            this.MX = SX;
            this.MY = SY;
        }
    }
}
