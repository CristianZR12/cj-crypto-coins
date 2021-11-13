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
            case '#/coins':
                {
                    return content.appendChild(pages.coins());
                }
            default:
                {
                    return content.appendChild(pages.error404());
                }
        }
    }
}

const router = new IndexRouter();

export { router };