module objects {
    export class _Player extends createjs.Bitmap {


        moveLeft: boolean = false;
        moveRight: boolean = false;
        moveUp: boolean = false;
        moveDown: boolean = false;

        speed: number = 5;
        hit: boolean = false;
        health: number = 100;
        shield: number = 100;
        width: number;
        height: number;
        hold: any;
        isColliding: boolean;
        //bullet:_Bullet;
        Loaded: number[];
        canvas = document.getElementById("canvas");


        constructor() {
            super("./Assets/Sprites/player.png");

            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            window.addEventListener('keydown', this.KeyDown.bind(this), false);
            window.addEventListener('keyup', this.KeyUp.bind(this), false);
            window.addEventListener('click', this.Shoot.bind(this),false);

            this.x = 320;
            this.y = 240;

            this.Start();
        }

        private _reset(): void {
            this.x = 640/2;
            this.y = 480/2;
        }

        public Start(): void {
            //this._reset();
            this.isColliding = false;
            console.log("player working");
        }

        public Update(): void {
            if(this.moveLeft) {
                console.log("moving left");
                this.x -= 10;
            }

            if(this.moveRight) {
                this.x += 10;
            }

            if(this.moveUp) {
                this.y -= 10;
            }

            if(this.moveDown) {
                this.y += 10;
            }

            
            
        }

        public Shoot(stage: any) {
            console.log("Fire Bullet!");
            let bullet:objects._Bullet = new objects._Bullet();
            bullet.x = this.x;
            bullet.y = this.y;
            bullet.bulletFire(stage);
        }

        public Damage(dam: number) {
            this.shield -= dam;
            if (this.shield <= 0) {
                this.health -= dam;
                if (this.health <= 0) {
                    
                }
            }
        }

        public KeyDown(event:KeyboardEvent) {
            //this.hold = event.target;
            switch (event.keyCode) {
                case 38: /*up arrow*/
                case 87: /* W Key */
                    if (this.y >= 10) {
                        this.y -= 10;
                    }
                    console.log("move up");
                    this.moveUp = true;

                    break;
                case 37: /*left arrow*/
                case 65: /* A Key */
                    if (this.x >= 10) {
                        this.x -= 10;
                    }
                    console.log("move Left");
                    this.moveLeft = true;
                    break;
                case 40: /*down arrow*/
                case 83: /* S Key */
                    if (this.y <= 395)//player sprit height 85
                    {
                        this.y += 10;
                    }
                    console.log("move down");
                    this.moveDown = true;
                    break;
                case 39: /*right arrow*/
                case 68: /* D Key */
                    if (this.x <= 530)//player sprit width 110
                    {
                        this.x += 10;
                    }

                    console.log("move right");
                    this.moveRight = true;
                    break;
                case 81: /* pause */
                    //add paused/suiside
                    break;
            }
        }

        public KeyUp(event:KeyboardEvent) {
            //this.hold = event.target;
            switch (event.keyCode) {
                case 38: /*up arrow*/
                case 87: /* W Key */
                    if (this.y >= 10) {
                        this.y -= 10;
                    }
                    console.log("move up");
                    this.moveUp = false;

                    break;
                case 37: /*left arrow*/
                case 65: /* A Key */
                    if (this.x >= 10) {
                        this.x -= 10;
                    }
                    console.log("move Left");
                    this.moveLeft = false;
                    break;
                case 40: /*down arrow*/
                case 83: /* S Key */
                    if (this.y <= 395)//player sprit height 85
                    {
                        this.y += 10;
                    }
                    console.log("move down");
                    this.moveDown = false;
                    break;
                case 39: /*right arrow*/
                case 68: /* D Key */
                    if (this.x <= 530)//player sprit width 110
                    {
                        this.x += 10;
                    }

                    console.log("move right");
                    this.moveRight = false;
                    break;
                case 81: /* pause */
                    //add paused/suiside
                    break;
            }
        }
    }
}