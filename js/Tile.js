/**
 * loads a image using a url
 * @param {*} src 
 */
function loadImage(src) {
    let img =  new Image();  
    img.src = "assets/images/" + src;
    return img;
}

/**
 * Creates a tile
 * @param {*} src 
 * @param {*} color 
 */
function createTile(tileColor, src) {
    if (src == undefined) {
        const tile = {
            color: tileColor,
            img: null
        }
        return tile
    } else {
        const tile = {
            color: tileColor,
            img: loadImage(src)
        }
        return tile
    }
}

var DEEP_OCEAN = createTile("rgb(62,96,193)")
var OCEAN = createTile("rgb(62,96,255)")
var BEACH = createTile("rgb(210,185,139)","sand.png")


var LAND = createTile("rgb(136,171,85)", "green_concrete_powder.png")
var SNOW_PEAK = createTile("rgb(255, 250, 250)", "snow.png")
var MOUNTAIN = createTile("rgb(124,119,113)", "stone.png")
var FOREST = createTile("rgb(1,66,32)", "azalea_top.png")

// COLD
var TUNDRA = createTile("rgb(148,169,174)", "snow.png")
var FROZEN_DESERT = createTile("rgb(255, 250, 250)", "white_concrete_powder.png")
var ICE = createTile("rgb(165,242,243)", "ice.png")
var GRAVEL_BEACH =  createTile("rgb(136,126,126)", "gravel.png")
var BOREAL_FOREST = createTile("rgb(0,46,12)", "moss_block.png")

// HOT
var DESERT = createTile("rgb(210,185,139)", "sand.png")
const MESA = createTile("rgb(149,85,90)","terracotta.png")



// var TROPICAL_RAINFOREST

function pickColor(tile) {
    if (tile.img == null) {
        return tile.color
    } else {
        return tile.img
    }
}

class Tile {
    constructor() {
        this.renderedColor = null //`rgb(${this.r}, ${this.g}, ${this.b})`
        this.selected = false
        this.img = true

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

        if (typeof this.renderedColor === "string") {
            this.img = false;
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