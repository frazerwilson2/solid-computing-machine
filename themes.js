const darkThemes = [
    {main:'#07065A', contrast: '#ff84d1'},
    {main:'#410202', contrast: '#faf9cb'},
    {main:'#042905', contrast: '#fdfff2'},
]

const lightThemes = [
    {main:'#d9ffa8', contrast:'#211e1e'},
    {main:'#ffc2f6', contrast:'#0c1f5e'},
    {main:'#ffcfc2', contrast:'#07234c'},
]

const getTheme = () => {
    const tday = new Date().getDate();
    const darkThemePick = tday % (darkThemes.length - 1);
    const lightThemePick = tday % (lightThemes.length - 1);
    return {dark: darkThemes[darkThemePick], light:lightThemes[lightThemePick] }
}

module.exports = getTheme;