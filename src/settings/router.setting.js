import { router } from '../routes/router.routes';

class RouterSetting {

    constructor() {
        this.main();
    }

    init() {

        if (window.location.hash == '') {
            window.history.pushState(null, '', '#/');
        }

        router.router(window.location.hash);

        window.addEventListener('hashchange', () => {
            router.router(window.location.hash);
        });
    }

    main() {
        window.addEventListener('load', this.init());
    }
}

const routerSetting = new RouterSetting();

export { routerSetting };