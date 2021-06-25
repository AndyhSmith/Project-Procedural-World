class Tile {
    constructor() {
        this.r = Math.random() * 50
        this.g = Math.random() * 50
        this.b = Math.random() * 50
        this.renderedColor = `rgb(${this.r}, ${this.g}, ${this.b})`
        this.selected = false
    }

    renderColor() {
        this.renderedColor = `rgb(${this.r}, ${this.g}, ${this.b})`
    }


}