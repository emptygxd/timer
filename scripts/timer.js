export default function createTimerManager() {
  const minutesHtml = document.getElementById("minutes");
  const secondsHtml = document.getElementById("seconds");
  const play = document.getElementById("play");
  const audio = document.querySelector("audio");

  let seconds = 50;
  let minutes = 0;

  function togglePicture() {
    play.classList.toggle("play");
    play.classList.toggle("pause");
    if (play.classList.contains("play")) {
      play.title = "Возобновить";
    } else {
      play.title = "Пауза";
    }
  }

  function playTimer() {
    seconds = secondsHtml.innerText;
    minutes = secondsHtml.innerText;
    if (minutes === 0 && seconds === 0) {
      play.classList.toggle("play");
      play.classList.toggle("pause");

      audio.play();
      setTimeout(() => {
        audio.pause();
      }, 2000);
      return;
    }

    if (seconds === 0) {
      minutes--;
      seconds = 59;

      if (minutes < 10) {
        minutesHtml.innerHTML = "0" + minutes;
      } else {
        minutesHtml.innerHTML = minutes;
      }

      minutesHtml.innerHTML = minutes;
      secondsHtml.innerHTML = seconds;
    } else {
      seconds--;
      if (seconds < 10) {
        secondsHtml.innerHTML = "0" + seconds;
      } else {
        secondsHtml.innerHTML = seconds;
      }
    }
  }

  let interval = setInterval(() => {
    if (play.classList.contains("pause")) {
      playTimer();
    }
  }, 1000);

  play.addEventListener("click", togglePicture);
}
