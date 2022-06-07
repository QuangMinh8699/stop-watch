const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const resetButton = document.getElementById("resetButton");
const secondsArea = document.getElementById("seconds");
const tensArea = document.getElementById("tens");
let tens = 00;
let seconds = 00;
let Interval;

const startTimer = () => {
  tens++;
  tens <= 9 ? (tensArea.innerHTML = "0" + tens) : (tensArea.innerHTML = tens);

  if (tens >= 100) {
    tens = 0;
    seconds++;
    seconds <= 9
      ? (secondsArea.innerHTML = "0" + seconds)
      : (secondsArea.innerHTML = seconds);
  }
};

const startHandle = () => {
  clearInterval(Interval);
  Interval = setInterval(startTimer, 10);
  console.log("start");
};

const stopHandle = () => {
  clearInterval(Interval);
  console.log("stop");
};

const resetHandle = () => {
  clearInterval(Interval);
  seconds = 00;
  tens = 00;
  tensArea.innerHTML = "00";
  secondsArea.innerHTML = "00";
  console.log("reset");
};

startButton.addEventListener("click", startHandle);
stopButton.addEventListener("click", stopHandle);
resetButton.addEventListener("click", resetHandle);
