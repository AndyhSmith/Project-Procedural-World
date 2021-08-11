
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
    w: 300,
    h: 200,
}

camera = {
    x: 0,
    y: 0,
    maxWTiles: Math.floor(window.innerWidth / m.tileSize),
    maxHTiles: Math.floor(window.innerHeight / m.tileSize)

}

function noiseW(x, y) {
    return (noise.simplex2(x, y) + 1) / 2
}

// Generate Map
noise.seed(Math.random());
for (let j = 0; j < m.w; j++) {
    row = []
    for (let i = 0; i < m.h; i++) {
        // GENERATE HEIGHT
        // Generate Noise
        let blueValue = noiseW(i/ 100, j/ 100) + .5 * noiseW(i/ 50, j/ 50) + .25 * noiseW(i/ 25, j/ 25)
        // Between 0-1
        blueValue = blueValue / (1 + .5 + .25)
        // Redistribute
        blueValue = Math.pow(blueValue, 4)
        // Color
        blueValue = blueValue * 255
        // console.log(blueValue)
        newTile = new Tile(0,0, blueValue)
        row.push(newTile)
    }
    m.map.push(row)
}

// Generate Elivation
noise.seed(Math.random());
for (let j = 0; j < m.w; j++) {
    for (let i = 0; i < m.h; i++) {
        // GENERATE HEIGHT MAP
        let height = noiseW(i/ 100, j/ 100) + .5 * noiseW(i/ 50, j/ 50) + .25 * noiseW(i/ 25, j/ 25)
        // Between 0-1
        height = height / (1 + .5 + .25)
        // Redistribute
        height = Math.pow(height, 2)
        m.map[j][i].h = height
    }
}

// Generate Biom
for (let j = 0; j < m.w; j++) {
    for (let i = 0; i < m.h; i++) {
        m.map[j][i].generateBiom()
    }
}

// draw
calcMaxTiles()
draw()






