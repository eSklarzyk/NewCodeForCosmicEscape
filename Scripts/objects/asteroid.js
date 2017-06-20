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
    var _Asteroid = (function (_super) {
        __extends(_Asteroid, _super);
        function _Asteroid() {
            var _this = _super.call(this, "./Assets/Sprites/meteorSmall.png") || this;
            _this.width = 44;
            _this.height = 42;
            _this.regX = _this.width * 0.5;
            _this.regY = _this.height * 0.5;
            return _this;
        }
        _Asteroid.prototype._reset = function () {
            this.x = 100;
            this.y = 100;
        };
        _Asteroid.prototype.Start = function () {
            this._reset();
        };
        _Asteroid.prototype.Update = function () {
        };
        return _Asteroid;
    }(createjs.Bitmap));
    objects._Asteroid = _Asteroid;
})(objects || (objects = {}));
//# sourceMappingURL=asteroid.js.map