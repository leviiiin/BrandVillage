import { MainView } from './views/main/main.js'
import './assets/main.scss';

class App {
    routes = [
        {path: "", view:MainView}
    ];

    constructor() {
        this.route();
    }

    route() {
        if (this.currentView) {
            this.currentView.destroy();
        }
        const view = this.routes.find(r => r.path == location.hash).view;
        this.currentView = new view();
        this.currentView.render();
    }
}
new App();

