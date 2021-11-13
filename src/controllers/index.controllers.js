import Home from './home.controllers';
import Error404 from './error404.controllers'
import Coins from './coins.controllers';

const pages = {
    home: Home,
    error404: Error404,
    coins: Coins
};

export { pages };