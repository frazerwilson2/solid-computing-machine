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
  const todaysHeadingPick = new Date().getDate() % (results.length - 1);
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
        res.send(buildPage({
            heading: todaysHeading,
            menu: response.data.stories,
            homeHeading: todaysHeading,
            meta: {title: todaysHeading, description: todaysHeading},
        }));
    }).catch(error => { 
        console.log(error)
    })
});

app.get('/template', (req, res) => {
    res.send(template);
});

app.get('/posts/*', (req, res) => {
    const postSlug = req.path.split('/')[2];
    Storyblok.get(`cdn/stories/posts/${postSlug}`, {})
    .then(response => {
        const post = response.data.story;
        const articleContent = Storyblok.richTextResolver.render(post.content.long_text)
        res.send(buildPage({
            heading: post.name,
            menu: [],
            article: articleContent,
            image: post.content.image || false,
            isArticle: true,
            homeHeading: todaysHeading,
            meta: {title: post.name, description: post.content.intro},
        }));
    }).catch(error => { 
        console.log(error)
        res.send(buildPage({
            heading: 'no article!',
            menu: [],
            article: 'Dunno what happenned there, i have not found the page you are looking for',
            isArticle: true,
            homeHeading: todaysHeading,
            meta: {title: 'article not found', description: 'article not found'},
        }));
    })
});

app.get('/*', (req, res) => {
    res.send(buildPage({
        heading: 'Its 404 buddy',
        menu: [],
        article: 'Try doing something else i guess',
        isArticle: true,
        homeHeading: todaysHeading,
        meta: {title: '404 not found', description: '404 not found'},
    }));
});

app.listen(port, () => console.log(`app listening at http://localhost:${port}`))