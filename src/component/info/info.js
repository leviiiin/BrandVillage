import { RootComponent } from '../../common/root-component'
import './info.scss'

export class Info extends RootComponent {
    constructor() {
        super('section');
    }

    render() {
        this.el.classList.add('info');
        this.el.innerHTML = `
            <div class="info__content">
                <h2>Melbourne's Fusion of
                Consumer
                <span>Psychology</span> and
                Graphic Design</h2>
                <div class="info-r">
                    <h3>Every colour, font, text, logo, and
                    illustration will affect consumer
                    decision making and might just be the
                    tipping point between your service and
                    the competition.</h3>

                    <p>We will work with you to design a unique style guide that will
                    help potential customers recognise the quality of your brand.
                    Choosing to work with BrandVillage means you have chosen
                    not to neglect the complexity of 
                    <span>consumer behaviour</span> and <span>graphic design</span>
                    when considering your business branding.</p>

                    <button class="info-btn">Let’s talk</button>
                </div>
            </div>
        `;
        return this.el;
    }
}


