var k = 0
function setup() {
    createCanvas(400,400);
    background(200);
}

function draw() {
    strokeWeight(1);
    stroke(0,0,0);
    line(200,399,200,0);
    stroke(249,0,255);
    strokeWeight(60);
    point(100,198);


    var y = 198 + 10* Math.sin(PI/100*k)
    k += 1;
    fill(249,0,255);
    strokeWeight(60);
    point(300,y);
    
    stroke(200);
    strokeWeight(2);
    fill(249, 19, 147);
    ellipse(100,150,60,60);
    ellipse(150,180,60,60);
    ellipse(127,233,60,60);
    ellipse(50,180,60,60);
    ellipse(70,233,60,60);


    fill(249, 19, 147);
    var y = 150 + 10* Math.sin(PI/100*k)
    k += 1;
    ellipse(300,y,60,60);

    var y = 180 + 10* Math.sin(PI/100*k)
    k += 1;
    ellipse(350, y,60,60);

    var y = 233 + 10* Math.sin(PI/100*k)
    k += 1;
    ellipse(325,y,60,60);

    var y = 180 + 10* Math.sin(PI/100*k)
    k += 1;
    ellipse(250,y,60,60);

    var y = 233 + 10* Math.sin(PI/100*k)
    k += 1;
    ellipse(270,y,60,60);


}  