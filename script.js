console.log("Stopwatch")

let seconds = 0;
let tens = 0;
let minutes = 0;
let getMinutes = document.querySelector('.minutes')
let getSeconds = document.querySelector('.seconds')
let getTens = document.querySelector('.tens')
let btnStart = document.querySelector('.btn-start')
let btnStop = document.querySelector('.btn-stop')
let btnReset = document.querySelector('.btn-reset')
let btnLap = document.querySelector('.btn-lap')
let lapsDiv = document.querySelector('.laps')
let interval;
let running = false;
let lapCount = 0;

const formatTime = (min, sec, ten) => {
    return `${min.toString().padStart(2, '0')} : ${sec.toString().padStart(2, '0')}:${ten.toString().padStart(2, '0')}`;
}

const startTime = ()=>{
    tens++;
    if (tens <= 9) {
        getTens.innerHTML = '0' + tens;
    }
    if (tens > 9) {
        getTens.innerHTML = tens;
    }
    if (tens > 99) {
        seconds++;
        getSeconds.innerHTML = '0' + seconds;
        tens = 0;
        getTens.innerHTML = '0' + 0;
    }
    if (seconds > 9) {
        getSeconds.innerHTML = seconds;
    }
    if(seconds > 59){
        minutes++;
        getMinutes.innerHTML = '0' + minutes;
        seconds = 0;
        getSeconds.innerHTML = '0' + 0
    }
}

btnStart.addEventListener('click', () => {
   if (!running) {
      interval = setInterval(startTime, 10);
      running = true;
   }
})

btnStop.addEventListener('click', () => {
    clearInterval(interval);
    running = false;
})

btnReset.addEventListener('click', () => {
    clearInterval(interval);
    tens = 0;
    seconds = 0;
    minutes = 0;
    getTens.innerHTML = '00';
    getSeconds.innerHTML = '00';
    getMinutes.innerHTML = '00';
    lapsDiv.innerHTML = '';
    lapCount = 0;
    running = false;
})

btnLap.addEventListener('click', () => {
    if (running) {
        lapCount++;
        const lapTime = formatTime(minutes, seconds, tens);
        const lapElem = document.createElement('div');
        lapElem.textContent = `Lap ${lapCount}: ${lapTime}`;
        lapsDiv.appendChild(lapElem);
    }
})