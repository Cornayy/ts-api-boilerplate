import { Router } from './routes/router';
import * as express from 'express';

export class App {
    private app: express.Application;
    private port: string | number;
    private router: Router;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;

        this.setRoutes();
        this.app.listen(this.port);
    }

    private setRoutes(): void {
        this.router.routes.forEach(route => this.app.use(route.path, route.router));
    }
}
