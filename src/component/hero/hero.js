import { RootComponent } from '../../common/root-component'
import './hero.scss'

export class Hero extends RootComponent {
    constructor() {
        super('section');
    }

    render() {
        this.el.classList.add('hero');
        this.el.innerHTML = `
            <h1 class="hero__title">
                <span>Award winning</span>
                logo design Melbourne. It takes a Village to build
                <span>a <span class="accented">brand</span>.</span>
            </h1>
            <img class="hero-img" src="/static/img/hero-img.png" alt="img"/>
            <div class="flex">
                <p class="u-case">Brand identity, strategic design</p>
                <p>
                Brand identity and strategic design are the key to success
                whether you’re rebranding an existing business or creating a
                business from scratch.
                <br>
                <br>
                BrandVillage are a Melbourne based branding agency
                specialising in logo design and website design. We provide
                clients with full copyright and brand guidelines to reduce cost
                on future projects.
                </p>
            </div>
            <div class="stat">
                <div class="item">
                    <p> >240 </p>
                    <span>clients</span>
                </div>
                <div class="item">
                    <p> >450 </p>
                    <span>projets completed</span>
                </div>
            </div>
            <div class="slider">
                <div class="slide-track">
                    <div class="slide">
                        <img src="/static/icon/hero-animation/florida.svg">
                    </div>
                    <div class="slide">
                        <img src="/static/icon/hero-animation/cannvlate.svg">
                    </div>
                    <div class="slide">
                        <img src="/static/icon/hero-animation/dell.svg">
                    </div>
                    <div class="slide">
                        <img src="/static/icon/hero-animation/iga.svg">
                    </div>
                    <div class="slide">
                        <img src="/static/icon/hero-animation/menulog.svg">
                    </div>
                    <div class="slide">
                        <img src="/static/icon/hero-animation/msd.svg">
                    </div>
                    <div class="slide">
                        <img src="/static/icon/hero-animation/sydney.svg">
                    </div>
                    <div class="slide">
                        <img src="/static/icon/hero-animation/who.svg">
                    </div>
                </div>
            </div>
        `;
        return this.el;
    }
}

