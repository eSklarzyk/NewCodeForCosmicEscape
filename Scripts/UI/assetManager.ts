(function () {
    window.game = window.game || {};

   var AssetManager = function () {
      this.initialize();
   }
   var p = AssetManager.prototype = new createjs.EventDispatcher();
   p.EventDispatcher_initialize = p.initialize;
  
 
//graphics
p.GAME_SPRITES = 'game sprites';

//data
p.GAME_SPRITES_DATA = 'game sprites data';

//events
p.ASSETS_PROGRESS = 'assets progress';
p.ASSETS_COMPLETE = 'assets complete';

p.assetsPath = './assets/';

p.queue = null;
p.loadManifest = null;
p.loadProgress = 0;

 p.initialize = function () {
      this.EventDispatcher_initialize();
this.loadManifest = [
   {id:this.GAME_SPRITES_DATA, src:this.assetsPath +
      'NewSpriteSheet.png.json'},
   {id:this.GAME_SPRITES, src:this.assetsPath + 'NewSpriteSheet.png.png'}
 ];

}  

p.preloadAssets = function () {
 this.queue.on('progress',this.assetsProgress,this);
   this.queue.on('complete',this.assetsLoaded,this);
   this.queue.loadManifest(this.loadManifest); 
}

p.assetsProgress = function (e) {
   this.loadProgress = e.progress;
   this.dispatchEvent(this.ASSETS_PROGRESS);
}
p.assetsLoaded = function (e) {
   this.dispatchEvent(this.ASSETS_COMPLETE);
}

p.getAsset = function (asset) {
   return this.queue.getResult(asset);
}


   window.AssetManager = AssetManager;
}());
