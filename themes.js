const darkThemes = [
    '#07065A', '#410202'
]

const lightThemes = [
    '#c2ffc8', '#ffc2f6', '#ffcfc2'
]

const getTheme = () => {
    const tday = new Date().getDate();
    const darkThemePick = tday % (darkThemes.length - 1);
    const lightThemePick = tday % (lightThemes.length - 1);
    return {dark: darkThemes[darkThemePick], light:lightThemes[lightThemePick] }
}

module.exports = getTheme;