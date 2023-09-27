import { RootComponent } from '../../common/root-component'
import './about.scss'

export class About extends RootComponent {
    constructor() {
        super('section');
    }

    render() {
        this.el.classList.add('about');
        this.el.innerHTML = `   
            <div class="about__content">
                <div class="about-row">
                    <div>
                        <h2> >8 </h2>
                        <h3> years of industry experience </h3>
                        <p> Your Brand is your most valuable asset. Leave it in the hands of someone you trust. </p>
                        <div class="btn-block">
                            <span> learn more about us </span> 
                            <div class="about-btn">
                                <i class="bi bi-arrow-right-short"></i>                            
                            </div>
                        </div>
                    </div>
                </div> 
                <div class="about-row two">
                    <h2>Proudly <span> located in </span>
                    Melbourne, Australia.</h2>
                    <div class="text"> 
                        <h3>
                            Proudly located in <span> Melbourne</span>, Australia, BrandVillage have been providing logo design and website design for big and small businesses for over 8 years.
                        </h3>
                        <h3>
                            tarting from our Home Studio and working tirelessly to achieve the award-winning design agency in Melbourne we have today, we understand the huge difference memorable designs can have on your audience.
                        </h3>
                    </div>
                </div>
            </div>
            <img src="/static/img/about-img.png">
        `;
        return this.el;
    }
}


