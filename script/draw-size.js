let size = document.getElementById("size");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");

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