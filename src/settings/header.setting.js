import navbarHome from '../view/header/navbarHome.html';

export default function Header() {

    const header = document.querySelector('#headerM');

    if (localStorage.getItem('user')) {

    } else {
        header.innerHTML = navbarHome;
    }
}