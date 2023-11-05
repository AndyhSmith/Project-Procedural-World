//Timer for testing
var startTime, endTime;

function start() {
    startTime = new Date();
}

function end() {
    endTime = new Date();
    var timeDiff = endTime - startTime; //in ms
    // strip the ms
    timeDiff /= 1000;

    // get seconds
    var seconds = timeDiff.toFixed(3);
    console.log(seconds + " seconds");
}

// Canvas
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
c.width = window.innerWidth;
c.height = window.innerHeight;
ctx.imageSmoothingEnabled = false;
c.addEventListener("wheel", zoom);

// Variables
m = {
    map: [],
    tileSize: 20,
    selectedX: null,
    selectedY: null,
    w: 2000,
    h: 1000,
    zoomLevel: 4,
};

settings = {
    doZoomBlur: true,
};

camera = {
    x: -(m.w / 2) * m.tileSize,
    y: -(m.h / 2) * m.tileSize,
    maxWTiles: window.innerWidth / m.tileSize,
    maxHTiles: window.innerHeight / m.tileSize,
};

function noiseW(x, y) {
    return (noise.simplex2(x, y) + 1) / 2;
}

// Generate Map
start();
console.log("Starting Map Generation");
for (let j = 0; j < m.w; j++) {
    row = [];
    for (let i = 0; i < m.h; i++) {
        newTile = new Tile();
        row.push(newTile);
    }
    m.map.push(row);
}

// Generate Elivation
console.log("Generating Elivation");
noise.seed(Math.random());
for (let j = 0; j < m.w; j++) {
    for (let i = 0; i < m.h; i++) {
        // GENERATE HEIGHT MAP
        let height = noiseW(i / 400, j / 400) + 0.5 * noiseW(i / 50, j / 50) + 0.25 * noiseW(i / 25, j / 25);
        // Between 0-1
        height = height / (1 + 0.5 + 0.25);
        // Redistribute
        height = Math.pow(height, 2);
        m.map[j][i].h = height;
    }
}

// Generate Moisture
console.log("Adding Moisture");
noise.seed(Math.random());
for (let j = 0; j < m.w; j++) {
    for (let i = 0; i < m.h; i++) {
        // GENERATE HEIGHT MAP
        let moisture = noiseW(i / 200, j / 200) + 0.25 * noiseW(i / 25, j / 25);
        // Between 0-1
        moisture = moisture / (1 + 0.25);
        // Redistribute
        moisture = Math.pow(moisture, 1.5);
        m.map[j][i].m = moisture;
    }
}

// Generate Temperature
console.log("Generating Temperature");
noise.seed(Math.random());
for (let j = 0; j < m.w; j++) {
    for (let i = 0; i < m.h; i++) {
        // GENERATE HEIGHT MAP
        let temp = noiseW(i / 400, j / 400) + 0.2 * noiseW(i / 30, j / 30) + 0.15 * noiseW(i / 10, j / 10);
        // Between 0-1
        temp = temp / (1 + 0.2 + 0.15);
        // Redistribute
        temp = Math.pow(temp, 1);
        m.map[j][i].t = temp; //- (m.map[j][i].h / 2)
    }
}

console.log("Generating Biom");
// Generate Biom
for (let j = 0; j < m.w; j++) {
    for (let i = 0; i < m.h; i++) {
        m.map[j][i].generateBiom();
    }
}

console.log("Done");
end();
// draw
calcMaxTiles();
draw();
