'use strict';

function nowTimeDisplay(){
    let nowTime = new Date();
    document.getElementById('now').textContent = nowTime;
    document.getElementById('hours').innerHTML = ('<span class="number-5000-i" title="' + ('00' + nowTime.getHours()).slice(-2) + '">' + ('00' + nowTime.getHours()).slice(-2) + '</span>');
    document.getElementById('minutes').innerHTML = ('<span class="number-5000-i" title="' + ('00' + nowTime.getMinutes()).slice(-2) + '">' + ('00' + nowTime.getMinutes()).slice(-2) + '</span>');
    document.getElementById('seconds').innerHTML = ('<span class="number-5000-i" title="' + ('00' + nowTime.getSeconds()).slice(-2) + '">' + ('00' + nowTime.getSeconds()).slice(-2) + '</span>');

    setTimeout(nowTimeDisplay, 100);
}

nowTimeDisplay();