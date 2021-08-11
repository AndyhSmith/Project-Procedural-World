// document.addEventListener('touchstart', handleTouchStart, false);        
// document.addEventListener('touchmove', handleTouchMove, false);
// document.addEventListener('touchend', handleTouchEnd, false);

var xDown = null;                                                        
var yDown = null;

var xUpEnd = null;                                                        
var yUpEnd = null;

var moved = false

function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}                                                     


// END
// TOUCH END
function handleTouchEnd() {
    moved = false
    checkClick()
}

// CLICK END
function onEndClick() {
    moved = false
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
};    

// CLICK START
function onStartClick(event) {
    moved = true;
    xDown = event.clientX;                                      
    yDown = event.clientY; 
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

        if (m.selectedX != null && m.selectedY != null) {
            m.map[m.selectedX][m.selectedY].selected = false
        }
        
        m.selectedX = Math.floor((xDown - camera.x) / m.tileSize)
        m.selectedY = Math.floor((yDown - camera.y) / m.tileSize)  
        if (m.selectedX > m.w - 1) {
            m.selectedX = null
        }
        else if (m.selectedY > m.h - 1) {
            m.selectedY = null
        }

        if (m.selectedX != null && m.selectedY != null) {
            
            // m.map[m.selectedX][m.selectedY].r = 0
            // m.map[m.selectedX][m.selectedY].g = 128
            // m.map[m.selectedX][m.selectedY].b = 128
            // m.map[m.selectedX][m.selectedY].renderColor()
            m.map[m.selectedX][m.selectedY].selected = true;
            draw()
        } 
  
}




