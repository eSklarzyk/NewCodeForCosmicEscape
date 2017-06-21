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
    var Button = (function (_super) {
        __extends(Button, _super);
        function Button(stage) {
            var _this = _super.call(this, "../../Assets/Sprites/enemyUFO.png") //asking path for bitmap
             || this;
            _this.stage = stage;
            _this.initialize();
            return _this;
        }
        Button.prototype.initialize = function () {
            this.drawButton(); // this.setButtonListeners();
            this.setButtonListeners(event);
        };
        Button.prototype.drawButton = function () {
            this.y = 330;
            this.x = 300; // fixed position
            var butn;
            this.stage.addChild(butn);
        };
        Button.prototype.setButtonListeners = function (event) {
            this.cursor = 'pointer';
            this.on('click', this.action);
        };
        Button.prototype.action = function (event) {
            console.log('game play');
            //this.dispatchEvent(game.GameStateEvents.GAME);
        };
        Button.prototype.Update = function () {
            var x = this.stage;
            var y = this.stage;
        };
        return Button;
    }(createjs.Bitmap));
    objects.Button = Button;
})(objects || (objects = {}));
//# sourceMappingURL=button.js.map