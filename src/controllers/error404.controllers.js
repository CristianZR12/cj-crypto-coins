import error404 from '../view/error404.html';

export default () => {

    const divElement = document.createElement('div');
    divElement.id = 'Error404Page';

    divElement.innerHTML = error404;

    return divElement;
}