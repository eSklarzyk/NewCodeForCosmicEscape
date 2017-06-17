// IIFE - Immediately Invoked Function Expression
(function () {
    var canvas = document.getElementById("canvas"); // hook into the canvas element
    var stage;
    var player;
    var bullet;
    function Start() {
        stage = new createjs.Stage(canvas); // create a stage container
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", Update); // call Update every frame
        /*data = {
          images: ["./Assets/Sprites/TexturePackerV.png"],
          frames: [
            [1, 1, 151, 118, 0, 0, 0],
            [154, 1, 99, 75, 0, 0, 0],
            [1, 121, 136, 111, 0, 0, 0],
            [154, 78, 99, 75, 0, 0, 0],
            [1, 234, 91, 91, 0, 0, 0],
            [139, 155, 90, 77, 0, 0, 0],
            [94, 234, 90, 77, 0, 0, 0],
            [94, 313, 98, 50, 0, 0, 0],
            [186, 234, 56, 54, 0, 0, 0],
            [1, 327, 44, 42, 0, 0, 0],
            [194, 290, 56, 54, 0, 0, 0],
            [231, 155, 9, 33, 0, 0, 0],
            [47, 327, 9, 33, 0, 0, 0]
          ],
    
          animations: {
            shield: { frames: [0] },
            player: { frames: [1] },
            meteorBig: { frames: [2] },
            playerDamaged: { frames: [3] },
            enemyUFO: { frames: [4] },
            playerLeft: { frames: [5] },
            playerRight: { frames: [6] },
            enemyShip: { frames: [7] },
            laserGreenShot: { frames: [8] },
            meteorSmall: { frames: [9] },
            laserRedShot: { frames: [10] },
            laserGreen: { frames: [11] },
            laserRed: { frames: [12] }
          },
        }
    
        _Data = new createjs.SpriteSheet(data);
        player = new createjs.Sprite(_Data, "player");
        bullet = new createjs.Sprite(_Data, "laserRed");
        asteroid = new createjs.Sprite(_Data, "meteorSmall");*/
        Main();
    }
    // Game Loop - triggers every frame
    function Update() {
        player.Update();
        bullet.Update();
        stage.update(); // refresh the stage
    }
    function Main() {
        player = new objects._Player();
        stage.addChild(player);
        bullet = new objects._Bullet();
        stage.addChild(bullet);
    }
    /*function spawnAsteroid() {
      stage.addChild(asteroid);
      asteroid.x = Math.floor((Math.random() * 640));
      asteroid.y = Math.floor((Math.random() * -10) - 1);//top of stage?
      playerXHold = player.x;
      playerYHold = player.y;
      check = 0;
      spawned = true;
    }
  
    function asteroidDespawn() {
      if (asteroid.x >= 640 || asteroid.x <= 0 || asteroid.y >= 480 || hit) {
        stage.removeChild(asteroid);
        spawned = false;
      }
    }
  
    function asteroidMove()
    {
      asteroid.y += speed;
    }*/
    window.onload = Start;
})();
//# sourceMappingURL=game.js.map