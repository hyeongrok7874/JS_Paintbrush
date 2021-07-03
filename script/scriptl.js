let canvas = document.getElementById('canvas');
draw(canvas);

function draw(canvas) {
    let ctx = canvas.getContext("2d");
    ctx.moveTo(50, 100);
    ctx.lineTo(100, 100);
    ctx.stroke();
}