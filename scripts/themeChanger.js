const button = document.getElementById("theme");

function setTheme(themeName) {
  localStorage.setItem("theme", themeName);
  document.documentElement.className = themeName;
}

function toggleTheme() {
  if (localStorage.getItem("theme") === "theme-dark") {
    setTheme("theme-light");
    button.title = "Тёмная тема";
    button.src = "./assets/themes/moon.svg";
  } else {
    setTheme("theme-dark");
    button.title = "Светлая тема";
    button.src = "./assets/themes/sun.svg";
  }
}

function loadTheme() {
  if (localStorage.getItem("theme") === "theme-dark") {
    setTheme("theme-dark");
    button.title = "Светлая тема";
    button.src = "./assets/themes/sun.svg";
  } else {
    setTheme("theme-light");
    button.title = "Тёмная тема";
    button.src = "./assets/themes/moon.svg";
  }
}

loadTheme();
