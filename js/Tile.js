var DEEP_OCEAN = ["rgb(62,96,193)"]
var OCEAN = ["rgb(62,96,255)"] //, "rgb(63,92,251)"
var BEACH = ["rgb(210,185,139)"]
var LAND = ["rgb(136,171,85)"]
var SNOW_PEAK = ["rgb(255, 250, 250)"]
var MOUNTAIN = ["rgb(124,119,113)"]
var FOREST = ["rgb(1,66,32)"]

// COLD
var TUNDRA = ["rgb(148,169,174)"]
var FROZEN_DESERT = ["rgb(255, 250, 250)"]
var ICE = ["rgb(165,242,243)"]
var GRAVEL_BEACH =  ["rgb(136,126,126)"]
var BOREAL_FOREST = ["rgb(0,46,12)"]

// HOT
var DESERT = ["rgb(210,185,139)"] //, "rgb(203,180,133)""
var MESA = ["rgb(149,85,90)"]

// var TROPICAL_RAINFOREST

function pickColor(color_array) {
    if (color_array.length == 1) {
        return color_array[0]
    } else {
        if (Math.random() > .5) {
            return color_array[0]
        } else {
            return color_array[1]
        }
        
    }
    
}

class Tile {
    constructor() {
        this.renderedColor = null //`rgb(${this.r}, ${this.g}, ${this.b})`
        this.selected = false

        this.h = null // height
        this.m = null // moisture
        this.b = null // biom
        this.t = null // temperature
    }

    renderColor() {
        if (this.b == "deep ocean") {
            this.renderedColor = pickColor(DEEP_OCEAN)
        } 
        else if(this.b == "ocean") {
            this.renderedColor = pickColor(OCEAN)
        }
        else if(this.b == "beach") {
            this.renderedColor = pickColor(BEACH)
        }
        else if(this.b == "grass") {
            this.renderedColor = pickColor(LAND)
        }
        else if(this.b == "snow peak") {
            this.renderedColor = pickColor(SNOW_PEAK)
        }
        else if(this.b == "mountain") {
            this.renderedColor = pickColor(MOUNTAIN)
        }
        else if(this.b == "forest") {
            this.renderedColor = pickColor(FOREST)
        }
        else if(this.b == "tundra") {
            this.renderedColor = pickColor(TUNDRA)
        }
        else if(this.b == "desert") {
            this.renderedColor = pickColor(DESERT)
        }
        else if(this.b == "ice") {
            this.renderedColor = pickColor(ICE)
        }
        else if(this.b == "gravel beach") {
            this.renderedColor = pickColor(GRAVEL_BEACH)
        }
        else if(this.b == "frozen desert") {
            this.renderedColor = pickColor(FROZEN_DESERT)
        }
        else if(this.b == "boreal forest") {
            this.renderedColor = pickColor(BOREAL_FOREST)
        }
        else if(this.b == "mesa") {
            this.renderedColor = pickColor(MESA)
        }
        else {
            // this.renderedColor = `rgb(${this.r}, ${this.g}, ${this.b})`
        }
        
    }

    generateBiom() {
        if(false) {
            // temp
        }
        else if (this.h < 0.22 && this.h > .13 && this.t < .3) {
            this.b = "ice"
        }
        else if (this.h < 0.10) { 
            this.b = "deep ocean"
        }
        
        else if (this.h < 0.22) {
            this.b = "ocean"
        } 
        
        else if (this.h < 0.26 && this.t < .4) {
            this.b = "gravel beach"
        }
        else if (this.h < 0.26) {
            this.b = "beach"
        }
        else if (this.h < .65 && this.t < 0.2 && this.m < .25) {
            this.b = "frozen desert"
        } 
        else if (this.h < .65 && this.t < 0.4 && this.m > .4) {
            this.b = "boreal forest"
        } 
        else if (this.h < .65 && this.t < 0.4) {
            this.b = "tundra"
        } 
        else if (this.h > .60 && this.m < .25 && this.t > .6) {
            this.b = "mesa"
        }
        else if (this.h < .65 && this.m < .25) {
            this.b = "desert"
        }
        
        else if (this.h < .65 && this.m < .4) {
            this.b = "grass"
        }
        else if (this.h < .65 ) {
            this.b = "forest"
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