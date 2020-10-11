const box = document.getElementById('box');
const container = document.getElementById('container');
const size = container.offsetWidth - box.offsetWidth + 1;
let pos = 0;
let down = true;
const t = setInterval(move, 30);

function move() {
    box.style.left = pos + 'px';
    box.style.top = pos + 'px';
    if (pos >= size){
        down = false;
    }
    if (pos === 0){
        down = true;
    }
    down ? pos++ : pos--;
}
