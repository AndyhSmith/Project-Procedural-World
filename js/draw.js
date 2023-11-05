Number.round = function () {
    return (this + 0.5) << 0;
};

function drawZoomed(zoomAmount, xStart, xEnd, yStart, yEnd) {
    xStart -= xStart % 16;
    yStart -= yStart % 16;
    for (let i = xStart + 1; i < xEnd; i += zoomAmount) {
        for (let j = yStart + 1; j < yEnd; j += zoomAmount) {
            if (m.map[i][j].img) {
                ctx.drawImage(
                    m.map[i][j].renderedColor,
                    m.tileSize * i + camera.x,
                    m.tileSize * j + camera.y,
                    m.tileSize * zoomAmount,
                    m.tileSize * zoomAmount
                );
            } else {
                ctx.fillStyle = m.map[i][j].renderedColor;
                ctx.fillRect(m.tileSize * i + camera.x, m.tileSize * j + camera.y, m.tileSize * zoomAmount, m.tileSize * zoomAmount);
            }
        }
    }
}

function draw() {
    ctx.clearRect(0, 0, c.width, c.height);

    let xStart = clamp(Math.floor((camera.x * -1) / m.tileSize) - 1, 0, m.w);
    let xEnd = clamp(xStart + camera.maxWTiles, 0, m.w);

    let yStart = clamp(Math.floor((camera.y * -1) / m.tileSize) - 1, 0, m.h);
    let yEnd = clamp(yStart + camera.maxHTiles, 0, m.h);

    if (m.tileSize > 12 || !settings.doZoomBlur) {
        ctx.beginPath();
        for (let i = xStart + 1; i < xEnd; i++) {
            for (let j = yStart + 1; j < yEnd; j++) {
                // ctx.fillStyle = m.map[i][j].renderedColor;
                // ctx.fillRect(m.tileSize * i + camera.x, m.tileSize * j + camera.y, m.tileSize, m.tileSize);

                if (m.map[i][j].img) {
                    ctx.drawImage(m.map[i][j].renderedColor, m.tileSize * i + camera.x, m.tileSize * j + camera.y, m.tileSize, m.tileSize);
                } else {
                    ctx.fillStyle = m.map[i][j].renderedColor;
                    ctx.fillRect(m.tileSize * i + camera.x, m.tileSize * j + camera.y, m.tileSize, m.tileSize);
                }
                // If selected
                if (m.map[i][j].selected) {
                    ctx.lineWidth = "4";
                    ctx.strokeStyle = "#000";
                    ctx.rect(m.tileSize * i + camera.x, m.tileSize * j + camera.y, m.tileSize, m.tileSize);
                }
            }
        }
        ctx.closePath();
        ctx.stroke();
    } else if (m.tileSize > 5) {
        drawZoomed(4, xStart, xEnd, yStart, yEnd);
    } else {
        drawZoomed(16, xStart, xEnd, yStart, yEnd);
    }
    ctx.fillStyle = "black";
    ctx.fillRect(c.width / 2, c.height / 2, 2, 10);
    ctx.fillRect(c.width / 2, c.height / 2, 10, 2);
}
