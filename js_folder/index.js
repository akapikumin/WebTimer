'use strict';

function nowTimeDisplay(){
    document.getElementById('now').textContent = new Date();
    setTimeout(nowTimeDisplay, 100);
}

nowTimeDisplay();