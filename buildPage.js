const noStyles = () => `<div class="no-styles">
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
<pre>
_______ ___   _       __    _ _______   _______ _______ __   __ ___     _______ _______   _______ __   __ _______ __    _ 
|       |   | | |     |  |  | |       | |       |       |  | |  |   |   |       |       | |       |  | |  |       |  |  | |
|   _   |   |_| |     |   |_| |   _   | |  _____|_     _|  |_|  |   |   |    ___|  _____| |_     _|  |_|  |    ___|   |_| |
|  | |  |      _|     |       |  | |  | | |_____  |   | |       |   |   |   |___| |_____    |   | |       |   |___|       |
|  |_|  |     |_ ___  |  _    |  |_|  | |_____  | |   | |_     _|   |___|    ___|_____  |   |   | |       |    ___|  _    |
|       |    _  |_  | | | |   |       |  _____| | |   |   |   | |       |   |___ _____| |   |   | |   _   |   |___| | |   |
|_______|___| |_| |_| |_|  |__|_______| |_______| |___|   |___| |_______|_______|_______|   |___| |__| |__|_______|_|  |__|                                                                                                                                          
</pre>
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
</div>`;

const buildHeader = (meta = {title: '', description: ''}) => `
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👨‍🚀</text></svg>">
    <title>${meta.title}</title>
    <meta name="description" content="${meta.description}" >
    <style>
        html, body {
            font-family: Arial, sans-serif;
        }
        svg, button {
            visibility: hidden;
            width: 0;
            height: 0;
        }
    </style>
    <link href="https://fonts.googleapis.com/css2?family=Staatliches&display=swap" rel="stylesheet">
    <link id="mainStyles" rel="stylesheet" href="/style.css">
`;

