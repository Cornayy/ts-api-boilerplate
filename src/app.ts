import { Logger } from './utils/Logger';
import 'reflect-metadata';
import * as express from 'express';
import * as cors from 'cors';
import { Database } from './database/database';
import { Router } from './routes/router';

export class App {
    private app: express.Application;
    private port: string | number;
    private router: Router;
    private database: Database;

    constructor(router: Router, database: Database) {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.router = router;
        this.database = database;

        this.setup();
    }

    private setup() {
        this.database.connect();
        this.initialize();
        this.setRoutes();
        this.app.listen(this.port);

        Logger.info('App launched.');
    }

    private initialize() {
        this.app.use(cors());
        this.app.use(express.json());
    }

    private setRoutes() {
        this.router.routes.forEach(route => this.app.use('/', route.router));
    }
}
