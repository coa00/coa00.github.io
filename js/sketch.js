var pos = 100;
function setup(){
    var myCanvas = createCanvas(windowWidth, 200);
    myCanvas.parent('myContainer');
    background(256);
    line(0, 0, windowHeight, windowHeight);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(256);
    line(0, 0, windowHeight, windowHeight);
}

function mouseWheel(event) {
    //event.delta can be +1 or -1 depending
    //on the wheel/scroll direction
    print(event.delta);
    //move the square one pixel up or down
    pos += event.delta;

    print(pos);
    //uncomment to block page scrolling
    //return false;
}

var noiseScale=0.02;

function draw() {
    background(255);
    for (var x=0; x < windowWidth; x++) {
        var noiseVal = noise((pos+x)*noiseScale,
            pos*noiseScale);
        stroke(noiseVal*255*1.5);
        line(x, pos+noiseVal*80, x, windowHeight);
    }
}