const buildIcons = () => `
<svg style="display: none;" xmlns:i="http://ns.adobe.com/AdobeIllustrator/10.0/" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" style="enable-background:new 0 0 100 100;" xml:space="preserve">
    <symbol id="backArrow" viewBox="0 0 70 61" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M33.6748 37.5718C48.9893 37.8618 62.0176 47.4863 67.3115 60.9951C68.9463 56.8276 69.8438 52.2905 69.8438 47.543C69.8438 27.4126 53.7148 11.0508 33.6748 10.6699V0L0 24.2256L33.6748 48.4497V37.5718Z" fill="var(--contrast)"/>
    </symbol>
    <symbol id="code" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.99777 4.75443L4.75513 8.99707L44.9966 49.2385L49.2392 44.9959L8.99777 4.75443Z" fill="var(--theme)"/>
        <path d="M54 5C54 3.67392 53.4732 2.40215 52.5355 1.46447C51.5979 0.526784 50.3261 0 49 0H31V6H48V23H54V5Z" fill="var(--theme)"/>
        <path d="M5 54H23V48H6V31H0V49C0 50.3261 0.526784 51.5979 1.46447 52.5355C2.40215 53.4732 3.67392 54 5 54V54Z" fill="var(--theme)"/>
    </symbol>
    <symbol id="moon" viewBox="0 0 77 76" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M57.6291 58.129C35.6731 58.129 17.8741 40.33 17.8741 18.373C17.8741 11.744 19.5071 5.496 22.3781 0C9.67307 6.635 0.99707 19.926 0.99707 35.25C0.99707 57.207 18.7961 75.006 40.7521 75.006C56.0771 75.006 69.3681 66.328 76.0031 53.625C70.5061 56.496 64.2601 58.129 57.6291 58.129Z" fill="var(--theme)"/>
    </symbol>
    <symbol id="sun" viewBox="0 0 76 76" xmlns="http://www.w3.org/2000/svg">
        <path d="M75.9218 36.0207V39.8168C75.9218 40.8291 75.0782 41.6726 73.9816 41.6726L63.7743 41.1665C63.3525 41.1665 63.0994 41.4196 63.0151 41.757C62.9307 42.5162 62.762 43.1911 62.5933 43.8659C62.5089 44.2034 62.6777 44.6251 63.0151 44.7095L72.6318 48.1682C73.6441 48.5056 74.0659 49.6022 73.7285 50.6145L72.2944 54.1575C71.8726 55.0855 70.776 55.5916 69.8481 55.0855L60.6531 50.6989C60.3156 50.5302 59.8939 50.6989 59.7251 50.952C59.3877 51.5425 58.9659 52.2173 58.5441 52.7235C58.2911 53.0609 58.3754 53.4827 58.6285 53.7358L66.2207 60.5687C66.9799 61.2436 67.0642 62.5089 66.305 63.1838L63.6056 65.8832C62.8464 66.6425 61.6654 66.5581 60.9905 65.7989L54.1575 58.2067C53.9045 57.9536 53.4827 57.8693 53.1453 58.1223C52.5548 58.5441 51.9643 58.9659 51.2894 59.3034C50.952 59.4721 50.8676 59.8939 51.0363 60.2313L55.4229 69.4263C55.8447 70.3542 55.4229 71.5352 54.495 71.8726L50.952 73.3067C50.024 73.7285 48.843 73.2223 48.5056 72.2101L45.0469 62.5933C44.9626 62.2559 44.5408 62.0871 44.2034 62.1715C43.5285 62.3402 42.7693 62.5089 42.0944 62.5933C41.757 62.6777 41.4196 62.9307 41.5039 63.3525L42.0101 73.5598C42.0944 74.5721 41.2508 75.5 40.1542 75.5H36.3581C35.3458 75.5 34.5022 74.6564 34.5022 73.5598L35.0084 63.3525C35.0084 62.9307 34.7553 62.6777 34.4179 62.5933C33.6587 62.5089 32.9838 62.3402 32.3089 62.1715C31.9715 62.0871 31.5497 62.2559 31.4654 62.5933L28.0067 72.2101C27.6693 73.2223 26.5726 73.6441 25.5603 73.3067L22.0173 71.8726C21.0894 71.4508 20.5832 70.3542 21.0894 69.4263L25.476 60.2313C25.6447 59.8939 25.476 59.4721 25.2229 59.3034C24.6324 58.9659 23.9575 58.5441 23.4514 58.1223C23.114 57.8693 22.6922 57.9536 22.4391 58.2067L15.6061 65.7989C14.9313 66.5581 13.6659 66.6425 12.9911 65.8832L10.2916 63.1838C9.5324 62.4246 9.61676 61.2436 10.376 60.5687L17.9682 53.7358C18.2212 53.4827 18.3056 53.0609 18.0525 52.7235C17.6307 52.133 17.2089 51.5425 16.8715 50.952C16.7028 50.6145 16.281 50.5302 15.9436 50.6989L6.7486 55.0855C5.82067 55.5073 4.63967 55.0855 4.30224 54.1575L2.86816 50.6145C2.44637 49.6866 2.95251 48.5056 3.9648 48.1682L13.5816 44.7095C13.919 44.6251 14.1721 44.2034 14.0034 43.8659C13.8346 43.1911 13.6659 42.4318 13.5816 41.757C13.4972 41.4196 13.1598 41.0821 12.8223 41.1665L1.94022 41.6726C0.843576 41.757 0 40.9134 0 39.9011V36.105C0 35.0927 0.843576 34.2492 1.94022 34.2492L12.1475 34.7553C12.4849 34.7553 12.8223 34.5022 12.9067 34.1648C12.9911 33.4056 13.1598 32.7307 13.3285 32.0559C13.4128 31.7184 13.2441 31.2966 12.9067 31.2123L3.20559 27.5849C2.1933 27.2475 1.77151 26.1508 2.10894 25.1385L3.54302 21.5955C3.9648 20.6676 5.06145 20.1615 5.98939 20.6676L15.1844 25.0542C15.5218 25.2229 15.9436 25.0542 16.1123 24.8011C16.4497 24.2106 16.8715 23.5358 17.2933 22.9453C17.5464 22.6078 17.462 22.186 17.2089 21.933L9.61676 15.1C8.85754 14.4251 8.85754 13.1598 9.5324 12.4849L12.2318 9.78548C12.9911 9.02626 14.1721 9.11062 14.8469 9.86983L21.6799 17.462C21.933 17.7151 22.3547 17.7994 22.6922 17.5464C23.2827 17.1246 23.8732 16.7028 24.4637 16.3654C24.8011 16.1966 24.8855 15.7749 24.7168 15.4374L20.3302 6.24246C19.9084 5.31452 20.3302 4.21788 21.2581 3.79609L24.8011 2.36201C25.7291 1.94022 26.8257 2.44637 27.2475 3.45866L30.7061 13.0754C30.7905 13.4128 31.2123 13.6659 31.5497 13.4972C32.2246 13.3285 32.9838 13.1598 33.6587 13.0754C33.9961 12.9911 34.3335 12.6536 34.2492 12.3162V1.94022C34.1648 0.843576 35.0084 0 36.0207 0H39.8168C40.8291 0 41.6726 0.843576 41.6726 1.94022L41.1665 12.1475C41.1665 12.5693 41.4196 12.8223 41.757 12.9067C42.5162 12.9911 43.1911 13.1598 43.8659 13.3285C44.2034 13.4128 44.6251 13.2441 44.7095 12.9067L48.1682 3.28994C48.5056 2.27765 49.6022 1.85587 50.6145 2.1933L54.1575 3.62737C55.0855 4.04916 55.5916 5.14581 55.0855 6.07374L50.6989 15.2687C50.5302 15.6061 50.6989 16.0279 50.952 16.1966C51.5425 16.6184 52.2173 16.9559 52.8078 17.3777C53.1453 17.6307 53.567 17.5464 53.8201 17.2933L60.6531 9.70112C61.3279 8.9419 62.5933 8.9419 63.2682 9.61676L65.9676 12.3162C66.7268 13.0754 66.6425 14.2564 65.8832 14.9313L58.2911 21.7642C58.038 22.0173 57.9536 22.4391 58.2067 22.7765C58.6285 23.367 59.0503 23.9575 59.3877 24.6324C59.5564 24.9698 59.9782 25.0542 60.3156 24.8855L69.5106 20.4989C70.4386 20.0771 71.6196 20.4989 71.957 21.4268L73.3911 24.9698C73.8129 25.8978 73.3067 26.9944 72.2944 27.4162L62.6777 30.8749C62.3402 31.0436 62.0872 31.381 62.2559 31.7184C62.4246 32.3933 62.5933 33.1525 62.6777 33.8274C62.762 34.1648 63.0994 34.5022 63.4369 34.4179L73.6441 33.9117C75.0782 34.1648 75.9218 35.0084 75.9218 36.0207Z" fill="var(--theme)"/>
    </symbol>  
    <symbol id="codepen" version="1.1" viewBox="0 0 128 128" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g id="_x36__stroke">
            <path clip-rule="evenodd" d="M117,73.204L103.24,64L117,54.796V73.204z     M69.5,112.22V86.568L93.348,70.62l19.248,12.872L69.5,112.22z M64,77.012L44.548,64L64,50.988L83.456,64L64,77.012z M58.5,112.22    L15.404,83.492L34.656,70.62L58.5,86.568V112.22z M11,54.796L24.764,64L11,73.204V54.796z M58.5,15.78v25.652L34.656,57.384    L15.404,44.508L58.5,15.78z M69.5,15.78l43.096,28.728L93.348,57.384L69.5,41.432V15.78z M127.952,43.784    c-0.012-0.084-0.032-0.16-0.044-0.24c-0.028-0.156-0.056-0.312-0.096-0.46c-0.024-0.092-0.06-0.18-0.088-0.268    c-0.044-0.136-0.088-0.268-0.14-0.4c-0.036-0.092-0.08-0.184-0.124-0.268c-0.056-0.128-0.116-0.248-0.188-0.364    c-0.048-0.088-0.104-0.172-0.156-0.256c-0.072-0.116-0.148-0.228-0.232-0.336c-0.06-0.08-0.124-0.16-0.188-0.236    c-0.088-0.104-0.18-0.204-0.276-0.3c-0.072-0.072-0.14-0.148-0.216-0.212c-0.104-0.092-0.208-0.18-0.312-0.264    c-0.084-0.064-0.164-0.128-0.248-0.188c-0.032-0.02-0.06-0.048-0.092-0.068l-58.5-39c-1.848-1.232-4.252-1.232-6.104,0l-58.496,39    c-0.032,0.02-0.06,0.048-0.092,0.068c-0.088,0.06-0.168,0.124-0.248,0.188C2.004,40.264,1.9,40.352,1.8,40.444    c-0.076,0.064-0.148,0.14-0.22,0.212c-0.096,0.096-0.188,0.196-0.272,0.3c-0.068,0.076-0.132,0.156-0.192,0.236    c-0.08,0.108-0.156,0.22-0.228,0.336c-0.056,0.084-0.108,0.168-0.16,0.256C0.66,41.9,0.6,42.02,0.54,42.148    c-0.04,0.084-0.084,0.176-0.12,0.268c-0.056,0.132-0.1,0.264-0.144,0.4c-0.028,0.088-0.06,0.176-0.084,0.268    c-0.04,0.148-0.068,0.304-0.096,0.46c-0.016,0.08-0.036,0.156-0.044,0.24C0.02,44.016,0,44.256,0,44.5v39    c0,0.24,0.02,0.48,0.052,0.72c0.008,0.076,0.028,0.156,0.044,0.236c0.028,0.156,0.056,0.308,0.096,0.46    c0.024,0.092,0.056,0.18,0.084,0.268c0.044,0.132,0.088,0.268,0.144,0.404c0.036,0.088,0.08,0.176,0.12,0.264    c0.06,0.124,0.12,0.244,0.188,0.368c0.052,0.084,0.104,0.168,0.16,0.252c0.072,0.116,0.148,0.224,0.228,0.332    c0.06,0.084,0.124,0.164,0.192,0.24c0.084,0.1,0.176,0.204,0.272,0.296c0.072,0.076,0.144,0.148,0.22,0.216    c0.1,0.092,0.204,0.18,0.312,0.264c0.08,0.064,0.16,0.128,0.248,0.188c0.032,0.02,0.06,0.048,0.092,0.068l58.496,39    C61.872,127.692,62.936,128,64,128s2.128-0.308,3.052-0.924l58.5-39c0.032-0.02,0.06-0.048,0.092-0.068    c0.084-0.06,0.164-0.124,0.248-0.188c0.104-0.084,0.208-0.172,0.312-0.264c0.076-0.068,0.144-0.14,0.216-0.216    c0.096-0.092,0.188-0.196,0.276-0.296c0.064-0.076,0.128-0.156,0.188-0.24c0.084-0.108,0.16-0.216,0.232-0.332    c0.052-0.084,0.108-0.168,0.156-0.252c0.072-0.124,0.132-0.244,0.188-0.368c0.044-0.088,0.088-0.176,0.124-0.264    c0.052-0.136,0.096-0.272,0.14-0.404c0.028-0.088,0.064-0.176,0.088-0.268c0.04-0.152,0.068-0.304,0.096-0.46    c0.012-0.08,0.032-0.16,0.044-0.236c0.032-0.24,0.048-0.48,0.048-0.72v-39C128,44.256,127.984,44.016,127.952,43.784z" fill="var(--contrast)" fill-rule="evenodd"/>
        </g>
    </symbol>  
    <symbol id="twitter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" fill="var(--contrast)"/>
    </symbol>  
    <symbol id="youtube" version="1.1" viewBox="170 80 400 400" xmlns="http://www.w3.org/2000/svg">
        <path d="m493.73 105.23c-95.48-15.867-192.92-15.867-288.4 0-54.598 11.434-88.664 46.664-88.664 92.633v163.33c0 46.668 34.066 81.434 89.602 93.332l-0.003906 0.003906c47.496 7.9961 95.57 12.055 143.73 12.133 48.312-0.011719 96.539-3.9922 144.2-11.902 54.133-10.266 89.133-46.668 89.133-93.332v-163.33c0-46.434-35-82.836-89.598-92.867zm-67.668 185.27-116.67 70c-1.8242 1.1133-3.9297 1.6797-6.0664 1.6328-2.0234-0.015624-4.0195-0.49609-5.832-1.3984-3.7344-2.2695-5.9648-6.3672-5.832-10.734v-140c0.035156-4.2031 2.2422-8.0859 5.832-10.266 3.7148-1.9922 8.1836-1.9922 11.898 0l116.67 70c3.4258 2.1836 5.5 5.9688 5.5 10.031 0 4.0664-2.0742 7.8477-5.5 10.035z" fill="var(--contrast)"/>
    </symbol> 
    <svg id="trophy" version="1.1" viewBox="50 0 570 570" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g>
        <path d="m293.12 529.38h113.75c2.4102 0 4.375-1.9609 4.375-4.375v-74.375c0-2.4141-1.9648-4.375-4.375-4.375h-113.75c-2.4102 0-4.375 1.9609-4.375 4.375v74.375c0 2.4141 1.9648 4.375 4.375 4.375z"/>
        <path d="m271.25 538.12c0 4.8242 3.9258 8.75 8.75 8.75h140c4.8242 0 8.75-3.9258 8.75-8.75v-109.38h-157.5zm8.75-87.5c0-7.2344 5.8906-13.125 13.125-13.125h113.75c7.2344 0 13.125 5.8906 13.125 13.125v74.375c0 7.2344-5.8906 13.125-13.125 13.125h-113.75c-7.2344 0-13.125-5.8906-13.125-13.125z"/>
        <path d="m435.31 406.88h-170.62c-3.6172 0-6.5625 2.9453-6.5625 6.5625s2.9453 6.5625 6.5625 6.5625h170.62c3.6172 0 6.5625-2.9453 6.5625-6.5625s-2.9453-6.5625-6.5625-6.5625z"/>
        <path d="m559.96 192.5c-6.125 2.5859-11.633 6.7539-16.281 11.738 3.6562-13.055 6.5469-26.602 8.6055-40.551 15.836 4.6289 32.547 3.5859 42.672-6.1875 12.465-12.027 22.598-32.531 21.875-48.125-13.352-6.4141-37.406-6.4297-52.582 4.375-3.332 2.375-6.0898 5.4609-8.3711 8.9648 0.21875-7.4141 0.25-14.902 0.011719-22.469l-0.070312-3.1562c12.863-10.656 22.543-28.293 21.512-44.59-1.1523-18.25-14.363-35.812-30.625-43.75-15.137 9.918-27.402 29.875-26.25 48.125 1.0586 16.73 12.254 32.855 26.641 41.547l0.042969 2.0508c0.48438 15.547-0.0625 30.773-1.5156 45.594-2.1836-12.09-7.3789-24.531-16.391-32.316-12.477-10.789-36.207-10.91-52.5-4.375-0.72266 15.594 8.2344 37.449 21.875 48.125 13.066 10.23 30.191 10.621 44.891 5.6055-2.2852 15.254-5.5781 29.996-9.8125 44.109 0.035156-8.9766-2.2188-17.395-8.7461-23.465-12.688-11.797-30.625-13.125-48.125-13.125 0 13.125 0 30.625 8.75 43.75 8.6445 12.969 26.004 17.418 39.496 17.578-7.3203 18.273-16.312 35.211-26.801 50.516 1.457-11.727-0.75391-23.879-8.3203-33.094-10.996-13.383-28.172-18.461-43.75-17.5-4.375 13.125-5.9102 34.188 4.375 48.125 8.7188 11.82 22.898 16.816 36.508 17.496-14.863 18.324-32.113 33.688-51.328 45.449 6.625-9.125 10.832-20.746 10.465-32.316-0.54688-17.312-12.879-35.695-26.25-43.75 0 0-21.863 17.5-21.863 43.75 0 19.844 15 34.676 22.328 40.734-10.816 5.2617-22.145 9.4727-33.957 12.453-6.3555 1.7422-12.75 2.6328-18.996 2.6484l0.015626-3.3398c0-9.6523-7.8477-17.5-17.5-17.5-9.6523 0-17.5 7.8477-17.5 17.5v9.9023l-0.011719-6.5625c-6.3555-0.13281-12.699-0.875-19.07-2.6719-11.785-2.9688-23.09-7.1719-33.879-12.422 7.3281-6.0625 22.344-20.891 22.344-40.746 0-26.25-21.863-43.75-21.863-43.75-13.371 8.0547-25.703 26.438-26.25 43.75-0.36719 11.586 3.8516 23.219 10.488 32.348-19.223-11.758-36.488-27.133-51.359-45.473 13.613-0.67188 27.797-5.6758 36.523-17.496 10.285-13.938 8.75-35 4.375-48.125-15.578-0.96094-32.754 4.1172-43.75 17.5-7.5742 9.2188-9.7812 21.375-8.3164 33.109-10.488-15.305-19.484-32.25-26.805-50.531 13.496-0.16016 30.852-4.6094 39.496-17.578 8.75-13.125 8.75-30.625 8.75-43.75-17.5 0-35.438 1.3281-48.125 13.125-6.5273 6.0664-8.7812 14.48-8.7461 23.453-4.2305-14.109-7.5195-28.844-9.8086-44.094 14.699 5.0156 31.82 4.6211 44.887-5.6055 13.641-10.676 22.598-32.531 21.875-48.125-16.293-6.5352-40.023-6.4141-52.5 4.375-9.0039 7.7812-14.203 20.223-16.383 32.305-1.4531-14.828-1.9961-30.062-1.5156-45.621l0.042969-2.0117c14.387-8.6875 25.582-24.82 26.637-41.547 1.1523-18.25-11.113-38.207-26.25-48.125-16.262 7.9375-29.473 25.5-30.625 43.75-1.0273 16.297 8.6523 33.934 21.512 44.59l-0.066406 3.1094c-0.23438 7.5859-0.20703 15.09 0.011719 22.52-2.2812-3.5078-5.0352-6.5977-8.3711-8.9688-15.18-10.805-39.23-10.789-52.582-4.375-0.72266 15.594 9.4102 36.098 21.875 48.125 10.129 9.7734 26.84 10.816 42.68 6.1875 2.0625 13.957 4.9492 27.5 8.6055 40.562-4.6523-4.9883-10.16-9.1562-16.285-11.742-15.961-6.7383-39.594-0.03125-52.5 8.75 2.707 15.375 14.664 32.637 30.625 39.375 14.375 6.0664 34.957 1.2188 48.336-6.2188 5.1055 12.863 11.016 25.09 17.676 36.602-3.9766-2.4141-8.4258-3.9805-13.512-4.1289-17.359-0.51562-38.633 5.1992-48.125 17.5 7.3906 13.75 22.105 29.23 39.375 30.625 16.117 1.3047 31.906-4.3594 41.676-15.18 14.121 18.055 30.43 33.496 48.559 45.777-6.4062-1.5703-13.234-1.7539-20.297 0.03125-16.797 4.25-30 15.836-35 30.625 11.434 10.633 31.332 17.375 48.125 13.125 16.641-4.2148 25.453-15.641 30.477-30.238 11.363 5.5469 23.281 9.9688 35.699 13.102 6.9844 1.9727 14.117 2.9766 21.207 2.9766h0.14063l0.003906 22.887h35v-25.098l0.003906 2.1875c7.0273-0.011719 14.195-1.0078 21.219-2.9414 12.465-3.1445 24.422-7.582 35.816-13.148 5.0234 14.605 13.832 26.035 30.48 30.254 16.793 4.25 36.691-2.4922 48.125-13.125-5-14.789-18.203-26.375-35-30.625-7.0781-1.7891-13.93-1.6055-20.344-0.023437 18.152-12.285 34.465-27.734 48.602-45.793 9.7695 10.832 25.562 16.492 41.684 15.191 17.27-1.3945 31.984-16.875 39.375-30.625-9.4922-12.301-30.766-18.016-48.125-17.5-5.0898 0.14844-9.543 1.7188-13.523 4.1406 6.6641-11.512 12.578-23.742 17.688-36.605 13.379 7.4375 33.957 12.285 48.336 6.2188 15.961-6.7383 27.918-24 30.625-39.375-12.898-8.7891-36.531-15.496-52.492-8.7578z"/>
        <path d="m450.62 166.25c0 55.574-45.051 100.62-100.62 100.62s-100.62-45.051-100.62-100.62 45.051-100.62 100.62-100.62 100.62 45.051 100.62 100.62"/>
        <use x="70" y="625.625" xlink:href="#v"/>
        <use x="86.054688" y="625.625" xlink:href="#d"/>
        <use x="96.839844" y="625.625" xlink:href="#b"/>
        <use x="111.679687" y="625.625" xlink:href="#l"/>
        <use x="126.4375" y="625.625" xlink:href="#a"/>
        <use x="136.894531" y="625.625" xlink:href="#b"/>
        <use x="151.730469" y="625.625" xlink:href="#f"/>
        <use x="175.007812" y="625.625" xlink:href="#k"/>
        <use x="190.664062" y="625.625" xlink:href="#e"/>
        <use x="212.539062" y="625.625" xlink:href="#j"/>
        <use x="229.46875" y="625.625" xlink:href="#i"/>
        <use x="252.261719" y="625.625" xlink:href="#b"/>
        <use x="267.097656" y="625.625" xlink:href="#a"/>
        <use x="277.554688" y="625.625" xlink:href="#h"/>
        <use x="293.128906" y="625.625" xlink:href="#e"/>
        <use x="307.386719" y="625.625" xlink:href="#u"/>
        <use x="320.410156" y="625.625" xlink:href="#a"/>
        <use x="338.480469" y="625.625" xlink:href="#t"/>
        <use x="354.234375" y="625.625" xlink:href="#a"/>
        <use x="364.691406" y="625.625" xlink:href="#g"/>
        <use x="380.265625" y="625.625" xlink:href="#f"/>
        <use x="395.925781" y="625.625" xlink:href="#s"/>
        <use x="403.421875" y="625.625" xlink:href="#c"/>
        <use x="70" y="647.5" xlink:href="#r"/>
        <use x="79.515625" y="647.5" xlink:href="#d"/>
        <use x="90.304688" y="647.5" xlink:href="#c"/>
        <use x="105.332031" y="647.5" xlink:href="#i"/>
        <use x="135.742188" y="647.5" xlink:href="#a"/>
        <use x="146.199219" y="647.5" xlink:href="#h"/>
        <use x="161.773438" y="647.5" xlink:href="#b"/>
        <use x="184.222656" y="647.5" xlink:href="#q"/>
        <use x="202.53125" y="647.5" xlink:href="#c"/>
        <use x="217.558594" y="647.5" xlink:href="#g"/>
        <use x="233.132812" y="647.5" xlink:href="#p"/>
        <use x="256.320312" y="647.5" xlink:href="#o"/>
        <use x="272.355469" y="647.5" xlink:href="#d"/>
        <use x="283.140625" y="647.5" xlink:href="#c"/>
        <use x="298.171875" y="647.5" xlink:href="#n"/>
        <use x="305.667969" y="647.5" xlink:href="#b"/>
        <use x="320.503906" y="647.5" xlink:href="#m"/>
        <use x="333.472656" y="647.5" xlink:href="#a"/>
        </g>
        </svg>               
</svg>
`;

