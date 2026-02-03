let coverDisplay = false
let lightDisplay = true
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
        cover_1.displayCoverLight();
    }

    if (lightDisplay == true) {
        lamp_1.displayLampLight();

    }



}

displayStars(){
    fill(255, 255, 255)
    text(' ✶', 50, 50)
}




function mousePressed() {
    lamp_1.clicked();
}


