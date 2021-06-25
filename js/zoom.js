function zoomIn() {
    m.tileSize = Math.ceil(m.tileSize * 2);
    camera.x = Math.floor(camera.x * 2 - window.innerWidth / 2)
    camera.y = Math.floor(camera.y * 2 - window.innerHeight / 2)

    camera.maxWTiles =  Math.floor(window.innerWidth / m.tileSize),
    camera.maxHTiles =  Math.floor(window.innerHeight / m.tileSize)
    draw()
}

function zoomOut() {
    m.tileSize =  Math.ceil(m.tileSize / 2);
    camera.x = Math.floor(camera.x / 2 + window.innerWidth / 4)
    camera.y = Math.floor(camera.y / 2 + window.innerHeight / 4)

    camera.maxWTiles =  Math.floor(window.innerWidth / m.tileSize),
    camera.maxHTiles =  Math.floor(window.innerHeight / m.tileSize)
    draw()
}
