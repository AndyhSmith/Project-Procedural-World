class Tile {
    constructor(red, green, blue) {
        this.r = red
        this.g = green
        this.b = blue
        this.renderedColor = `rgb(${this.r}, ${this.g}, ${this.b})`
        this.selected = false

        this.h = null // height
        this.b = null // biom
    }

    renderColor() {
        if (this.b == "water") {
            this.renderedColor = "rgb(62,96,193)"
        } 
        else if(this.b == "beach") {
            this.renderedColor = "rgb(210,185,139)"
        }
        else if(this.b == "land") {
            this.renderedColor = "rgb(136,171,85)"
        }
        else {
            this.renderedColor = `rgb(${this.r}, ${this.g}, ${this.b})`
        }
        
    }

    generateBiom() {
        if (this.h < 0.3) {
            this.b = "water"
        } 
        else if (this.h < 0.4) {
            this.b = "beach"
        }
        else if (this.h < 1) {
            this.b = "land"
        }
        this.renderColor()
    }

}