'use strict'

class Message{
    constructor(over, down, message){
        this.over = over;
        this.down = down; 
        this.message = message;
    }

    writeMessage(){
        global.context.fillStyle = "red";
        global.context.fillRect(this.over, this.down, 800, 300);

        global.context.fillStyle = "white";
        global.context.font = "30px monospace";
        global.context.fillText(this.message, this.over + 10, this.down + 150);
    }
}