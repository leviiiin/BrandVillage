import { RootComponent } from '../../common/root-component'
import './portfolio.scss'

export class Portfolio extends RootComponent {
    constructor() {
        super('section');
    }

    render() {
        this.el.classList.add('portfolio');
        this.el.innerHTML = `   
        <div class="portfolio-slider">
            <div class="slide-track">
                <div class="slide">
                    <img src="/static/img/portfolio/mill.png">
                    <p>Podcast Production Mill — Website</p>
                </div>
                <div class="slide big">
                    <img src="/static/img/portfolio/ever.png">
                    <p>Ever Longevity — Logo Design</p>
                </div>
                <div class="slide sm">
                    <img src="/static/img/portfolio/faix.png">
                    <p>Faix - Logo & Packaging Design</p>
                </div>
                <div class="slide mid">
                    <img src="/static/img/portfolio/hilti.png">
                    <p>Hilti — Brochure Design</p>
                </div>
                <div class="slide">
                    <img src="/static/img/portfolio/noir.png">
                    <p>Noir Sand Skin — Packaging Design</p>
                </div>
                <div class="slide">
                    <img src="/static/img/portfolio/mill.png">
                    <p>Podcast Production Mill — Website</p>
                </div>
                <div class="slide big">
                    <img src="/static/img/portfolio/ever.png">
                    <p>Ever Longevity — Logo Design</p>
                </div>
                <div class="slide sm">
                    <img src="/static/img/portfolio/faix.png">
                    <p>Faix - Logo & Packaging Design</p>
                </div>
                <div class="slide mid">
                    <img src="/static/img/portfolio/hilti.png">
                    <p>Hilti — Brochure Design</p>
                </div>
                <div class="slide">
                    <img src="/static/img/portfolio/noir.png">
                    <p>Noir Sand Skin — Packaging Design</p>
                </div>
            </div>
        </div>
        `;
        return this.el;
    }
}


