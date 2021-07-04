const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let painting = false;
ctx.strokeStyle = "black";
ctx.lineWidth = 25;

if (canvas) {
    canvas.addEventListener("mouseover", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}

function startPainting(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    
    ctx.beginPath();
    ctx.moveTo(x, y);
    painting = true;
}

function stopPainting() {
    ctx.closePath();
    painting = false;
}

function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;

    if (!painting) {
        return;
    }
    ctx.lineTo(x, y);
    ctx.stroke();
}

