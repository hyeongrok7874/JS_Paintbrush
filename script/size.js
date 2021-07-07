let width = document.getElementById("width");
let height = document.getElementById("height");
let widthMinus = document.getElementById("width-minus");
let widthPlus = document.getElementById("width-plus");
let heightMinus = document.getElementById("height-minus");
let heightPlus = document.getElementById("height-plus");

update();

widthMinus.onclick = function () {
    canvas.width -= 10;
    update();
}
widthPlus.onclick = function () {
    canvas.width += 10;
    update();
}
heightMinus.onclick = function () {
    canvas.height -= 10;
    update();
}
heightPlus.onclick = function () {
    canvas.height += 10;
    update();
}

function update() {
    width.innerHTML = parseInt(canvas.width);
    height.innerHTML = parseInt(canvas.height);
    canvas.style.marginLeft = "auto";
    canvas.style.marginRight = "auto";
}