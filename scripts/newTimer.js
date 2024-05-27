export default function createNewTimerManager() {
  const popup = document.getElementById("popup");

  const addTimerButton = document.getElementById("addTimer");
  const resetButton = document.getElementById("reset");
  const setNewTimerButton = document.getElementById("popup__button");
  const popupCloseButton = document.getElementById("close");

  const newTimer = document.getElementById("newTime");
  const error = document.getElementById("error");

  const minutesHtml = document.getElementById("minutes");
  const secondsHtml = document.getElementById("seconds");

  let defaultMinutes = 0;
  let defaultSeconds = 50;

  function validateNewTimer(value) {
    const regex = /^(?=.*:)\d+:\d+$/;
    return regex.test(value);
  }

  function getNewTimer() {
    const newTimerValue = newTimer.value;
    const newTime = newTimerValue.split(":");

    if (validateNewTimer(newTimerValue) && newTime[0] < 60 && newTime[1] < 60) {
      error.classList.remove("show");
      newTimer.value = "";
      closePopup();

      [defaultMinutes, defaultSeconds] = newTime;
      setTimerOnLoad(defaultMinutes, defaultSeconds);

    } else {
      error.classList.add("show");
    }
  }

  function resetTimer() {
    setTimerOnLoad(defaultMinutes, defaultSeconds);
  }

  function setTimerOnLoad(min, sec) {
    if (sec < 10) {
      secondsHtml.innerHTML = "0" + sec;
    } else {
      secondsHtml.innerHTML = sec;
    }

    if (min < 10) {
      minutesHtml.innerHTML = "0" + min;
    } else {
      minutesHtml.innerHTML = min;
    }

    if (play.classList.contains("pause")) {
      play.classList.remove("pause");
      play.classList.add("play");
    }
  }

  function closePopup() {
    popup.classList.remove("show");
  }

  function openPopup() {
    popup.classList.add("show");
    popup.addEventListener("click", (e) => {
      if (!e.target.closest(".popup__content")) {
        closePopup();
      }
    });
  }

  addTimerButton.addEventListener("click", openPopup);
  popupCloseButton.addEventListener("click", closePopup);
  setNewTimerButton.addEventListener("click", getNewTimer);
  resetButton.addEventListener("click", resetTimer);
}
