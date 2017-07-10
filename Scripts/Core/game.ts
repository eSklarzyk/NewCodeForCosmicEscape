/// <reference path="_reference.ts"/>

namespace core {

export let assets: createjs.LoadQueue;

let canvas: HTMLElement = document.getElementById("canvas");
export let stage: createjs.Stage;

//scene variables
let currentScene: objects.Scene;
export let scene:number;

  let menu: scenes.Menu;
   // let over: scenes.Over;
    let play: scenes.Play;

    //asset manifest
   let assetData: objects.Asset[] = [
{ id: "player ", src: "../../Assets/images/player.png "},
{ id: "background ", src: " ../../Assets/images/background.png"},
{ id: "bullet ", src: " ../../Assets/images/laserRed.png"}
    ];

 function preload():void{
assets = new createjs.LoadQueue();
assets.on("complete",init,this);
assets.loadManifest(assetData);
 }

function init():void{
stage = new createjs.Stage(canvas);
stage.enableMouseOver(20);
createjs.Ticker.framerate = 60;
createjs.Ticker.on("tick", gameLoop);


scene = config.Scene.MENU;
changeScene();

}

function gameLoop(event: createjs.Event): void {
currentScene.Update();
stage.update();
}

export function changeScene():void{
//launch the scenes
switch (scene) {

    case config.Scene.MENU:
    stage.removeAllChildren();
                menu = new scenes.Menu();
                currentScene = menu;
                break;
            // Show the PLAY Scene
            case config.Scene.PLAY:
                stage.removeAllChildren();
                play = new scenes.Play();
                currentScene = play;
                break;
           
           /*
            // Show the GAME OVER Scene
            case config.Scene.OVER:
                stage.removeAllChildren();
                over = new scenes.Over();
                currentScene = over;
                break;
*/
}
}
 
window.addEventListener("load",preload);
}
    
