import { RootComponent } from '../../common/root-component'
import './articles.scss'

export class Articles extends RootComponent {
    constructor() {
        super('section');
    }

    render() {
        this.el.classList.add('articles');
        this.el.innerHTML = `   
            <div class="articles__content">
                <h2>Articles.</h2>
                <div class="articles-flex">
                    <div class="articles-item mid">
                        <img src="/static/img/articles/articles-mid.png">
                        <span>june 2022</span>
                        <h3>How to create memorable graphic design</h3>
                        <p>Where the world is only filled with clutter,
                        simplicity conveys an assertive message,
                        and...</p>
                    </div>
                    <div class="articles-item big">
                        <img src="/static/img/articles/articles-big.png">
                        <span>june 2022</span>
                        <h3>How to create memorable graphic design</h3>
                        <p>Where the world is only filled with clutter,
                        simplicity conveys an assertive message,
                        and...</p>
                    </div>
                    <div class="articles-item sm">
                        <img src="/static/img/articles/articles-sm.png">
                        <span>june 2022</span>
                        <h3>How to create memorable graphic design</h3>
                        <p>Where the world is only filled with clutter,
                        simplicity conveys an assertive message,
                        and...</p>
                    </div>
                </div>
                <div class="btn-block">
                    <span>view all articles</span> 
                    <div class="articles-btn">
                        <i class="bi bi-arrow-right-short"></i>                            
                    </div>
                </div>
                <div class="articles-text">
                    <div>
                        <h2>Our Satisfaction
                        Guarantee.</h2>
                        <p>At BrandVillage, customer satisfaction is at the forefront of our
                        business model. We’re not happy unless you’re happy. We will
                        continue to work with you on your design until you are 100%
                        satisfied with the results.
                        <br>
                        Capturing your brand identity correctly is our number one
                        priority, and we will ensure that your design vision is brought to
                        life accurately.</p>
                    </div>
                    <div>
                        <h2>Secure Payments.</h2>
                        <p>Positive customer experience is important from the moment
                        you enter the website, to the moment you process your
                        payment.
                        <br>
                        To add an extra layer of security for our clients, all payments are
                        processed securely through PayPal. We accept Mastercard,
                        VISA, American Express, PayPal and Bank Transfer for all
                        purchasing amounts.</p>
                    </div>
                </div> 
            </div>
        `;
        return this.el;
    }
}


