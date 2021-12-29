document.documentElement.classList.remove('no-js');
        // dark mode
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.classList.add('dark');
        }

        document.getElementById('boom').addEventListener('click', () => {
            document.head.removeChild(document.getElementById('mainStyles'));
        });
        const h1Text = 'the main section';
        const h1 = document.querySelector('h1 span');
        const nav = document.querySelector('nav');
        const article = document.querySelector('article');
        const returnToMenu = document.querySelector('#returnToMenu');
        const themeSetting = document.querySelector('#themeSetting');

        const animOpts = {duration: 500, fill: 'forwards'}

        document.querySelector('ul').addEventListener('click', e => {
            e.preventDefault();
            const link = e.target;
            if(link.tagName !== 'A') {return;}

            h1.animate([{opacity: 0}], animOpts);
            article.animate([{opacity: 0}], animOpts);
            returnToMenu.animate([{opacity: 0}], animOpts);
            nav.animate([{opacity: 0}], animOpts)
                .finished.then(() => {
                    h1.innerText = link.innerText;
                    article.innerHTML = '<img src="https://media.giphy.com/media/NEvPzZ8bd1V4Y/giphy.gif" /><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem</p>';
                    document.body.classList.add('article');
                    h1.animate([{opacity: 1}], animOpts);
                    article.animate([{opacity: 1}], animOpts);
                    returnToMenu.animate([{opacity: 1}], animOpts);
                });
        });
            
        returnToMenu.addEventListener('click', () => {
                document.body.classList.remove('article');
                article.innerHTML = '';
                h1.innerHTML = h1Text;
                nav.animate([{opacity: 1}], animOpts)
        });

        themeSetting.addEventListener('click', () => {
            document.documentElement.classList.contains('dark') ?
                document.documentElement.classList.remove('dark') :
                document.documentElement.classList.add('dark');
        })
