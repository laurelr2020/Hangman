'use strict'

class Pole{
    constructor(color, over, down){

        this.draw = function (){
            drawUpright(over, down);
            drawTop(over, down);
            drawHanger(over, down);
            drawBottom(over, down);
        }

        function drawUpright(over, down){
            global.context.fillStyle = color;
            global.context.fillRect(over, down + 5, 10, 200);
        } 

        function drawTop(over, down){
            global.context.fillRect(over - 105, down - 5, 115, 10);
        }

        function drawHanger(over, down){
            global.context.fillRect(over - 105, down + 5, 10, 20);
        }
        function drawBottom(over, down){
            global.context.fillRect(over - 125, down + 205, 200, 10);
        }
    }
}

// class Upright{

// }

// class Top{
//     drawTop(over, down){
//         global.context.fillStyle = "#654321";
//         global.context.fillRect(345, 140, 120, 15);
//     }
// }

// class Hanger{
//     drawHanger(over, down){
//         global.context.fillStyle = "#654321";
//         global.context.fillRect(345, 150, 15, 25);
//     }
// }

// class Bottom{
//     drawBottom(over, down){
//         global.context.fillStyle = "#654321";
//         global.context.fillRect(325, 350, 200, 15);
//     }
// }