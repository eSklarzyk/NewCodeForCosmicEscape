
 (function () {

(<any>window).game = (<any>window).game || {};

let GameStates = {
MAIN_MENU : 0,
RUN_SCENE: 1,
GAME:10,
GAME_OVER:20
}


let GameStateEvents: {
    MAIN_MENU:  'main-menu-event';
    GAME_OVER: 'game-over-event';
    GAME: 'game-event' ;
    
}

(<any>window).game.GameStates = GameStates;
(<any>window).game.GameStateEvents = GameStateEvents;  

} () );