const renderPlayzone = () => `
<div id="themeSetting" class="circ" aria-hidden="true">
    <svg class="sun"><use xlink:href="#sun"></use></svg>
    <svg class="moon"><use xlink:href="#moon"></use></svg>
</div>
<div class="detail"><span class="detail-text"></span></div>
<button class="punch" id="boom" aria-hidden="true" tabindex="-1">
    <svg class="punch-icon"><use xlink:href="#code"></use></svg>
</button>
<div class="play-zone">
    <div class="social-links">
        <a class="social-link" href="https://www.youtube.com/c/codeymccodeface" target="_blank" rel="noreferrer"><svg class="full-size-icon"><use xlink:href="#youtube"></use></svg><span>YouTube</span></a>
        <a class="social-link" href="https://twitter.com/frazewilson" target="_blank" rel="noreferrer"><svg class="full-size-icon"><use xlink:href="#twitter"></use></svg><span>Twitter</span></a>
        <a class="social-link" href="https://codepen.io/frazerwilson" target="_blank" rel="noreferrer"><svg class="full-size-icon"><use xlink:href="#codepen"></use></svg><span>Codepen</span></a>
    </div>
    <div class="prizes desk-only">
        <div class="prize" title="Creator - built a website (2022)"><span>ℱ</span><svg class="full-size-icon"><use xlink:href="#trophy"></use></svg></div>
        <div class="prize" title="Mentor - Code club/Meetup/Author (2014-18)"><span> - #</span><svg class="full-size-icon"><use xlink:href="#trophy"></use></svg></div>
        <div class="prize" title="Wanikani - 800+ burned"><span>あ</span><svg class="full-size-icon"><use xlink:href="#trophy"></use></svg></div>
    </div>
</div>
`;

