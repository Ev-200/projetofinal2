let coverDisplay = false

let lamp_1;
let cover_1;
let xLamp;
let yLamp;

function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);

    lamp_1 = new Lamp(90, 220, 450)
    cover_1 = new LampCover(15, 100)


}

function draw() {
    background(19, 24, 84);
    fill(49, 51, 50)
    push()
    rotate(10)
    rect(0, 600, windowWidth + 200, 400)
    fill(5, 40, 20)
    rect(0, 800, windowWidth + 200, 400)
    pop()
    //draw ground

    lamp_1.displayLamp();

    if (coverDisplay == true) {
        cover_1.displayCover();
    }
}

function mousePressed() {
    lamp_1.clicked();
}


