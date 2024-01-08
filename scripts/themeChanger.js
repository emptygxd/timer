export default function createThemeManager() {
  const button = document.getElementById("theme");
  const themeDark = "theme-dark";
  const themeLight = "theme-light";

  function setTheme(themeName) {
    localStorage.setItem("theme", themeName);
    document.documentElement.className = themeName;
  }

  function toggleTheme() {
    if (localStorage.getItem("theme") === themeDark) {
      setTheme(themeLight);
      button.title = "Тёмная тема";
      button.src = "./assets/themes/moon.svg";
    } else {
      setTheme(themeDark);
      button.title = "Светлая тема";
      button.src = "./assets/themes/sun.svg";
    }
  }

  function loadTheme() {
    if (localStorage.getItem("theme") === themeDark) {
      setTheme(themeDark);
      button.title = "Светлая тема";
      button.src = "./assets/themes/sun.svg";
    } else {
      setTheme(themeLight);
      button.title = "Тёмная тема";
      button.src = "./assets/themes/moon.svg";
    }
  }

  return {
    toggleTheme,
    loadTheme,
  };
}
