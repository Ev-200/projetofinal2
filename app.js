let coverDisplay = true
let lightDisplay = true

let lamp_1;
let cover_1;
let lamp_2;
let cover_2;

let xLamp;
let yLamp;

function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);


    lamp_1 = new Lamp(90, 220, 450)
    cover_1 = new LampCover(-10, 100)

    lamp_2 = new Lamp(270, 220, 480)
    cover_2 = new LampCover(165, 95)


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



    if (coverDisplay == true) {
        cover_1.displayCover();
        cover_1.displayCoverLight();

        cover_2.displayCover();
        cover_2.displayCoverLight();
    }

    if (lightDisplay == true) {
        lamp_1.displayLampLight();

        lamp_2.displayLampLight();

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


