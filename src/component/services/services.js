import { RootComponent } from '../../common/root-component'
import './services.scss'

export class Services extends RootComponent {
    constructor() {
        super('section');
    }

    render() {
        this.el.classList.add('services');
        this.el.innerHTML = `
            <div class="services__content">
                <div class="services-row">
                    <h2>What makes
                    <span> an unforgettable </span> brand?</h2>
                    <div>
                        <p>Branding is all about your community reputation. Your logo will
                        dictate the first impression a customer has when deciding
                        whether they will use your product or service.</p>
                        <br>
                        <p>You’re likely here because you’re either trying to establish
                        yourself as a new business within a competitive space or your
                        business may be underperforming with its current brand
                        identity.</p>
                    </div>
                </div>
                <div class="services-row two">
                    <p>The following elements of branding are
                    essential to your business.</p>
                    <div class="services-block">
                        <div class="services-item">
                            <div class="number">1</div>
                            <p>Brand Name</p>
                        </div>
                        <div class="services-item">
                            <div class="number">2</div>
                            <p>Logo Design</p>
                        </div>
                        <div class="services-item">
                            <div class="number">3</div>
                            <p>Graphic Elements</p>
                        </div>
                        <div class="services-item">
                            <div class="number">4</div>
                            <p>Colour</p>
                        </div>
                        <div class="services-item">
                            <div class="number">5</div>
                            <p>Typography</p>
                        </div>
                        <div class="services-item">
                            <div class="number">6</div>
                            <p>Tagline</p>
                        </div>
                        <div class="services-item">
                            <div class="number">7</div>
                            <p>Tone of Voice</p>
                        </div>
                        <div class="services-item">
                            <div class="number">8</div>
                            <p>Positioning</p>
                        </div>
                    <div>
                <div>
            </div>
        `;
        return this.el;
    }
}


