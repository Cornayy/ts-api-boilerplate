import * as express from 'express';
import * as cors from 'cors';
import { Router } from './routes/router';

export class App {
    private app: express.Application;
    private port: string | number;
    private router: Router;

    constructor(router: Router) {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.router = router;

        this.initialize();
        this.setRoutes();
        this.app.listen(this.port);
    }

    private initialize(): void {
        this.app.use(cors());
        this.app.use(express.json());
    }

    private setRoutes(): void {
        this.router.routes.forEach(route => this.app.use('/', route.router));
    }
}
