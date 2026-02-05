let coverDisplay = false
let lightDisplay = true

let lamp_1;
let cover_1;
let lamp_2;
let cover_2;
let lamp_3;
let cover_3;
let lamp_4;
let cover_4;

let xLamp;
let yLamp;

let diameter = 300

function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);


    lamp_1 = new Lamp(90, 220, 450)
    cover_1 = new LampCover(35, 130, 95, 130, 115, 180, 15, 180)

    lamp_2 = new Lamp(270, 220, 480)
    cover_2 = new LampCover(155, 130, 215, 130, 235, 180, 135, 180)

    lamp_3 = new Lamp(450, 220, 510)
    cover_3 = new LampCover(275, 130, 335, 130, 355, 180, 255, 180)

    lamp_4 = new Lamp(630, 220, 540)
    cover_4 = new LampCover(395, 130, 455, 130, 475, 180, 375, 180)
    // lamp  (+180, +0,+30)
    //lampcover (+120,+0,+120,+0 +120,+0,+120,+0)

    lamp_4 = new Lamp(630, 220, 540)
    cover_4 = new LampCover(330, 130,)
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

    if (coverDisplay == true) {
        cover_1.displayCover();
        cover_1.displayCoverLight();

        cover_2.displayCover();
        cover_2.displayCoverLight();

        cover_3.displayCover();
        cover_3.displayCoverLight();

        cover_4.displayCover();
        cover_4.displayCoverLight();
    }


    if (lightDisplay == true) {
        lamp_1.displayLampLight();

        lamp_2.displayLampLight();

        lamp_3.displayLampLight();

        lamp_4.displayLampLight();

    }



    //display lightposts and lights

    for (i = 0; i < 15; i++) {

        LampTest(20 + i * (200 + i * 4), 280, 400 + i * 30,);


    }


    //test

    //stars
    for (i = 0; i < 15; i++) {
        displayStar(0 + i * (70 + i * 6), 100)
        displayStar(30 + i * (100 + i * 10), 30 + i * (10 + i * 4))
        displayStar(30 + i * (100 + i * 10), 100 + i * (1 + i * 2))
    }

}
function displayStar(x, y) {
    xStar = x
    yStar = y
    fill(255)
    text(' ✶', xStar, yStar)
}
//stars

function LampTest(x, y, height) {
    lampX = x;
    lampY = y;
    lampHeight = height;

    fill(200, 240, 255, 70)

    ellipse(lampX + 5, lampY, diameter, diameter)
    fill(49, 51, 50)
    rect(lampX, lampY, 15, lampHeight, 0, 0, 5, 5)
    fill(220, 240, 200)
    ellipse(lampX + 5, lampY, 90, 90)

    //     return lampX
    //     console.log("test");
    //     return lampY
    //     console.log(xLamp)
    //     console.log(yLamp)
}





function mousePressed() {

    if (mouseX > lampX - diameter / 2 && mouseX < lampX + diameter / 2) {
        console.log("test");
        if (mouseY > lampY - diameter / 2 && mouseY < lampY + diameter / 2) {

            coverDisplay = true
        }
    }

}
//trying to analise the location of the lamp to click
//test

// function mousePressed() {
//     lamp_1.clicked();

//     lamp_2.clicked();

//     lamp_3.clicked();

//     lamp_4.clicked();
// }


