/**
 * scheme.js
 *
 * @license MIT
 */

let isDark;
let moon;
let sun;
let dark_sheet;
let light_sheet;

const getStyleSheet = (name) => {
  sheets = document.styleSheets;

  for (let i = 0; i < sheets.length; i++) {
    if (sheets[i].href.includes(name)) {
      return sheets[i];
    }
  }
} // getStyleSheet()

/**
 *  initTheme() us *localStorage* records user's choice of light/dark
 *  mode.  *prefers-color-scheme* is not reliable here because user
 *  might toggle light/dark theme at one page and switch to another
 *  page.  Hence, we use the *localStorage* to keep track of that
 *  information.
 */
export const initTheme = () => {
  dark_sheet = getStyleSheet('dark');
  light_sheet = getStyleSheet('light');
  moon = document.getElementById('moon');
  sun = document.getElementById('sun');

  let mode = localStorage.getItem('is-dark');

  if (mode === null) {;
    isDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
  }
  else {
    isDark = (mode === 'true') ? true : false;
  }

  isDark = !isDark;

  switchTheme();
} // initTheme()

export const switchTheme = () => {
  if (isDark) {
    document.documentElement.style
      .setProperty('color-scheme', 'light');

    moon.style.setProperty('animation', 'rise 1s forwards');
    sun.style.setProperty('animation', 'fall 1s forwards');

    dark_sheet.disabled = true;
    light_sheet.disabled = false;
  }
  else {
    document.documentElement.style
      .setProperty('color-scheme', 'dark');

    moon.style.setProperty('animation', 'fall 1s forwards');
    sun.style.setProperty('animation', 'rise 1s forwards');

    dark_sheet.disabled = false;
    light_sheet.disabled = true;
  }

  isDark = !isDark;
  localStorage.setItem('is-dark', isDark);
} // switchTheme()

// scheme.js
