'use strict'

class Global{
    constructor(){
        let canvas = document.getElementById("canvas");
        this.context = canvas.getContext('2d');

        this.man = new Man(335, 170);
        this.pole = new Pole("#654321", 450, 145);

        this.endGameMessage = new Message(0, 140, "Sorry, you lost. Better luck next time.");
    }

    createCanvasBackground(){
        this.context.fillStyle = "lightgray";
        this.context.fillRect(0, 0, 800, 800);
    }

    clearBoard(){
        this.context.clearRect(0, 0, 800, 800);
        this.createCanvasBackground();
    }
}