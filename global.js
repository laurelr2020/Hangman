'use strict'

class Global{
    constructor(){
        let canvas = document.getElementById("canvas");
        this.context = canvas.getContext('2d');
        this.man = new Man(335, 170);
        this.pole = new Pole("#654321", 450, 145);
    }

    createCanvasBackground(){
        this.context.fillStyle = "#fffdd0";
        this.context.fillRect(0, 0, 800, 800);
    }
}