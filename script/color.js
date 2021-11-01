let red = document.getElementById("red");
let blue = document.getElementById("blue");
let yellow = document.getElementById("yellow");
let orange = document.getElementById("orange");
let green = document.getElementById("green");
let black = document.getElementById("black");
let purple = document.getElementById("purple");
let pink = document.getElementById("pink");
let color = document.getElementsByClassName("color");

red.onclick = function () {
    console.log("dhd")
    context.strokeStyle = 'red';
}
blue.onclick = function () {
    context.strokeStyle = 'blue';
}
yellow.onclick = function () {
    context.strokeStyle = 'yellow';
}
orange.onclick = function () {
    context.strokeStyle = 'orange';
}
green.onclick = function () {
    context.strokeStyle = 'green';
}
black.onclick = function () {
    context.strokeStyle = 'black';
}
purple.onclick = function () {
    context.strokeStyle = 'purple';
}
pink.onclick = function () {
    context.strokeStyle = 'pink';
}

// for (let i = 0; i < 8; i++){
//     color[i].onclick = function () {
//         for (let j = 0; j < 8; j++){
//             if (j == i) {
//                 color[j].style.border = "3px solid #000000"
//             }
//             else {
//                 color[j].style.border = "3px solid #FFFFFF"
//             }
//         }
//     }
// }