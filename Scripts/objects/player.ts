module objects {
    export class _Player extends createjs.Bitmap {

        asteroid: objects._Asteroid = new objects._Asteroid();
        moveLeft: boolean = false;
        moveRight: boolean = false;
        moveUp: boolean = false;
        moveDown: boolean = false;
        speed: number = 3;
        //hit: boolean = false;
        health: number = 100;
        shield: number = 100;
        width: number = 75;
        height: number = 99;
        //rot: number;
        //iscollision: boolean = false;
        bullet: _Bullet;
        //Loaded: number[];
        data: any;
        _Data: any;
        sprite:any;
        MX:number;
        MY:number;
        canvas = document.getElementById("canvas");

        constructor() {
            super("./Assets/Sprites/player.png");
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            window.addEventListener('keydown', this.KeyDown.bind(this), false);
            window.addEventListener('keyup', this.KeyUp.bind(this), false);

            this.Start();
        }

        private _reset(): void {
            this.x = 640 / 2;
            this.y = 480 / 2;
        }

        public Start(): void {
            this._reset();

           /*this.data = {
                images: ["./Assets/Sprites/spritesheetv2.png"],

                frames: [
                    [1, 1, 162, 128, 0, 0, 0],
                    [165, 1, 89, 68, 0, 0, 0],
                    [165, 71, 67, 71, 0, 0, 0],
                    [234, 71, 18, 40, 0, 0, 0],
                    [234, 113, 18, 39, 0, 0, 0],
                    [1, 131, 118, 160, 0, 0, 0],
                    [121, 144, 111, 125, 0, 0, 0],
                    [121, 271, 127, 128, 0, 0, 0],
                    [1, 293, 117, 125, 0, 0, 0],
                    [120, 401, 120, 120, 0, -7, -7],
                    [1, 420, 95, 96, 0, 0, 0],
                    [1, 518, 92, 66, 0, 0, 0],
                    [1, 586, 87, 33, 0, -7, -5],
                    [90, 586, 46, 49, 0, 0, 0],
                    [95, 523, 58, 58, 0, 0, 0],
                    [138, 583, 48, 50, 0, 0, 0],
                    [188, 523, 65, 67, 0, 0, 0],
                    [188, 592, 45, 15, 0, 0, 0]
                ],

                animations: {
                    devilray: { frames: [0] },
                    asteroid: { frames: [1] },
                    asteroid4: { frames: [2] },
                    missile1: { frames: [3] },
                    missile2: { frames: [4] },
                    mecha_body: { frames: [5] },
                    player: { frames: [6] },
                    enemypodcharged: { frames: [7] },
                    ship2: { frames: [8] },
                    shield2: { frames: [9] },
                    hummer: { frames: [10] },
                    fighter1: { frames: [11] },
                    ebullet1: { frames: [12] },
                    shield_pickup: { frames: [13] },
                    asteroid3: { frames: [14] },
                    asteroid2: { frames: [15] },
                    drone: { frames: [16] },
                    ebullet2: { frames: [17] }
                },
            }

            this._Data = new createjs.SpriteSheet(this.data);
            this.sprite = new createjs.Sprite(this._Data, "player");
            createjs.DisplayObject = this.sprite;*/
            console.log("player working");
        }

        public Update(): void {
            
            this.rotation = Math.atan2(this.MY - this.y, this.MX - this.x) * 180 / Math.PI;

            if(this.moveLeft && this.x >= 0 + 50) {
                this.x -= this.speed;
            }

            if (this.moveRight && this.x <= 640 - 50) {
                this.x += this.speed;
            }
            if(this.moveUp && this.y >= 0 + 50) {
                this.y -= this.speed;
            }

            if(this.moveDown && this.y <= 480 - 50) {
                this.y += this.speed;
            }
        }

        public Damage(dam: number) {
            this.shield -= dam;
            if (this.shield <= 0) {
                this.health -= dam;
                if (this.health <= 0) {
                    console.log("DEAD");
                }
            }
        }

        public KeyDown(event: KeyboardEvent) {

            switch (event.keyCode) {
                case 38: /*up arrow*/
                case 87: /* W Key */
                        this.moveUp = true;
                    break;

                case 37: /*left arrow*/
                case 65: /* A Key */
                        this.moveLeft = true;
                    break;

                case 40: /*down arrow*/
                case 83: /* S Key */
                        this.moveDown = true;
                    break;

                case 39: /*right arrow*/
                case 68: /* D Key */
                        this.moveRight = true;
                    break;

                case 81: /* pause */
                    console.log("paused");
                    //add paused/suiside
                    break;
            }
        }

        public KeyUp(event: KeyboardEvent) {
            switch (event.keyCode) {
                case 38: /*up arrow*/
                case 87: /* W Key */
                    this.moveUp = false;
                    break;

                case 37: /*left arrow*/
                case 65: /* A Key */
                    this.moveLeft = false;
                    break;
                    
                case 40: /*down arrow*/
                case 83: /* S Key */
                    this.moveDown = false;
                    break;

                case 39: /*right arrow*/
                case 68: /* D Key */
                    this.moveRight = false;
                    break;

                case 81: /* pause */
                    console.log("unpaused");
                    //add paused/suiside
                    break;
            }
        }

        /*public playerCol()
        {
            if (utility.Vector2.Distance(new utility.Vector2(this.x, this.y), new utility.Vector2(this.asteroid.x, this.asteroid.y)) < 150)
            {
                this.Damage(50);
                console.log("hit! on player");
            }
        }*/

        public giveData(SX:any, SY:any)
        {
            this.MX = SX;
            this.MY = SY;     
        }
    }
}