'use strict'

let global;

function init(){
    global = new Global();
    global.createCanvasBackground();
    startGame();
}

function startGame(){
    global.pole.draw();
}

function restartGame(){
    global.clearBoard();
    startGame();
}