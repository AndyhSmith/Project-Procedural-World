function zoomIn() {
    m.tileSize = Math.ceil(m.tileSize * 2);
    camera.x = Math.floor(camera.x * 2 - window.innerWidth / 2)
    camera.y = Math.floor(camera.y * 2 - window.innerHeight / 2)

    calcMaxTiles()
}

function zoomOut() {
    m.tileSize =  Math.ceil(m.tileSize / 2);
    camera.x = Math.floor(camera.x / 2 + window.innerWidth / 4)
    camera.y = Math.floor(camera.y / 2 + window.innerHeight / 4)

    calcMaxTiles()
}

function calcMaxTiles() {
    camera.maxWTiles =  Math.floor(window.innerWidth / m.tileSize) + 3,
    camera.maxHTiles =  Math.floor(window.innerHeight / m.tileSize) + 3
    draw()
}


