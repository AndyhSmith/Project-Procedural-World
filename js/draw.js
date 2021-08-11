function draw() {
    ctx.clearRect(0, 0, c.width, c.height);
    



    let xStart = clamp(Math.floor(camera.x * -1 / m.tileSize) - 1, 0, m.w)
    let xEnd = clamp(xStart + camera.maxWTiles, 0, m.w)

    let yStart = clamp(Math.floor(camera.y * -1 / m.tileSize) - 1, 0, m.h)
    let yEnd = clamp(yStart + camera.maxHTiles, 0, m.h)
    


    ctx.beginPath();
    // console.log(m.tileSize, camera.x, camera.y)

    for (let i = xStart + 1; i < xEnd; i++) {
        
        for (let j = yStart + 1; j < yEnd; j++) {
            ctx.fillStyle = m.map[i][j].renderedColor
            ctx.fillRect(m.tileSize*i + camera.x, m.tileSize*j + camera.y, m.tileSize, m.tileSize);

            // if (m.map[i][j].selected) {
            //     ctx.fillStyle = "red"
            //     ctx.fillRect(m.tileSize*i + camera.x, m.tileSize*j + camera.y, m.tileSize, m.tileSize);
            // }
        }
    }
    ctx.stroke();
}