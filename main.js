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
    global.man.bodyPartCount = 0;
    startGame();
}

function addBodyPart(){
    console.log("button clicked");
    switch(global.man.bodyPartCount){
        case 0:
            global.man.head.drawHead();
            break;
        case 1:
            global.man.body.drawBody();
            break;
        case 2:
            global.man.arm.drawLeftArm();
            break;
        case 3:
            global.man.arm.drawRightArm();
            break;
        case 4:
            global.man.leg.drawLeftLeg();
            break;
        case 5:
            global.man.leg.drawRightLeg();
            break;
        case 6:
            gameOver();
            break;
        default:
            console.log("entered default case of body part switch statement");
            break;
    }
    global.man.bodyPartCount++;
}

function gameOver(){
    global.endGameMessage.writeMessage();
}