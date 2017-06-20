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
    var _Bullet = (function (_super) {
        __extends(_Bullet, _super);
        function _Bullet() {
            var _this = _super.call(this, "./Assets/Sprites/laserRed.png") || this;
            _this.player = new objects._Player();
            _this.width = 33;
            _this.height = 9;
            _this.speed = 3;
            _this.collision = false;
            _this.shoot = false;
            window.addEventListener('click', _this.bulletFire.bind(_this), false);
            _this.regX = _this.width * 0.5;
            _this.regY = _this.height * 0.5;
            return _this;
        }
        _Bullet.prototype._reset = function () {
            if (this.shoot == false) {
                this.x = this.player.x;
                this.y = this.player.y;
            }
        };
        _Bullet.prototype.Start = function () {
            this._reset();
        };
        _Bullet.prototype.Update = function () {
            this._reset();
            this.bulletDespawn();
            this.bulletMove(this.HoldMX, this.HoldMY);
        };
        _Bullet.prototype.bulletDespawn = function () {
            if (this.x >= 640 || this.x <= 0 || this.y >= 480 || this.y <= 0 || this.collision) {
                this.shoot = false;
                this._reset();
            }
        };
        _Bullet.prototype.bulletFire = function () {
            if (this.shoot == false) {
                this.rotation = Math.atan2(this.MY - this.y, this.MX - this.x) * 180 / Math.PI;
                this.HoldMX = this.MX;
                this.HoldMY = this.MY;
                this.shoot = true;
            }
        };
        _Bullet.prototype.bulletMove = function (posX, posY) {
            if (this.shoot == true) {
                this.x -= this.HoldMX * 0.05;
                this.y -= this.HoldMY * 0.05;
            }
        };
        _Bullet.prototype.giveData = function (SX, SY) {
            this.MX = SX;
            this.MY = SY;
        };
        return _Bullet;
    }(createjs.Bitmap));
    objects._Bullet = _Bullet;
})(objects || (objects = {}));
//# sourceMappingURL=bullet.js.map