var pos;

function setup(){
    var myCanvas = createCanvas(windowWidth, windowHeight*0.5);
    myCanvas.parent('myContainer');
    background(255);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(256);
    line(0, 0, windowHeight, windowHeight);
}

//function mouseWheel(event) {
//    //event.delta can be +1 or -1 depending
//    //on the wheel/scroll direction
//    //move the square one pixel up or down
//    pos += event.delta;
//
//    //uncomment to block page scrolling
//    //return false;
//}

var noiseScale=0.02;

function draw() {
    background(255);
    for (var x=0; x < windowWidth; x++) {
        var noiseVal = noise((pos+x)*noiseScale,
            pos*noiseScale);
        stroke(noiseVal*255*1.5,244,244);
        line(x, pos+noiseVal*80, x, windowHeight);
    }
}

function getScrollTop(){
    pos = $(window).scrollTop()*0.01;
}

$(window).on("load scroll", getScrollTop);