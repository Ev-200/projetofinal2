let lamp_1;


function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);

    lamp_1 = new Lamp(90, 220)

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
    //ground




    lamp_1.displayLamp();

    quad(20, 30, 80, 30, 100, 90, 0, 90);

}

class Lamp {
    constructor(x, y) {
        this.x = x;
        this.y = y
    }

    displayLamp() {
        fill(49, 51, 50)
        rect(this.x, this.y, 15, 450, 0, 0, 5, 5)
        fill(220, 240, 200)
        ellipse(this.x + 5, this.y, 90, 90)


    }

}
mousePressed()
