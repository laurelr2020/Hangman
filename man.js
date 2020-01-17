"use strict"

class Man{
    constructor(over, down){
        this.over = over;
        this.down = down;
        this.head = new Head(this.over, this.down);
        this.body = new Body(this.over, this.down);
        this.arm = new Arm(this.over, this.down);
        this.leg = new Leg(this.over, this.down);

        this.bodyPartCount = 0;
    }

    draw(){
        this.head.drawHead();
        this.body.drawBody();
        this.arm.drawLeftArm();
        this.arm.drawRightArm();
        this.leg.drawLeftLeg();
        this.leg.drawRightLeg();
    }
}

class Head{
    constructor(over, down){
        this.over = over;
        this.down = down;
    }
    drawHead(){
        global.context.fillStyle = "blue";
        global.context.fillRect(this.over, this.down, 30, 30);
        this.drawNeck(this.over, this.down);
    }

    drawNeck(){
        global.context.fillStyle = "blue";
        global.context.fillRect(this.over + 10, this.down + 30, 10, 15);
    }
}

class Body{
    constructor(over, down){
        this.over = over;
        this.down = down;
    }

    drawBody(){
        global.context.fillStyle = "red";
        global.context.fillRect(this.over - 10, this.down + 40, 50, 60);
    }
}

class Arm{
    constructor(over, down){
        this.over = over;
        this.down = down;
    }

    drawLeftArm(){
        global.context.fillStyle = "blue";
        global.context.fillRect(this.over - 15, this.down + 45, 5, 40);
    }

    drawRightArm(){
        global.context.fillStyle = "blue";
        global.context.fillRect(this.over + 40, this.down + 45, 5, 40);
    }
}

class Leg{
    constructor(over, down){
        this.over = over;
        this.down = down;
    }

    drawLeftLeg(){
        global.context.fillStyle = "blue";
        global.context.fillRect(this.over - 5, this.down + 100, 10, 50);
    }

    drawRightLeg(){
        global.context.fillStyle = "blue";
        global.context.fillRect(this.over + 25, this.down + 100, 10, 50);
    }
}