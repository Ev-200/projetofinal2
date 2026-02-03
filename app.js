let coverDisplay = false

let lamp_1;
let cover_1;
let xLamp;
let yLamp;
let diametro = 90;
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
    //ground




    lamp_1.displayLamp();

    if (coverDisplay == true) {
        cover_1.displayCover();
    }
}

class LampCover {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    displayCover() {
        push()
        fill(49, 51, 50)
        noStroke()
        scale(1.5)
        translate(this.x, this.y)
        quad(20, 40, 80, 40, 100, 90, 0, 90);
        ellipse(50, 50, 70, 70)
        pop()
    }
}


class Lamp {
    constructor(xLamp, yLamp, height) {
        this.xLamp = xLamp;
        this.yLamp = yLamp;
        this.height = height
    }

    displayLamp() {
        fill(49, 51, 50)
        rect(this.xLamp, this.yLamp, 15, this.height, 0, 0, 5, 5)
        fill(220, 240, 200)
        ellipse(this.xLamp + 5, this.yLamp, diametro, diametro)


    }

}


function mousePressed() {
    if (mouseX > xLamp - diametro / 2 && mouseX < xLamp + diametro / 2) {
        if (mouseY > yLamp - diametro / 2 && mouseY < yLamp + diametro / 2) {

            console.log("test")
            coverDisplay = true
        }
    }
}
