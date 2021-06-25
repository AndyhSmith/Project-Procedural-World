
// Canvas
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
c.width = window.innerWidth;
c.height = window.innerHeight;

// Variables
m = {
    map: [],
    tileSize: 64,
    selectedX: null,
    selectedY: null,
    w: 1000,
    h: 500,
}

camera = {
    x: 0,
    y: 0,
    maxWTiles: Math.floor(window.innerWidth / m.tileSize),
    maxHTiles: Math.floor(window.innerHeight / m.tileSize)

}

// Map
for (let j = 0; j < m.w; j++) {
    row = []
    for (let i = 0; i < m.h; i++) {
        newTile = new Tile()
        row.push(newTile)
    }
    m.map.push(row)
}

// draw
draw()







