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
            _this.regX = _this.width * 0.5;
            _this.regY = _this.height * 0.5;
            return _this;
        }
        _Bullet.prototype._reset = function () {
            this.x = this.player.x;
            this.y = this.player.y;
        };
        _Bullet.prototype.Start = function () {
            this._reset();
        };
        _Bullet.prototype.Update = function () {
        };
        _Bullet.prototype.bulletDespawn = function () {
            if (this.x >= 640 || this.x <= 0 || this.y >= 480 || this.y <= 0) {
                this._reset();
            }
        };
        _Bullet.prototype.bulletFire = function (stage) {
            this.MX = stage.mouseX + 10000;
            this.MY = stage.mouseY + 10000;
            this.bulletMove(this.MX, this.MY);
        };
        _Bullet.prototype.bulletMove = function (posX, posY) {
            /*this.x -= (posX/);
            this.y -= ();*/
            console.log("bullet Move working");
        };
        return _Bullet;
    }(createjs.Bitmap));
    objects._Bullet = _Bullet;
})(objects || (objects = {}));
//# sourceMappingURL=bullet.js.map