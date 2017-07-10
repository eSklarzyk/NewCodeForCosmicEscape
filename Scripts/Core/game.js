/// <reference path="_reference.ts"/>
var core;
(function (core) {
    var canvas = document.getElementById("canvas");
    //scene variables
    var currentScene;
    var menu;
    // let over: scenes.Over;
    var play;
    //asset manifest
    var assetData = [
        { id: "player ", src: "../../Assets/images/player.png " },
        { id: "background ", src: " ../../Assets/images/background.png" },
        { id: "bullet ", src: " ../../Assets/images/laserRed.png" }
    ];
    function preload() {
        core.assets = new createjs.LoadQueue();
        core.assets.on("complete", init, this);
        core.assets.loadManifest(assetData);
    }
    function init() {
        core.stage = new createjs.Stage(canvas);
        core.stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", gameLoop);
        core.scene = config.Scene.MENU;
        changeScene();
    }
    function gameLoop(event) {
        currentScene.Update();
        core.stage.update();
    }
    function changeScene() {
        //launch the scenes
        switch (core.scene) {
            case config.Scene.MENU:
                core.stage.removeAllChildren();
                menu = new scenes.Menu();
                currentScene = menu;
                break;
            // Show the PLAY Scene
            case config.Scene.PLAY:
                core.stage.removeAllChildren();
                play = new scenes.Play();
                currentScene = play;
                break;
        }
    }
    core.changeScene = changeScene;
    window.addEventListener("load", preload);
})(core || (core = {}));
//# sourceMappingURL=game.js.map