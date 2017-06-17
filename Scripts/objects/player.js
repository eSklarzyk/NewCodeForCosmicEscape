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
            _this.moveLeft = false;
            _this.moveRight = false;
            _this.moveUp = false;
            _this.moveDown = false;
            _this.speed = 5;
            _this.hit = false;
            _this.health = 100;
            _this.shield = 100;
            _this.canvas = document.getElementById("canvas");
            _this.regX = _this.width * 0.5;
            _this.regY = _this.height * 0.5;
            window.addEventListener('keydown', _this.KeyDown.bind(_this), false);
            window.addEventListener('keyup', _this.KeyUp.bind(_this), false);
            window.addEventListener('click', _this.Shoot.bind(_this), false);
            _this.x = 320;
            _this.y = 240;
            _this.Start();
            return _this;
        }
        _Player.prototype._reset = function () {
            this.x = 640 / 2;
            this.y = 480 / 2;
        };
        _Player.prototype.Start = function () {
            //this._reset();
            this.isColliding = false;
            console.log("player working");
        };
        _Player.prototype.Update = function () {
            if (this.moveLeft) {
                console.log("moving left");
                this.x -= 10;
            }
            if (this.moveRight) {
                this.x += 10;
            }
            if (this.moveUp) {
                this.y -= 10;
            }
            if (this.moveDown) {
                this.y += 10;
            }
        };
        _Player.prototype.Shoot = function (stage) {
            console.log("Fire Bullet!");
            var bullet = new objects._Bullet();
            bullet.x = this.x;
            bullet.y = this.y;
            bullet.bulletFire(stage);
        };
        _Player.prototype.Damage = function (dam) {
            this.shield -= dam;
            if (this.shield <= 0) {
                this.health -= dam;
                if (this.health <= 0) {
                }
            }
        };
        _Player.prototype.KeyDown = function (event) {
            //this.hold = event.target;
            switch (event.keyCode) {
                case 38: /*up arrow*/
                case 87:
                    if (this.y >= 10) {
                        this.y -= 10;
                    }
                    console.log("move up");
                    this.moveUp = true;
                    break;
                case 37: /*left arrow*/
                case 65:
                    if (this.x >= 10) {
                        this.x -= 10;
                    }
                    console.log("move Left");
                    this.moveLeft = true;
                    break;
                case 40: /*down arrow*/
                case 83:
                    if (this.y <= 395) {
                        this.y += 10;
                    }
                    console.log("move down");
                    this.moveDown = true;
                    break;
                case 39: /*right arrow*/
                case 68:
                    if (this.x <= 530) {
                        this.x += 10;
                    }
                    console.log("move right");
                    this.moveRight = true;
                    break;
                case 81:
                    //add paused/suiside
                    break;
            }
        };
        _Player.prototype.KeyUp = function (event) {
            //this.hold = event.target;
            switch (event.keyCode) {
                case 38: /*up arrow*/
                case 87:
                    if (this.y >= 10) {
                        this.y -= 10;
                    }
                    console.log("move up");
                    this.moveUp = false;
                    break;
                case 37: /*left arrow*/
                case 65:
                    if (this.x >= 10) {
                        this.x -= 10;
                    }
                    console.log("move Left");
                    this.moveLeft = false;
                    break;
                case 40: /*down arrow*/
                case 83:
                    if (this.y <= 395) {
                        this.y += 10;
                    }
                    console.log("move down");
                    this.moveDown = false;
                    break;
                case 39: /*right arrow*/
                case 68:
                    if (this.x <= 530) {
                        this.x += 10;
                    }
                    console.log("move right");
                    this.moveRight = false;
                    break;
                case 81:
                    //add paused/suiside
                    break;
            }
        };
        return _Player;
    }(createjs.Bitmap));
    objects._Player = _Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map