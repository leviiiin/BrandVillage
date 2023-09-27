import { RootComponent } from '../../common/root-component'
import './header.scss'

export class Header extends RootComponent {
    constructor() {
        super('header');
    }

    render() {
        this.el.classList.add('header');
        this.el.innerHTML = `   
            <div class="header__content">
                <img src="/static/icon/logo.svg" class="logo" alt="Logo">
                <div class="menu">
                    <a class="menu__item view-active" href="#">Home</a>
                    <a class="menu__item" href="#">Logos</a>
                    <a class="menu__item" href="#">Website</a>
                    <a class="menu__item" href="#">Branding</a>
                    <a class="menu__item" href="#">Articles</a>
                    <a class="menu__item" href="#">About us</a>
                    <button>contact us</button>
                </div>
                <div class="burger" id="burger">
                    <span></span>
                </div>
            </div>
        `;
        return this.el;
    }
}


