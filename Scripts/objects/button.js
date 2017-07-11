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
        function Button() {
            var _this = _super.call(this, "../../Assets/Sprites/enemyUFO.png") //asking path for bitmap
             || this;
            _this.drawButton();
            _this.initialize();
            return _this;
        }
        Button.prototype.drawButton = function () {
            var label;
            var width;
            var height;
            var background;
            var labelTxt;
            var fontSize;
            var borderColor = '#000';
            var buttonColor = '#ccc';
            var but;
        };
        Button.prototype.initialize = function () {
            this.drawButton(); // this.setButtonListeners();
            this.setButtonListeners(event);
        };
        Button.prototype.setButtonListeners = function (event) {
            this.cursor = 'pointer';
            this.on('click', this.playGame);
        };
        Button.prototype.playGame = function (event) {
            console.log('game play');
            //this.dispatchEvent(game.GameStateEvents.GAME);
        };
        Button.prototype.Update = function () {
            //this.x = stage;
        };
        return Button;
    }(createjs.Bitmap));
    objects.Button = Button;
})(objects || (objects = {}));
//# sourceMappingURL=button.js.map