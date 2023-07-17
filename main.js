let secondsStr = "00";
let minutes = 25;
let minutesStr = "25";
let seconds = 0;
let IsVisible = false
let IsClicked = true


let min = document.getElementById("minutes")
let sec = document.getElementById("seconds")
let clickBtn = document.getElementById("click")
let refreshBtn = document.getElementById("refreshClick")
let visible = document.getElementById("visible")
let setVisible = document.getElementById("setupTime")
let countTime = document.getElementById("countTime")
let icrement = document.getElementById("icrement")
let decrement = document.getElementById("decrement")
let endDiv = document.getElementById("end")

let clickSound = new Audio("click.mp3");
let bell = new Audio("bell.mp3");

diplayTime()

function diplayTime() {
  (seconds < 10) ? sec.innerHTML = `0${seconds}` : sec.innerHTML = seconds;
  (minutes < 10) ? min.innerHTML = `0${minutes}` : min.innerHTML = minutes;
  (minutes < 10 && IsVisible === true) ? countTime.innerHTML = `0${minutes}` : countTime.innerHTML = minutes;
}

function timer() {
  if (minutes === 0 && seconds === 0) {
    endDiv.innerHTML = "Session Completed!! Take a Break";
    IsClicked = false
    return;
  }
  else {
    if (seconds === 0) {
      minutes--
      seconds = 60
    }
    seconds--

    diplayTime()
  }
}

clickBtn.addEventListener('click', () => {
  if (IsClicked) {
    (IsClicked) ? IsClicked = false : IsClicked;
    if (IsVisible === false) {
      setInterval(() => timer(), 1000)
      clickSound.play()
      endDiv.innerHTML = "";
    } else {
      alert("Setup time not end");
      IsClicked = true
    }
  } else {
    alert("Double click on buton start. Wait for the end of the timer or refresh of the timer!!!");
  }
})

visible.addEventListener('click', () => {
  if (IsClicked) {
    (IsVisible === false) ? IsVisible = true : IsVisible = false;
    (IsVisible === false) ? setVisible.style.opacity = 0 : setVisible.style.opacity = 1;
  } else {
    alert("Cannot be clicked while the timer already started ")
  }
})

icrement.addEventListener('click', () => {
  (minutes > 1 && minutes < 60) ? ++minutes : minutes;
  diplayTime()
})

decrement.addEventListener('click', () => {
  (minutes > 1 && minutes < 60) ? --minutes : minutes;
  diplayTime()
})