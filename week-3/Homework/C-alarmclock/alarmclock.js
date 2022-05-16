
let timeclock
let alarmSet
let timeRemaining

function prueba(){
  
  if (alarmSet >= 0) {
    console.log(alarmSet);
    if (alarmSet < 10) {
      timeRemaining.textContent = "Time Remaining: 00:0" + alarmSet;
    } else if (alarmSet < 60) {
      timeRemaining.textContent = "Time Remaining: 00:" + alarmSet;
    } else if (alarmSet >= 60) {
      if (alarmSet / 60 < 10) {
        if (alarmSet % 60 < 10) {
          timeRemaining.textContent =
            "Time Remaining: " +
            "0" +
            Math.round(alarmSet / 60) +
            ":0" +
            (alarmSet % 60);
        } else {
          timeRemaining.textContent =
            "Time Remaining: " +
            Math.round(alarmSet / 60) +
            ":" +
            (alarmSet % 60);
        }
      } else {
        if (alarmSet % 60 < 10) {
          timeRemaining.textContent =
            "Time Remaining: " +
            Math.round(alarmSet / 60) +
            ":0" +
            (alarmSet % 60);
        } else {
          timeRemaining.textContent =
            "Time Remaining: " +
            Math.round(alarmSet / 60) +
            ":" +
            (alarmSet % 60);
        }}}
    alarmSet--;
  } else {
    timeRemaining.style.color="red"
    playAlarm();
  }}
  
function setAlarm() {
  if (!timeclock) {
    timeclock = setInterval(prueba, 1000,alarmSet = document.querySelector("#alarmSet").value, timeRemaining = document.querySelector("#timeRemaining"));
  }}

function pauseAlarm(){
  clearInterval(timeclock)
  timeclock=null
  }


// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    stopAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
