var xDown = null;                                                        
var yDown = null;

var xStart = null;
var yStart = null;
var xEnd = null;                                    
var yEnd = null;

var moved = false

function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}                                                     


// END
// TOUCH END
function handleTouchEnd(event) {
    moved = false
    const lastTourch = getTouches(event)[0];  
    xEnd = lastTourch.clientX;   
    yEnd = lastTourch.clientY; 
    checkClick()
}

// CLICK END
function onEndClick(event) {
    moved = false
    xEnd = event.clientX
    yEnd = event.clientY
    checkClick()
}


// START
// TOUCH START
function handleTouchStart(evt) {
    console.log("touch start")
    moved = true;
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY; 
    xStart = firstTouch.clientX;   
    yStart = firstTouch.clientY; 
};    

// CLICK START
function onStartClick(event) {
    moved = true;
    xDown = event.clientX;                                      
    yDown = event.clientY; 
    xStart = event.clientX;   
    yStart = event.clientY; 
}


// MOVE
// TOUCH MOVE
function handleTouchMove(evt) {
    handleMove(evt.touches[0])                                         
};

// CLICK MOVE
function onMouseMove(event) {
    handleMove(event)
}

function handleMove(event) {
    if (moved) {
        var xUp = event.clientX;                                    
        var yUp = event.clientY;
        

        var xDiff = xDown - xUp;
        var yDiff = yDown - yUp;
        
        camera.x -= xDiff;
        camera.y -= yDiff;

        draw()

    
        xDown = xUp;
        yDown = yUp;  
    }
}

// CHECKING CLICK
function checkClick() {
    // If not draged
    if (Math.abs(xStart - xEnd) < 30 && Math.abs(yStart - yEnd) < 30) {
        // Unselect Selection
        if (m.selectedX != null && m.selectedY != null) {
            m.map[m.selectedX][m.selectedY].selected = false
        }

        // Choose Selection
        m.selectedX = Math.floor((xDown - camera.x) / m.tileSize)
        m.selectedY = Math.floor((yDown - camera.y) / m.tileSize)  

        // Insure Selection is inbounds
        if (m.selectedX < 0 || m.selectedY < 0 || m.selectedX > m.w || m.selectedY > m.h) {
            m.selectedX = null
            m.selectedY = null
            document.getElementById("info").style.display = "none"
            document.getElementById("info-top").style.display = "none"
        } else {
            m.map[m.selectedX][m.selectedY].selected = true;
            document.getElementById("info-image").style.backgroundColor = m.map[m.selectedX][m.selectedY].renderedColor;
            document.getElementById("info-title-container").innerHTML = m.map[m.selectedX][m.selectedY].b.toUpperCase();
            document.getElementById("info-top").innerHTML = '<div class="info-option">'+ 'Height: ' + m.map[m.selectedX][m.selectedY].h.toFixed(2) + '</div>' + '<div class="info-option"> ' + 'Moisture: ' + m.map[m.selectedX][m.selectedY].m.toFixed(2) + '</div>' + '<div class="info-option"> ' + 'Temperature: ' + m.map[m.selectedX][m.selectedY].t.toFixed(2) + '</div>'
            document.getElementById("info").style.display = "inline-block"
            document.getElementById("info-top").style.display = "inline-block"
        }
        draw()
    }
}




