class Main {
    create() {
        this.elem = document.createElement('main');
        this.elem.classList.add('main');
        return this.elem;
    }

    routing() {
        const route = () => {
            let hash = location.hash;
            hash = hash.slice(1);

            

            let filename = '404'; // page not found

            if (hash.length == 0 &&
            ( location.pathname == '/' || location.pathname == '/index.html')) {
                    filename = 'home';
            } else if (hash.length > 0) {
                filename = hash;
                // is HASH has /product and ger page Product
                if (hash.includes('product')) {
                    filename = '404';

                    hash = hash.split('/')[0];
                    if (hash && hash.length > 0) filename = hash;
                }
                
            }

            filename = filename.charAt(0).toUpperCase() + filename.slice(1);

            // ?t=${Date.now()} - это обманка, чтобы при динамическом импорте не сохранялся кэш в браузере (тк если страница не перегружается, инфа сохраняется в кэш) и менялась страница  товара, т.е. браузер думает, что меняется URL
            // import(`./pages/${filename}.js?t=${Date.now()}`)
            import(`./pages/${filename}.js`)
            .then(module => {
                
                if (!module.default) return;

                this.elem.innerHTML = '';
                // add condition when there is a promise in Shop.js in asyns init();
                if (module.default.init) {
                    let moduleElem = module.default.init([this.cart, this.cartWidget]);

                    if (moduleElem.then) {
                        moduleElem
                        .then(elem => {
                            this.elem.append(elem);
                            // download Shop.js
                        });
                        // fulfiled promise
                        return;
                    }
                }

                if (module.default.then) {
                    module.default
                    .then(elem => {
                        this.elem.append(elem);
                    });

                    return;
                }
                
                this.elem.append(module.default);

            });
        }

        window.addEventListener('hashchange', route);
        route();
        
        const aHomeElems = document.querySelectorAll('a[href="/"]'); // search all references to main page 

        aHomeElems.forEach(a => {
            a.addEventListener('click', (event) => {
                event.preventDefault();
                history.pushState(null, null, '/'); // без перезагрузки возвращаемся на главную страницу
                route();
            });
        });
    }

    init(libs) {
        this.cart = libs[0];
        this.cartWidget = libs[1];

        this.routing();
        this.create();

        return this.elem;
    }
}

export default new Main();