
let lamp_1;
let lamp_2;
let lamp_3;
let lamp_4;
let lamp_5;
let lamp_6;
let lamp_7;
let lamp_8;
let lamp_9;
let lamp_10;
let lamp_11;


let xLamp;
let yLamp;

let diameter = 300

function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);


    lamp_1 = new Lamp(90, 250, 450)
    lamp_2 = new Lamp(270, 250, 480)
    lamp_3 = new Lamp(450, 250, 510)
    lamp_4 = new Lamp(630, 250, 540)
    lamp_5 = new Lamp(810, 250, 570)
    lamp_6 = new Lamp(990, 250, 600)
    lamp_7 = new Lamp(1170, 250, 630)
    lamp_8 = new Lamp(1350, 250, 660)
    lamp_9 = new Lamp(1530, 250, 690)
    lamp_10 = new Lamp(1710, 250, 720)
    lamp_11 = new Lamp(1890, 250, 750)

    // lamp  (+180, +0,+30)






}

function draw() {
    let b = map(0, windowHeight, 0, 0, 170);
    //trying to make background gradient, b = blue

    background(19, 24, 92);
    fill(49, 51, 50)
    push()
    rotate(10)
    rect(0, 600, windowWidth + 200, 400)
    fill(5, 40, 20)
    rect(0, 800, windowWidth + 200, 400)
    pop()
    //draw ground



    lamp_1.displayLamp();
    lamp_2.displayLamp();
    lamp_3.displayLamp();
    lamp_4.displayLamp();
    lamp_5.displayLamp();
    lamp_6.displayLamp();
    lamp_7.displayLamp();
    lamp_8.displayLamp();
    lamp_9.displayLamp();
    lamp_10.displayLamp();
    lamp_11.displayLamp();




    //display lightposts and lights

    if (lamp_1.isLit == false && lamp_2.isLit == false) {
        drawStars();
    }


}
function displayStar(x, y) {
    xStar = x
    yStar = y
    fill(255)
    text(' ✶', xStar, yStar)
}
//stars

//stars
function drawStars() {
    for (i = 0; i < 15; i++) {
        displayStar(0 + i * (70 + i * 6), 100)
        displayStar(30 + i * (100 + i * 10), 30 + i * (10 + i * 4))
        displayStar(30 + i * (100 + i * 10), 100 + i * (1 + i * 2))
        displayStar(0 + i * (200 + i * 10), 200 + i * (3 + i * 7))
        displayStar(0 + i * (200 + i * 10), 300 + i * (3 + i * 2))
    }
}




function mousePressed() {

    lamp_1.clicked();
    lamp_2.clicked();
    lamp_3.clicked();
    lamp_4.clicked();
    lamp_5.clicked();
    lamp_6.clicked();
    lamp_7.clicked();
    lamp_8.clicked();
    lamp_9.clicked();
    lamp_10.clicked();
    lamp_11.clicked();


}

// if (lamp_1.!isLit) {
//     drawStars()
// }


// if (lamp_1 == lamp_1.!isLit) {
//     drawStars()
// }

// if (lamp_1 == lamp_1.isLit == false) {
//     drawStars()
// }


