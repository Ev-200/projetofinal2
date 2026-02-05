let coverDisplay = true
let lightDisplay = true

let lamp_1;
let cover_1;
let lamp_2;
let cover_2;
let lamp_3;
let cover_3;

let xLamp;
let yLamp;

function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);


    lamp_1 = new Lamp(90, 220, 450)
    cover_1 = new LampCover(35, 130, 95, 130, 115, 180, 15, 180)

    lamp_2 = new Lamp(270, 220, 480)
    cover_2 = new LampCover(155, 130, 215, 130, 235, 180, 135, 180)

    lamp_3 = new Lamp(450, 220, 510)
    cover_3 = new LampCover(275, 130, 330, 130, 355, 180, 255, 180)

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



    if (coverDisplay == true) {
        cover_1.displayCover();
        cover_1.displayCoverLight();

        cover_2.displayCover();
        cover_2.displayCoverLight();

        cover_3.displayCover();
        cover_3.displayCoverLight();
    }

    if (lightDisplay == true) {
        lamp_1.displayLampLight();

        lamp_2.displayLampLight();

        lamp_3.displayLampLight();

    }

    //display lightposts and lights


    for (i = 0; i < 15; i++) {
        displayStar(0 + i * (70 + i * 6), 100)
    }



}

function displayStar(x, y) {
    xStar = x
    yStar = y
    fill(255)
    text(' ✶', xStar, yStar)
}

//stars



function mousePressed() {
    lamp_1.clicked();

    lamp_2.clicked();
}


