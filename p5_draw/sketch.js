var strokeColor;
var colors;
let container;
function setup() {
    
    colors = [  
        color(211,7,2),
        color(252,239,2),
        color(137,211,40),
        color(4, 142, 248),
        color(137, 0, 140),
        color(253, 110, 5)
     ];

    container = createCanvas(700,500);
    container.parent('container');
    background(0);
    color_randomizer();
}

function clearcanvas() {
    background(0);
    strokeWidth = 5;
    color_randomizer();
}

function mouseReleased() {
    
    return true;
}


function color_randomizer() {
    var colorVal = Math.floor(Math.random() * (5 - 0) ) + 0;
    strokeColor = colors[colorVal];
}

strokeWidth = 7;


function draw() {
    strokeWeight(strokeWidth)
    stroke(strokeColor);
    if (mouseIsPressed === true) {
        line(mouseX, mouseY, pmouseX, pmouseY);
    }
}