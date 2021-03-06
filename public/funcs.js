document.documentElement.classList.remove('no-js');
// dark mode
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark');
}

// set build vars
const buildConfig = window.__config[0];
const lastUpdated = new Date(window.__config[0].updated_at);
const monthObj = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
document.querySelector('.detail-text').innerHTML = `${window.__config[0].description} /<br/> Updated ${lastUpdated.getDate()}/${monthObj[lastUpdated.getMonth()]}/${lastUpdated.getFullYear()}`;

document.getElementById('boom').addEventListener('click', () => {
    document.head.removeChild(document.getElementById('mainStyles'));
});
const h1Text = window.__heading;
const h1 = document.querySelector('h1');
const nav = document.querySelector('nav');
const aside = document.querySelector('aside');
const article = document.querySelector('article');
const articles = document.querySelector('#articles');
const returnToMenu = document.querySelector('#returnToMenu');
const themeSetting = document.querySelector('#themeSetting');
const likesBtn = document.querySelector('#likesBtn');

const animOpts = {duration: 500, fill: 'forwards'}

// populate menu (if empty)
if(!articles.querySelectorAll('li').length) {
    fetch('https://api.storyblok.com/v1/cdn/stories/?token=up34xEwUnjFp7rluvcfoHwtt')
    .then(res => res.json())
    .then(data => {
        const menuItems = data.stories.map(item => `<li><a data-slug="${item.slug}" href="/posts/${item.slug}">${item.name}</a></li>`)
        articles.innerHTML = menuItems.join('');
    })
}

const goToArticle = (item = {name: '', slug: ''}) => {
    h1.animate([{opacity: 0}], animOpts);
    article.animate([{opacity: 0}], animOpts);
    returnToMenu.animate([{opacity: 0}], animOpts);
    nav.animate([{opacity: 0}], animOpts)
        .finished.then(async () => {
            const articleContent = await fetch(`https://api.storyblok.com/v1/cdn/stories/posts/${item.slug}?token=up34xEwUnjFp7rluvcfoHwtt&cv=3`)
            .then(res => res.json())
            .then(data => {
                h1.innerText = data.story.name;
                const renderer = new RichTextResolver()
                const content = renderer.render(data.story.content.long_text);
                if(data.story.content.image) {
                    return `<img alt="${data.story.name}" src="${data.story.content.image}" > ${content}`
                }
                return content;
            });
            article.innerHTML = articleContent;
            aside.scrollTop = 0;
            document.body.classList.add('article');
            h1.animate([{opacity: 1}], animOpts);
            article.animate([{opacity: 1}], animOpts);
            returnToMenu.animate([{opacity: 1}], animOpts);
        });
}

document.querySelector('ul').addEventListener('click', e => {
    e.preventDefault();
    const link = e.target;
    if(link.tagName !== 'A') {return;}
    goToArticle({name: link.innerText, slug: link.dataset.slug});
    window.history.pushState({}, link.innerText, `posts/${link.dataset.slug}`)
});

const returnToHome = () => {
    document.body.classList.remove('article');
    article.innerHTML = '';
    h1.innerHTML = h1Text;
    nav.animate([{opacity: 1}], animOpts)
}
    
returnToMenu.addEventListener('click', () => {
    returnToHome();
    window.history.pushState({}, 'homepage', `/`)
});
document.querySelector('#returnToMenuAnchor').addEventListener('click', e => {
    e.preventDefault();
    returnToHome();
    window.history.pushState({}, 'homepage', `/`)
});

themeSetting.addEventListener('click', () => {
    document.documentElement.classList.contains('dark') ?
        document.documentElement.classList.remove('dark') :
        document.documentElement.classList.add('dark');
});

window.addEventListener('popstate', function(event) {
    const newPath = window.location.pathname.split('/')[2];
    if(!newPath){
        returnToHome();
    }
    else {
        goToArticle({name: newPath, slug: newPath});
    }
});

const dbheaders = {
    'content-type': 'application/json',
    'x-apikey': '61e1df3fa0f7d226f9b75e35',
    'cache-control': 'no-cache',
}
let count = 0;
fetch('https://computing-c273.restdb.io/rest/likes', {headers: dbheaders})
.then(res => res.json())
    .then(data => {
        console.log('count: ' + data[0].count)
        count = data[0].count;
    })

likesBtn.addEventListener('click', () => {
    const newCount = count + 1;
    fetch('https://computing-c273.restdb.io/rest/likes/61e1e126f701f4600004d107', {
        headers: dbheaders,
        'method': 'PUT',
        body: JSON.stringify({"count": newCount}),
        })
        .then(()=>{
            alert(`aww, thanks, in all of history since the dawn of time that button has been clicked just ${newCount} times`);
            likesBtn.remove();
        });
});