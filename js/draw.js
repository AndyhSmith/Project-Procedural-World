Number.round = function() {
    return (this + 0.5) << 0;
};

function draw() {
    ctx.clearRect(0, 0, c.width, c.height);
    
    let xStart = clamp(Math.floor(camera.x * -1 / m.tileSize) - 1, 0, m.w)
    let xEnd = clamp(xStart + camera.maxWTiles, 0, m.w)

    let yStart = clamp(Math.floor(camera.y * -1 / m.tileSize) - 1, 0, m.h)
    let yEnd = clamp(yStart + camera.maxHTiles, 0, m.h)
    

    if (m.tileSize > 2) {
        ctx.beginPath();
        for (let i = xStart + 1; i < xEnd; i++) {   
            for (let j = yStart + 1; j < yEnd; j++) {
                ctx.fillStyle = m.map[i][j].renderedColor
                ctx.fillRect(~~(m.tileSize*i + camera.x), ~~(m.tileSize*j + camera.y), m.tileSize, m.tileSize);

                // If selected
                if (m.map[i][j].selected) {
                    ctx.lineWidth = "4";
                    ctx.strokeStyle = "#000";
                    ctx.rect(m.tileSize*i + camera.x, m.tileSize*j + camera.y, m.tileSize, m.tileSize);
                    ctx.stroke();                
                }
            }
        }
        ctx.stroke();
    }
    else {
        
        ctx.beginPath();
        for (let i = Math.floor((xStart) / m.zoomLevel) + 1; i < Math.floor(xEnd / m.zoomLevel); i++) {   
            for (let j = Math.floor((yStart) / m.zoomLevel) + 1; j < Math.floor(yEnd / m.zoomLevel); j++) {
                ctx.fillStyle = m.map_s[i][j].renderedColor
                ctx.fillRect(m.tileSize*i*m.zoomLevel + camera.x , m.tileSize*j*m.zoomLevel + camera.y, m.tileSize * m.zoomLevel, m.tileSize * m.zoomLevel);
            }
        }
        ctx.stroke();
    }

    



}