const addTimer = document.getElementById("addTimer");

function isNumber(input) {
  if (typeof input == "number" && !isNaN(input) && input < 60 && input >= 0) {
    return input;
  } else {
    input = Number(
      prompt("Это не число или оно больше 60/меньше 0 . Попробуйте ещё раз")
    );
    notNumber = isNumber(input);
    return notNumber;
  }
}

function setNewTimer() {
  if (!addTimer.classList.contains("reset")) {
    addTimer.classList.add("reset");
    addTimer.src = "./assets/controls/stop.svg";
    addTimer.title = "Сброс";

    minutes = Number(prompt("Сколько минут?"));
    minutes = isNumber(minutes);
    defaultMinutes = minutes;

    seconds = Number(prompt("Сколько секунд?"));
    seconds = isNumber(seconds);
    defaultSeconds = seconds;

    setTimerOnLoad();
  } else {
    toDefault();
  }
}

function setTimerOnLoad() {
  minutesHtml.innerHTML = minutes;
  if (seconds === 0) {
    secondsHtml.innerHTML = "0" + seconds;
  } else {
    secondsHtml.innerHTML = seconds;
  }
}

function toDefault() {
  minutesHtml.innerHTML = defaultMinutes;
  if (seconds === 0) {
    secondsHtml.innerHTML = "0" + defaultSeconds;
  } else {
    secondsHtml.innerHTML = defaultSeconds;
  }

  minutes = defaultMinutes;
  seconds = defaultSeconds;

  if (play.classList.contains("pause")) {
    play.classList.remove("pause");
    play.classList.add("play");
  }

  clearInterval(interval);
  interval = setInterval(() => {
    if (play.classList.contains("pause")) {
      playTimer();
    }
  }, 1000);

  addTimer.classList.remove("reset");
  addTimer.src = "./assets/controls/timer.svg";
  addTimer.title = "Новый таймер";
}

addTimer.addEventListener("click", setNewTimer);
window.addEventListener("load", setTimerOnLoad);
