const buildPage = require('./buildPage');

const menuItems = ` <!-- <li style="transform: translateY(10px);"><a href="#">Lorem ipsum dolor sit amet</a></li>
<li style="transform: translateY(130px);"><a href="#">consectetur adipiscing elit sed</a></li>
<li style="transform: translateY(260px);"><a href="#">do eiusmod tempor incididunt ut labore</a></li> -->
<li><a href="#">et dolore magna aliqua</a></li>
<li><a href="#">Ut enim ad minim veniam</a></li>
<li><a href="#">quis nostrud exercitation ullamco laboris nisi</a></li>
<li><a href="#">ut aliquip ex ea commodo consequat</a></li>
<li><a href="#">Duis aute irure dolor in reprehenderit in</a></li>
<li><a href="#">voluptate velit esse cillum dolore eu</a></li>
<li><a href="#">fugiat nulla pariatur</a></li>
<li><a href="#">Excepteur sint occaecat cupidatat non proident</a></li>`;

module.exports = buildPage({heading: 'template heading', menu: menuItems});