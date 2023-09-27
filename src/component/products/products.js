import { RootComponent } from '../../common/root-component'
import './products.scss'

export class Products extends RootComponent {
    constructor() {
        super('section');
    }

    render() {
        this.el.classList.add('products');
        this.el.innerHTML = `
            <div class="product-flex">
                <div class="flex-row">
                    <div class="product-mid">
                        <img src="/static/img/products/noir.png">
                        <p>Noir — Logo & Packaging Design</p>
                    </div>
                    <div class="product-big">
                        <p>Gambit Group — Logo & Stationery Design</p>
                    </div>
                    <div class="product-sm">
                        <img src="/static/img/products/continuum.png">
                        <p>Continuum — Logo Design</p>
                    </div>
                </div>
                <div class="flex-row">
                    <div class="product-sm">
                        <img src="/static/img/products/carcram.png">
                        <p>CarCram — Logo Design</>
                    </div>
                    <div class="product-big two">
                        <p>Accomplish Supports Network — Logo & Stationary Design</p>
                    </div>
                    <div class="product-mid">
                        <img src="/static/img/products/wind-vibes.png">
                        <p>Wind & Vibes — Logo & Brand Design</p>
                    </div>
                </div>
            </div>
        `;
        return this.el;
    }
}

