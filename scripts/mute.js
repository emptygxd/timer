const mute = document.getElementById("mute");
const audioVolume = document.querySelector("audio");

function setVolume(volumeName) {
  localStorage.setItem("volume", volumeName);
  mute.className = volumeName;
}

function toggleVolume() {
  if (localStorage.getItem("volume") === "muted") {
    setVolume("unmuted");
    mute.src = "./assets/controls/speaker-high.svg";
    mute.title = "Выключить звук";
    audioVolume.volume = 1;
  } else {
    setVolume("muted");
    mute.src = "./assets/controls/speaker-none.svg";
    mute.title = "Включить звук";
    audioVolume.volume = 0;
  }
}

function loadVolume() {
  if (localStorage.getItem("volume") === "muted") {
    setVolume("muted");
    mute.src = "./assets/controls/speaker-none.svg";
    mute.title = "Включить звук";
    audioVolume.volume = 0;
  } else {
    setVolume("unmuted");
    mute.src = "./assets/controls/speaker-high.svg";
    mute.title = "Выключить звук";
    audioVolume.volume = 1;
  }
}

loadVolume();
