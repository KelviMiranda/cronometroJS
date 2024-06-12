const minutesEl = document.querySelector("#minutes");
const secondEl = document.querySelector("#seconds");
const millisecondsEl = document.querySelector("#milliseconds");
const startEl = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resumeBtn = document.querySelector("#resumeBtn")
const resetBtn = document.querySelector("#resetBtn")

let interval;
let minutes = 0;
let seconds = 0;
let millseconds = 0;
let isPaused = false;

startEl.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resumeBtn.addEventListener("click", resumeTimer);
resetBtn.addEventListener("click", resetTimer);

function startTimer(){
    interval = setInterval(()=>{
        if(!isPaused){
            millseconds +=10;

            if(millseconds === 1000){
                seconds++;
                millseconds = 0;
            }

            if(seconds === 60){
                minutes++;
                seconds = 0;
            }
        }       

        minutesEl.textContent = formatTime(minutes);
        secondEl.textContent = formatTime(seconds);
        millisecondsEl.textContent = formatMilliseconds(millseconds);
    },10)

    startBtn.style.display = "none";
    pauseBtn.style.display = "block";
}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

function formatMilliseconds(time){
    return time < 100 ? `${time}`.padStart(3, "0") : time;

}

function pauseTimer(){
    isPaused = true;
    pauseBtn.style.display = "none";
    resumeBtn.style.display = "block"
}

function resumeTimer(){
    isPaused = false;
    resumeBtn.style.display = "none";
    pauseBtn.style.display = "block";
}

function resetTimer(){
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    millseconds = 0;
    
    minutesEl.textContent = "00";
    secondEl.textContent = "00";
    millisecondsEl.textContent = "000";

    startBtn.style.display = "block";
    pauseBtn.style.display = "none";
    resumeBtn.style.display = "none";
}