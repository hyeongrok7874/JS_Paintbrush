let size = document.getElementById("size");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let pencil = document.getElementById("pencil");
let brush = document.getElementById("brush");
let eraser = document.getElementById("eraser");

plus.onclick = function () {
    console.log("plus")
    size.innerHTML = parseInt(size.innerHTML) + 1;
    context.lineWidth = parseInt(size.innerHTML);
}
minus.onclick = function () {
    if (size.innerHTML == 1) {
        return;
    }
    size.innerHTML = parseInt(size.innerHTML) - 1;
    context.lineWidth = parseInt(size.innerHTML);
}
pencil.onclick = function () {
    size.innerHTML = 5;
    context.lineWidth = 5;
}
brush.onclick = function () {
    size.innerHTML = 20;
    context.lineWidth = 20;
}
eraser.onclick = function () {
    size.innerHTML = 10;
    context.lineWidth = 10;
    context.strokeStyle = 'white';
}