import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';

import { routerSetting } from './settings/router.setting';
import headerSettings from './settings/header.setting';

class Main {

    constructor() {
        this.init();
    }

    init() {
        headerSettings();
        routerSetting;
    }
}
new Main();