module objects {
    export class _Bullet extends createjs.Bitmap {

        player: objects._Player = new objects._Player();
        width: number = 33;
        height: number = 9;
        speed: number = 3;
        collision: boolean = false;
        shoot: boolean = false;
        MX: number;
        MY: number;
        HoldMX: number;
        HoldMY: number;

        constructor() {
            super("./Assets/Sprites/laserRed.png");
            window.addEventListener('click', this.bulletFire.bind(this), false);
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
        }

        private _reset(): void {
            if(this.shoot == false)
            {
                this.x = this.player.x;
                this.y = this.player.y;
            }
        }

        public Start(): void {
            this._reset();
        }

        public Update(): void {
            this._reset();
            this.bulletDespawn();
            this.bulletMove(this.HoldMX, this.HoldMY);
        }

        public bulletDespawn(): void {
            if (this.x >= 640 || this.x <= 0 || this.y >= 480 || this.y <= 0 || this.collision) {
                this.shoot = false;
                this._reset();
            }
        }

        public bulletFire():void
        {
            if(this.shoot == false)
            {
            this.rotation = Math.atan2(this.MY - this.y,this.MX - this.x) * 180 / Math.PI;
            this.HoldMX = this.MX;
            this.HoldMY = this.MY;
            this.shoot = true;
            }
        }

        public bulletMove(posX:number, posY:number): void {
            if(this.shoot == true)
            {
                this.x -= this.HoldMX * 0.05;
                this.y -= this.HoldMY * 0.05;
            }
        }

        public giveData(SX:any, SY:any)
        {
            this.MX = SX;
            this.MY = SY;
        }
    }
}
