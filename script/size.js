let size = document.getElementById("size");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");

plus.onclick = function(){
    size.innerHTML = parseInt(size.innerHTML) + 1;
}
minus.onclick = function(){
    size.innerHTML = parseInt(size.innerHTML) - 1;
}