const buildPage = require('./buildPage');

const menuItems = [
{tag_list: [], slug: 'x', mame: 'et dolore magna aliqua'},
{tag_list: [], slug: 'x', mame: 'Ut enim ad minim veniam'},
{tag_list: [], slug: 'x', mame: 'quis nostrud exercitation ullamco laboris nisi'},
{tag_list: [], slug: 'x', mame: 'ut aliquip ex ea commodo consequat'},
{tag_list: [], slug: 'x', mame: 'Duis aute irure dolor in reprehenderit in'},
{tag_list: [], slug: 'x', mame: 'voluptate velit esse cillum dolore eu'},
{tag_list: [], slug: 'x', mame: 'fugiat nulla pariatur'},
{tag_list: [], slug: 'x', mame: 'Excepteur sint occaecat cupidatat non proident'}]

module.exports = buildPage({heading: 'template heading', menu: menuItems });