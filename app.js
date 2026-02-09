

let lamp_1;

let lamp_2;

let lamp_3;

let lamp_4;


let xLamp;
let yLamp;

let diameter = 300

function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);


    lamp_1 = new Lamp(90, 220, 450)


    lamp_2 = new Lamp(270, 220, 480)


    lamp_3 = new Lamp(450, 220, 510)


    lamp_4 = new Lamp(630, 220, 540)

    // lamp  (+180, +0,+30)
    //lampcover (+120,+0,+120,+0 +120,+0,+120,+0)





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

    //display lightposts and lights


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






function mousePressed() {

    lamp_1.clicked()
    lamp_2.clicked()

}


