let size = document.getElementById("size");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let pencil = document.getElementById("pencil");
let brush = document.getElementById("brush");
let eraser = document.getElementById("eraser");

plus.onclick = function () {
    console.log("plus")
    size.innerHTML = parseInt(size.innerHTML) + 1;
}
minus.onclick = function () {
    if (size.innerHTML == '0') {
        return;
    }
    size.innerHTML = parseInt(size.innerHTML) - 1;
}
pencil.onclick = function () {
    size.innerHTML = 3;
}
brush.onclick = function () {
    size.innerHTML = 7;
}
eraser.onclick = function () {
    size.innerHTML = 1;
}