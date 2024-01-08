export default function createNewTimerManager() {
  const addTimer = document.getElementById("addTimer");

  let defaultMinutes;
  let defaultSeconds;

  function isNumber(num) {
    if (typeof num === "number" && !isNaN(num) && num >= 0 && num < 60) {
      return num;
    } else {
      num = Number(
        prompt("Это не число или оно меньше 0/больше 60. Попробуйте ещё раз.")
      );
      notNumber = isNumber(num);
      return notNumber;
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

  addTimer.addEventListener("click", setNewTimer);
  window.addEventListener("load", setTimerOnLoad);
}