const renderFooter = () => `
<footer>
    <div class="footer-content">
        This site does not use cookies, so who knows who's visiting. If you did read this, click the counter to record that something happenned... <br/>
        <button id="likesBtn">I saw this</button>
    </div>
</footer>
`;

const buildContainer = (options) => `
<div class="container">
    <h1><span>${options.heading}</span></h1>
    <aside>
        <button id="returnToMenu" class="menu-return" tabindex="1">
            <svg class="back-arrow"><use xlink:href="#backArrow"></use></svg>
        </button>
        <a id="returnToMenuAnchor" class="return-to-menu" href="/">return to menu</a>
        <article>
            ${options.image ? `<img alt="${options.heading}" src="${options.image}" />` : ''}
            ${options.article || `<p></p>`}
        </article>
        <nav>
            <ul id="articles" class="articles">
                ${options.menu}
            </ul>
        </nav>
    </aside>
    ${renderPlayzone()}
    ${renderFooter()}
</div>
`;

const buildPage = (options = {themes:{light:'', dark:''}}) =>
    `<!DOCTYPE html>
    <html lang="en" class="no-js">
    <head>
        ${buildHeader(options.meta)}
    </head>
    <body class="${options.isArticle ? 'article' : ''}">
        ${noStyles()}
        ${buildIcons()}
        ${buildContainer(options)}
    <script>
        window.__heading = "${options.homeHeading}";
        let root = document.documentElement;
        root.style.setProperty('--lightTheme', '${options.themes.light}');
        root.style.setProperty('--darkTheme', '${options.themes.dark}');
    </script>
    <script src="/config.js"></script>
    <script src="/funcs.js"></script>
    <script defer src="https://cdn.jsdelivr.net/npm/storyblok-js-client@4.0.5/dist/rich-text-resolver.standalone.js"></script>
    </body>
    </html>`;

module.exports = buildPage;