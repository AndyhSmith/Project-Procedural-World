// Clamp number between two values
function clamp(number, min, max) {
    return Math.max(min, Math.min(number, max));
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 