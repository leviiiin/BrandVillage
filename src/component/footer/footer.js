import { RootComponent } from '../../common/root-component'
import './footer.scss'

export class Footer extends RootComponent {
    constructor() {
        super('footer');
    }

    render() {
        this.el.classList.add('footer');
        this.el.innerHTML = `
            <div class="footer__content">
                <div class="footer-nav">
                    <a class="nav__item nav-active" href="#">Home</a>
                    <a class="nav__item" href="#">Logos</a>
                    <a class="nav__item" href="#">Website</a>
                    <a class="nav__item" href="#">Branding</a>
                    <a class="nav__item" href="#">Articles</a>
                    <a class="nav__item" href="#">About us</a>
                    <a class="nav__item" href="#">Contact us</a>
                </div>
                <div class="contact">
                    <h3>123 Pelham Street Carlton VIC
                    3053 Australia</h3>
                    <a href="mailto:contact@brandvillage.com.au">contact@brandvillage.com.au</a>
                    <a href="tel:0406856882">0406 856 882</a>
                    <div class="messengers">
                        <a href="#">Facebook</a>
                        <a href="#">Instagram</a>
                        <a href="#">Linkedin</a>
                    </div>
                </div>
            </div>
        `;
        return this.el;
    }
}


