'use strict';

function nowTimeDisplay(){
    let nowTime = new Date();
    document.getElementById('now').textContent = nowTime;
    document.getElementById('hours').textContent = nowTime.getHours();
    document.getElementById('minutes').textContent = nowTime.getMinutes();
    document.getElementById('seconds').textContent = nowTime.getSeconds();
    setTimeout(nowTimeDisplay, 100);
}

nowTimeDisplay();