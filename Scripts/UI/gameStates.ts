

(function (window) {

window.game = window.game || {};

let GameStates = {
MAIN_MENU : 0,
RUN_SCENE: 1,
GAME:10,
GAME_OVER:20
}

let GameStateEvents ={
    MAIN_MENU: 'main-menu-event',
    GAME_OVER: 'game-over-event',
    GAME: 'game-event'
}

window.game.GameStates = GameStates;
window.game.GameStateEvents = GameStateEvents;

} () );

