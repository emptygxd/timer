import createTimerManager from "./timer.js";
import createThemeManager from "./themeChanger.js";
import createVolumeManager from "./mute.js";
import createNewTimerManager from "./newTimer.js";

const timerManager = createTimerManager();
const themeManager = createThemeManager();
const volumeManager = createVolumeManager();
const newTimerManager = createNewTimerManager();

themeManager.loadTheme();
volumeManager.loadVolume();

window.toggleTheme = themeManager.toggleTheme;
window.toggleVolume = volumeManager.toggleVolume;
