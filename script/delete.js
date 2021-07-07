let deleteAll = document.getElementById("delete-all");

deleteAll.onclick = function () {
    canvas.width = canvas.width;
    context.lineWidth = parseInt(size.innerHTML);
}