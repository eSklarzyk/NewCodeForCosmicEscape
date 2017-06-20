var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var _Player = (function (_super) {
        __extends(_Player, _super);
        function _Player() {
            var _this = _super.call(this, "./Assets/Sprites/player.png") || this;
            _this.asteroid = new objects._Asteroid();
            _this.moveLeft = false;
            _this.moveRight = false;
            _this.moveUp = false;
            _this.moveDown = false;
            _this.speed = 3;
            //hit: boolean = false;
            _this.health = 100;
            _this.shield = 100;
            _this.width = 75;
            _this.height = 99;
            _this.canvas = document.getElementById("canvas");
            _this.regX = _this.width * 0.5;
            _this.regY = _this.height * 0.5;
            window.addEventListener('keydown', _this.KeyDown.bind(_this), false);
            window.addEventListener('keyup', _this.KeyUp.bind(_this), false);
            _this.Start();
            return _this;
        }
        _Player.prototype._reset = function () {
            this.x = 640 / 2;
            this.y = 480 / 2;
        };
        _Player.prototype.Start = function () {
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
        };
        _Player.prototype.Update = function () {
            this.rotation = Math.atan2(this.MY - this.y, this.MX - this.x) * 180 / Math.PI;
            if (this.moveLeft && this.x >= 0 + 50) {
                this.x -= this.speed;
            }
            if (this.moveRight && this.x <= 640 - 50) {
                this.x += this.speed;
            }
            if (this.moveUp && this.y >= 0 + 50) {
                this.y -= this.speed;
            }
            if (this.moveDown && this.y <= 480 - 50) {
                this.y += this.speed;
            }
        };
        _Player.prototype.Damage = function (dam) {
            this.shield -= dam;
            if (this.shield <= 0) {
                this.health -= dam;
                if (this.health <= 0) {
                    console.log("DEAD");
                }
            }
        };
        _Player.prototype.KeyDown = function (event) {
            switch (event.keyCode) {
                case 38: /*up arrow*/
                case 87:
                    this.moveUp = true;
                    break;
                case 37: /*left arrow*/
                case 65:
                    this.moveLeft = true;
                    break;
                case 40: /*down arrow*/
                case 83:
                    this.moveDown = true;
                    break;
                case 39: /*right arrow*/
                case 68:
                    this.moveRight = true;
                    break;
                case 81:
                    console.log("paused");
                    //add paused/suiside
                    break;
            }
        };
        _Player.prototype.KeyUp = function (event) {
            switch (event.keyCode) {
                case 38: /*up arrow*/
                case 87:
                    this.moveUp = false;
                    break;
                case 37: /*left arrow*/
                case 65:
                    this.moveLeft = false;
                    break;
                case 40: /*down arrow*/
                case 83:
                    this.moveDown = false;
                    break;
                case 39: /*right arrow*/
                case 68:
                    this.moveRight = false;
                    break;
                case 81:
                    console.log("unpaused");
                    //add paused/suiside
                    break;
            }
        };
        /*public playerCol()
        {
            if (utility.Vector2.Distance(new utility.Vector2(this.x, this.y), new utility.Vector2(this.asteroid.x, this.asteroid.y)) < 150)
            {
                this.Damage(50);
                console.log("hit! on player");
            }
        }*/
        _Player.prototype.giveData = function (SX, SY) {
            this.MX = SX;
            this.MY = SY;
        };
        return _Player;
    }(createjs.Bitmap));
    objects._Player = _Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map