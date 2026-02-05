class Lamp {
    constructor(xLamp, yLamp, height) {
        this.xLamp = xLamp;
        this.yLamp = yLamp;
        this.height = height;
        this.size = 90;
    }

    displayLamp() {
        fill(49, 51, 50)
        rect(this.xLamp, this.yLamp, 15, this.height, 0, 0, 5, 5)
        fill(220, 240, 200)
        ellipse(this.xLamp + 5, this.yLamp, this.size, this.size)
    }

    clicked() {
        if (dist(mouseX, mouseY, this.xLamp, this.yLamp) < this.size) {
            coverDisplay = true;
            lightDisplay = false;

        }

    }

    displayLampLight() {
        fill(200, 240, 255, 70)

        ellipse(this.xLamp + 5, this.yLamp, 300, 300)
    }
}

class LampCover {
    constructor(x1, y1, x2, y2, x3, y3, x4, y4) {
        this.x1 = x1
        this.y1 = y1
        this.x2 = x2
        this.y2 = y2
        this.x3 = x3
        this.y3 = y3
        this.x4 = x4
        this.y4 = y4

    }

    displayCover() {
        push()
        fill(49, 51, 50)
        noStroke()
        scale(1.5)
        // translate(this.x, this.y)
        // quad(20, 40, 80, 40, 100, 90, 0, 90);

        // quad(35, 130, 95, 130, 115, 180, 15, 180);
        quad(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3, this.x4, this.y4)
        ellipse(this.x1 + 30, this.y1 + 10, 70, 70);

        fill(200, 240, 255, 70)
        //  quad(35, 180, 95, 180, 130, 500, 0, 500)
        quad(this.x1, this.y1 + 50, this.x2, this.y2 + 50, this.x3 + 15, this.y3 + 320, this.x4 - 15, this.y4 + 320)
        pop()
    }



    displayCoverLight() {
        push()
        // translate(this.x, this.y)
        // fill(200, 240, 255, 70)
        // quad(50, 270, 150, 270, 170, 800, -10, 800)
        pop()
    }



}

