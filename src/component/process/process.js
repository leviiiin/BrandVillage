import { RootComponent } from '../../common/root-component'
import './process.scss'

export class Process extends RootComponent {
    constructor() {
        super('section');
    }

    render() {
        this.el.classList.add('process');
        this.el.innerHTML = `   
            <div class="process__content">
                <h2>Our graphic design <span>process.</span></h2>
                <div class="process-block">
                    <div class="process-item">
                        <div class="number">1</div>
                        <p>Enquire</p>
                        <i class="bi bi-plus"></i>
                    </div>
                    <div class="process-item">
                        <div class="number">2</div>
                        <p>Quote</p>
                        <i class="bi bi-plus"></i>
                    </div>
                    <div class="process-item">
                        <div class="number">3</div>
                        <p>Brief</p>
                        <i class="bi bi-plus"></i>
                    </div>
                    <div class="process-item">
                        <div class="number">4</div>
                        <p>Design</p>
                        <i class="bi bi-plus"></i>
                    </div>
                    <div class="process-item">
                        <div class="number">5</div>
                        <p>Concepts</p>
                        <i class="bi bi-plus"></i>
                    </div>
                    <div class="process-item">
                        <div class="number">6</div>
                        <p>Revisions</p>
                        <i class="bi bi-plus"></i>
                    </div>
                    <div class="process-item">
                        <div class="number">7</div>
                        <p>Final Files</p>
                        <i class="bi bi-plus"></i>
                    </div>
                    <button>get started</button>
                </div>
            </div>
        `;
        return this.el;
    }
}


