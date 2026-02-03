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
            coverDisplay = true

        }

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
        ellipse(50, 50, 70, 70);
        pop()
    }
}

