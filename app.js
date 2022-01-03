var fs = require('fs');
var path = require('path');
const express = require('express');
const StoryblokClient = require('storyblok-js-client')
const app = express();
const buildPage = require('./buildPage');
const template = require('./template');
const gReader = require("g-sheets-api");
app.use(express.static(path.join(__dirname, './public')));

const readerOptions = {
  apiKey: 'AIzaSyAGmOOhI6Z6TmRa3td-luaIDhTSmvjSkgM',
  sheetId: "1V2PygWcwN40blA8FuMNH_zs6IQvIgIUcUZPBrquVHr8",
};

let todaysHeading = '';
gReader(readerOptions, (results) => {
  const todaysHeadingPick = new Date().getDate() % results.length;
  todaysHeading = results[todaysHeadingPick].Options;
});

const Storyblok = new StoryblokClient({
    accessToken: 'up34xEwUnjFp7rluvcfoHwtt',
    cache: {
      clear: 'auto',
      type: 'memory'
    }
})

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

app.get('/', (req, res) => {
    Storyblok.get('cdn/stories', {})
    .then(response => {
        console.log(response.data.stories)
        const menuItems = response.data.stories.map(item => `<li><a data-slug="${item.slug}" href="/posts/${item.slug}">${item.name}</a></li>`)
        res.send(buildPage({heading: todaysHeading, menu: menuItems.join(''), homeHeading: todaysHeading}));
    }).catch(error => { 
        console.log(error)
    })
});
app.get('/template', (req, res) => {
    // res.send(buildPage());
    res.send(template);
});

app.get('/posts/*', (req, res) => {
    const postSlug = req.path.split('/')[2];
    Storyblok.get(`cdn/stories/posts/${postSlug}`, {})
    .then(response => {
        console.log(response.data.story)
        const post = response.data.story;
        const articleContent = Storyblok.richTextResolver.render(post.content.long_text)
        // const menuItems = response.data.stories.map(item => `<li><a data-slug="${item.slug}" href="/${item.slug}">${item.name}</a></li>`)
        res.send(buildPage({heading: post.name, menu: '', article: articleContent, isArticle: true, homeHeading: todaysHeading}));
    }).catch(error => { 
        console.log(error)
        res.send(`not found`);
    })
});

app.get('/*', (req, res) => {
    res.send('thats 404');
});

app.listen(port, () => console.log(`app listening at http://localhost:${port}`))