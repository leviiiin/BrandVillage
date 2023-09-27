import { RootComponent } from '../../common/root-component'
import './emailform.scss'

export class EmailForm extends RootComponent {
    constructor() {
        super('section');
    }

    render() {
        this.el.classList.add('email-form');
        this.el.innerHTML = `
            <div class="container">
                <h2>Let’s work together.</h2>
                <form id="email">
                    <input type="text" placeholder="Name">
                    <input type="email" placeholder="Email">
                    <span>Message<span>
                    <textarea 
                        requaired
                        form="email"
                        cols="50"
                        rows="5"
                        type="text">
                    </textarea>
                    <input type="text" placeholder="Budget">
                    <button type="submit" form="email"> submit </button>
                </form>
            </div>
        `;
        return this.el;
    }
}


