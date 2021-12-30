var fs = require('fs');
var path = require('path');
const express = require('express');
// const contentful = require("contentful");
// const richTextRenderer = require('@contentful/rich-text-html-renderer');
const app = express();
// const menuBuilder = require('./snippets/menu.js');
// const header = require('./snippets/head.js');
const buildPage = require('./buildPage');
const template = require('./template');
app.use(express.static(path.join(__dirname, './public')));
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
/*
const client = contentful.createClient({
    // This is the space ID. A space is like a project folder in Contentful terms
    space: "fdyzdyn8c696",
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: "EQNUJXNxFK8Q7DBt9nDdooF7PEqvgt5VE0AW4y5DtjA"
});

let menuItems;

client.getEntries({limit: 10})
.then((response) => {
    menuItems = response.items.map(item => ({
        id: item.sys.id,
        title: item.fields.title,
        slug: item.fields.slug
    }))
})
.catch(console.error)

let assetRecords = {};
client.getAssets()
.then(response => {
    response.items.forEach(item => {
        assetRecords[item.sys.id] = item.fields.file.url
    });
})

const buildPage = (
    postcontent = '',
    id = null,
    title = null
) => {
const head = header(title ? title + ' ~ Funkys blog' : '💩 Funkys blog');
const menu = menuBuilder(menuItems, id);
const pagescript = fs.readFileSync("./snippets/script.js", 'utf8');
const returnPage = `<!DOCTYPE html>
<html lang="en">
${head}
<body class="no-js">
<div class="torch">
    ${menu}
    <a class="twitter-share-button" target="_blank" id="tweetButton"
    href="https://twitter.com/intent/tweet?text=${title}&url=mysite.com">🛰️</a>
    <main>
        <article tabindex="1" class="${id ? 'show':''}">
            ${postcontent}
        </article>
    </main>
</div>
<script>
  var exports = {}; // quick fix because 'exports' is not defined in rich-text bundle below
  const assetRecords = ${JSON.stringify(assetRecords)}
</script>
<script>${pagescript}</script>
<script
  src="https://unpkg.com/@contentful/rich-text-html-renderer@12.0.0/dist/rich-text-html-renderer.es5.js"
  defer
  charset="utf-8"
></script>
</body></html>`;
return returnPage;
}
*/
app.get('/', (req, res) => {
    // res.send(buildPage());
    res.send(buildPage({heading: 'homepage', menu: `<li>something</li>`}));
});
app.get('/template', (req, res) => {
    // res.send(buildPage());
    res.send(template);
});
/*
app.get('/*', (req, res) => {
    const postId = req.path.split('/')[1];
    client.getEntry(postId).then(response => {
        let options = {
            renderNode: {
              'embedded-asset-block': (node) => `<img data-post-id="${node.data.target.sys.id}" src="#"/>`
            }
        }
        const postContent = richTextRenderer.documentToHtmlString(response.fields.content, options);
        return res.send(buildPage(
            postContent,
            postId,
            response.fields.title
        ));
    })
    .catch(err => {
        res.send(buildPage('ooh nothing found', 1, 'Article not found'));
    })
});
*/
app.listen(port, () => console.log(`app listening at http://localhost:${port}`))