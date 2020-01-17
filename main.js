'use strict'

let global;

function init(){
    global = new Global();
    global.createCanvasBackground();

    global.pole.draw();
    global.man.draw();
}