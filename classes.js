class Lamp {
    constructor(x, y, height) {
        this.x = x;
        this.y = y;
        this.height = height;
        this.size = 90;
        this.isLit = true

    }

    displayLamp() {

        fill(49, 51, 50)
        rect(this.x, this.y, 15, this.height, 0, 0, 5, 5)
        fill(220, 240, 200)
        ellipse(this.x + 5, this.y, this.size, this.size)

        if (this.isLit) {
            this.displayLampLight()
        } else {
            this.displayCover()
        }
    }

    clicked() {
        if (dist(mouseX, mouseY, this.x, this.y) < this.size) {
            this.isLit = false

        }

    }
    // steps 

    //make lamps
    //work on stars
    //time counter +sounds

    // if lamp_1.!isLit && lamp_2 !isLit (etc) then run drawStars (or stars.visible = true)
    // drawStars and stars.visible don't exist yet 
    //

    displayLampLight() {
        fill(200, 240, 255, 70)

        ellipse(this.x + 5, this.y, 300, 300)
    }

    displayCover() {
        let x1 = this.x - 55
        let y1 = this.y
        let x2 = x1 + 110
        let y2 = y1
        let x3 = x1 + 130
        let y3 = y1 + 70
        let x4 = x1 - 20
        let y4 = y1 + 70
        let beamWidth = 30

        fill(49, 51, 50)
        noStroke()
        //cover and cover circle
        quad(x1, y1, x2, y2, x3, y3, x4, y4)
        ellipse(this.x, this.y, 110, 110);

        fill(200, 240, 255, 70)
        //light beam
        quad(x4, y4, x3, y3, x3 + beamWidth, y3 + this.height, x4 - beamWidth, y4 + this.height)
        stroke(1)
    }
}



