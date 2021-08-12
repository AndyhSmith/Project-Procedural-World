var DEEP_OCEAN = "rgb(62,96,193)"
var OCEAN = "rgb(62,96,255)"
var BEACH = "rgb(210,185,139)"
var LAND = "rgb(136,171,85)"
var SNOW_PEAK = "rgb(255, 250, 250)"
var MOUNTAIN = "rgb(124,119,113)"
var FOREST = "rgb(1,66,32)"


class Tile {
    constructor(red, green, blue) {
        this.r = red
        this.g = green
        this.b = blue
        this.renderedColor = `rgb(${this.r}, ${this.g}, ${this.b})`
        this.selected = false

        this.h = null // height
        this.m = null // moisture
        this.b = null // biom
    }

    renderColor() {
        if (this.b == "deep ocean") {
            this.renderedColor = DEEP_OCEAN
        } 
        else if(this.b == "ocean") {
            this.renderedColor = OCEAN
        }
        else if(this.b == "beach") {
            this.renderedColor = BEACH
        }
        else if(this.b == "grass") {
            this.renderedColor = LAND
        }
        else if(this.b == "snow peak") {
            this.renderedColor = SNOW_PEAK
        }
        else if(this.b == "mountain") {
            this.renderedColor = MOUNTAIN
        }
        else if(this.b == "forest") {
            this.renderedColor = FOREST
        }
        else {
            this.renderedColor = `rgb(${this.r}, ${this.g}, ${this.b})`
        }
        
    }

    generateBiom() {
        if (this.h < 0.2) {
            this.b = "deep ocean"
        }
        else if (this.h < 0.3) {
            this.b = "ocean"
        } 
        else if (this.h < 0.35) {
            this.b = "beach"
        }
        else if (this.h < .65 && this.m > .4) {
            this.b = "forest"
        }
        else if (this.h < .65) {
            this.b = "grass"
        }
        else if (this.h < .75) {
            this.b = "mountain"
        }
        else if (this.h < 1) {
            this.b = "snow peak"
        }
        this.renderColor()
    }

}