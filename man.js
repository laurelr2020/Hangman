"use strict"

class Man{
    constructor(over, down){
        this.over = over;
        this.down = down;
        this.head = new Head();
        this.body = new Body();
        this.arm = new Arm();
        this.leg = new Leg();
    }

    draw(){
        this.head.drawHead(this.over, this.down);
        this.body.drawBody(this.over, this.down);
        this.arm.drawLeftArm(this.over, this.down);
        this.arm.drawRightArm(this.over, this.down);
        this.leg.drawLeftLeg(this.over, this.down);
        this.leg.drawRightLeg(this.over, this.down);
    }
}


class Head{
    drawHead(over, down){
        global.context.fillStyle = "blue";
        global.context.fillRect(over, down, 30, 30);
        this.drawNeck(over, down);
    }

    drawNeck(over, down){
        global.context.fillStyle = "blue";
        global.context.fillRect(over + 10, down + 30, 10, 15);
    }
}

class Body{
    drawBody(over, down){
        global.context.fillStyle = "red";
        global.context.fillRect(over - 10, down + 40, 50, 60);
    }
}

class Arm{
    drawLeftArm(over, down){
        global.context.fillStyle = "blue";
        global.context.fillRect(over - 15, down + 45, 5, 40);
    }

    drawRightArm(over, down){
        global.context.fillStyle = "blue";
        global.context.fillRect(over + 40, down + 45, 5, 40);
    }
}

class Leg{
    drawLeftLeg(over, down){
        global.context.fillStyle = "blue";
        global.context.fillRect(over - 5, down + 100, 10, 50);
    }

    drawRightLeg(over, down){
        global.context.fillStyle = "blue";
        global.context.fillRect(over + 25, down + 100, 10, 50);
    }
}