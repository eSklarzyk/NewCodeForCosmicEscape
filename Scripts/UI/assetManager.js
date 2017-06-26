/*

(function () {
    (<any>window).game = (<any>window).game || {};

   let AssetManager = function () {
      this.initialize();
   }
   let p = AssetManager.prototype = new createjs.EventDispatcher();
   this.EventDispatcher_initialize = this.initialize;
  
 
//graphics
this.GAME_SPRITES = 'game sprites';

//data
this.GAME_SPRITES_DATA = 'game sprites data';

//events
this.ASSETS_PROGRESS = 'assets progress';
this.ASSETS_COMPLETE = 'assets complete';

this.assetsPath = './assets/';

this.queue = null;
this.loadManifest = null;
this.loadProgress = 0;

 this.initialize = function () {
      this.EventDispatcher_initialize();
this.loadManifest = [
   {id:this.GAME_SPRITES_DATA, src:this.assetsPath +
      'NewSpriteSheet.png.json'},
   {id:this.GAME_SPRITES, src:this.assetsPath + 'NewSpriteSheet.png.png'}
 ];

}

this.preloadAssets = function () {
 this.queue.on('progress',this.assetsProgress,this);
   this.queue.on('complete',this.assetsLoaded,this);
   this.queue.loadManifest(this.loadManifest);
}

this.assetsProgress = function (e) {
   this.loadProgress = e.progress;
   this.dispatchEvent(this.ASSETS_PROGRESS);
}
this.assetsLoaded = function (e) {
   this.dispatchEvent(this.ASSETS_COMPLETE);
}

this.getAsset = function (asset) {
   return this.queue.getResult(asset);
}


   (<any>window).AssetManager = AssetManager;
}());
*/ 
//# sourceMappingURL=assetManager.js.map