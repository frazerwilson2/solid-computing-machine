const categories = {
    css: '&#x1F3A8;',
    film: '&#x1F3AC;',
    web: '&#x1F4BB;'
}

const getIcon = category => {
    return categories[category] || '&#x1F313;';
}

module.exports = getIcon;