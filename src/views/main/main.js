import { RootView } from '/src/common/root-view'
import { Header } from '/src/component/header/header.js';
import { Hero } from '/src/component/hero/hero.js';
import { Products } from '/src/component/products/products.js'
import { Info } from '../../component/info/info.js';
import { Services } from '../../component/services/services.js';
import { About } from '../../component/about/about.js';
import { Process } from '../../component/process/process.js';
import { Articles } from '../../component/articles/articles.js';
import { EmailForm } from '../../component/email-form/emailform.js';
import { Footer } from '../../component/footer/footer.js';
import { Portfolio } from '../../component/portfolio/portfolio.js';
import '/src/assets/main.scss';

export class MainView extends RootView {
    constructor() {
        super();
        this.setTitle('Brand Village');
    }

    render() {
        this.renderFooter();
        this.renderEmailForm();
        this.renderArticles();
        this.renderProcess();
        this.renderAbout();
        this.renderPortfolio();
        this.renderServices();
        this.renderInfo();
        this.renderProducts();
        this.renderHero();
        this.renderHeader();
    }

    renderHeader() {
        const header = new Header().render();
        this.app.prepend(header);
    }

    renderHero() {
        const hero = new Hero().render();
        this.app.prepend(hero);
    }

    renderProducts() {
        const products = new Products().render();
        this.app.prepend(products);
    }

    renderInfo() {
        const info = new Info().render();
        this.app.prepend(info);
    }

    renderServices() {
        const services = new Services().render();
        this.app.prepend(services);
    }

    renderPortfolio() {
        const portfolio = new Portfolio().render();
        this.app.prepend(portfolio);
    }

    renderAbout() {
        const about = new About().render();
        this.app.prepend(about);
    }

    renderProcess() {
        const process = new Process().render();
        this.app.prepend(process);
    }

    renderArticles() {
        const articles = new Articles().render();
        this.app.prepend(articles);
    }

    renderEmailForm() {
        const emailform = new EmailForm().render();
        this.app.prepend(emailform);
    }

    renderFooter() {
        const footer = new Footer().render();
        this.app.prepend(footer);
    }
}