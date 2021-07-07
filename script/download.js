let download = document.getElementById("download");

download.onclick = function() { 
    downloadCanvas(this, 'canvas', 'my_painting.png');
};

function downloadCanvas(link, canvasId, filename) {
    link.href = document.getElementById(canvasId).toDataURL();
    link.download = filename;
}

