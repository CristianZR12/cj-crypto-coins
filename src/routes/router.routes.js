import { pages } from '../controllers/index.controllers'

class IndexRouter {

    router(route) {
        const $ = element => document.querySelector(element);
        let content = $('#root');

        content.innerHTML = '';

        switch (route) {
            case '#/':
                {
                    return content.appendChild(pages.home());
                }
            default:
                {
                    return console.log('Error 404');
                }
        }
    }
}

const router = new IndexRouter();

export { router };