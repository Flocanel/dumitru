const initialMinute = 1;
let time = initialMinute *60;

const countdownEl = document.getElementById('timerText');


setInterval(updateCountdown,1000);

const audio3 = new Audio();
audio3.scr = "amber.mp3";

function updateCountdown(){
    const minute = Math.floor(time/60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownEl.innerHTML= `${minute}:${seconds}`;
    if (time > 0)
    time--;
    if (time==0) audio3.play();
}


const audio = new Audio();
audio.src = "audio.mp3";







