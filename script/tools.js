let pencil = document.getElementById("pencil");
let brush = document.getElementById("brush");
let eraser = document.getElementById("eraser");

pencil.onclick = function () {
    size.innerHTML = 5;
    context.lineWidth = 5;
    pencil.style.backgroundColor = "green";
    brush.style.backgroundColor = "white";
    eraser.style.backgroundColor = "white";
}
brush.onclick = function () {
    size.innerHTML = 20;
    context.lineWidth = 20;
    pencil.style.backgroundColor = "white";
    eraser.style.backgroundColor = "white";
    brush.style.backgroundColor = "green";
}
eraser.onclick = function () {
    size.innerHTML = 10;
    context.lineWidth = 10;
    context.strokeStyle = 'white';
    eraser.style.backgroundColor = "green";
    brush.style.backgroundColor = "white";
    pencil.style.backgroundColor = "white";
}