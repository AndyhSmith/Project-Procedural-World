// 1  , 0
// 1.5, 0.25
// 2  , 0.5
// 4  , 1.5
// y = 0.5x - 0.5
function zoomIn() {
    let zoomAmount = 1.2;
    m.tileSize = m.tileSize * zoomAmount;
    camera.x = camera.x * zoomAmount - window.innerWidth * (0.5 * zoomAmount - 0.5);
    camera.y = camera.y * zoomAmount - window.innerHeight * (0.5 * zoomAmount - 0.5);
    // camera.y = camera.y * 2 - window.innerHeight * 0.5;

    calcMaxTiles();
}

// 0.5 , 0.25
// 0.25, 0.375
// -0.5x + 0.5
function zoomOut() {
    // if (m.tileSize < 2) {
    //     m.tileSize =  m.tileSize / 2;
    // } else {
    //     m.tileSize =  Math.ceil(m.tileSize / 2);
    // }
    let zoomAmount = 0.9;
    m.tileSize = m.tileSize * zoomAmount;
    camera.x = camera.x * zoomAmount + window.innerWidth * (-0.5 * zoomAmount + 0.5);
    camera.y = camera.y * zoomAmount + window.innerHeight * (-0.5 * zoomAmount + 0.5);

    calcMaxTiles();
}

function calcMaxTiles() {
    camera.maxWTiles = Math.floor(window.innerWidth / m.tileSize) + 3;
    camera.maxHTiles = Math.floor(window.innerHeight / m.tileSize) + 3;
    draw();
}

function zoom(event) {
    event.preventDefault();
    console.log("zooming");
    if (event.deltaY > 0) {
        zoomOut();
    } else {
        zoomIn();
    }
}

function toggleZoom() {
    settings.doZoomBlur = !settings.doZoomBlur;
    draw();
}
