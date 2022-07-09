function zoomIn() {
    m.tileSize = Math.ceil(m.tileSize * 2);
    camera.x = Math.floor((camera.x * 2) - (window.innerWidth * .5))
    camera.y = Math.floor((camera.y * 2) - (window.innerHeight * .5))

    calcMaxTiles()
}

function zoomOut() {
    // if (m.tileSize < 2) {
    //     m.tileSize =  m.tileSize / 2;
    // } else {
    //     m.tileSize =  Math.ceil(m.tileSize / 2);
    // }
    m.tileSize =  m.tileSize / 2;
    camera.x = Math.floor((camera.x / 2) + (window.innerWidth / 4))
    camera.y = Math.floor((camera.y / 2) + (window.innerHeight / 4))

    calcMaxTiles()
}

function calcMaxTiles() {
    camera.maxWTiles =  Math.floor(window.innerWidth / m.tileSize) + 3,
    camera.maxHTiles =  Math.floor(window.innerHeight / m.tileSize) + 3
    draw()
}



function zoom(event) {
    event.preventDefault();
    console.log("zooming")
    if (event.deltaY > 0) {
        zoomOut();
    } else {
        zoomIn();
    }
}


  


function toggleZoom() {
    settings.doZoomBlur = !settings.doZoomBlur
    draw()
}

