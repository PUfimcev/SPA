import { cart } from './pages/Cart.js';

function App() {

    const metaUtfElem = document.createElement('meta');
    metaUtfElem.setAttribute('charset', 'UTF-8');

    const metaViewportElem = document.createElement('meta');
    metaViewportElem.setAttribute('name', 'viewport');
    metaViewportElem.setAttribute('content', 'width=device-width, initial-scale=1.0');

    const titleElem = document.createElement('title');
    titleElem.innerText = 'Store';

    document.head.append(metaUtfElem, metaViewportElem, titleElem);
    
    const create = function() {
        let elem = document.createElement('div');
        elem.classList.add('app');

        return elem;
    }

    const render = async function() {
        const elem = create();

        const Header = await import('./Header.js')
        .then(module => module.default);

        let cartWidget = cart.widget();
        Header.querySelector('.header__nav').after(cartWidget);

        elem.append(Header);
        cart.updateWidget(cartWidget);

        const Footer = await import('./Footer.js')
        .then(module => module.default);

        elem.append(Footer);

        document.querySelector('#root').append(elem);

        const Main = await import('./Main.js')
        .then(module => {
            return module.default.init([cart, cartWidget]);
        });
        
        Footer.before(Main);
    }();

    getData();
}

const getData = async function() {
    let localData = localStorage.getItem('dataShop');
    if (localData) localData = JSON.parse(localData);
    
    if (localData && localData.length > 0) {
        return localData;
    }
    // if there are not data in local storage
    localData = await fetch('https://fakestoreapi.com/products/')
    .then(response => response.text())
    .then(data => {
        localStorage.setItem('dataShop', data);
        location.reload();
    });
    // text чтобы не парсить лишний раз (делаем выше) и в local storage данные храняться в сточном виде
};

export { getData };
export default new App();