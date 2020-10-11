const root = document.getElementById('root');
setInterval(printTime, 1000);

function printTime() {
    const d = new Date();
    const h = adding(d.getHours());
    const m = adding(d.getMinutes());
    const s = adding(d.getSeconds());
    const h1 = document.createElement('h1');


    const time = document.createTextNode(`${h} : ${m} : ${s}`);
    h1.append(time);
    if (root.firstElementChild){
        root.replaceChild(h1, root.firstElementChild);
    } else{
        root.append(h1);
    }
}

function adding(t) {
    return t < 10 ? ('0' + t) : t;
}