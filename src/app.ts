import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import { Logger } from './utils/logger';
import { Router } from './routes/router';
import { Service } from 'typedi';
import { Database } from './database/database';
import { apiOptions } from './config/options';

@Service()
export class App {
    public app: express.Application;
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
        this.initialize();
        this.setRoutes();
        this.app.listen(this.port);

        this.database.initialize();
        Logger.info(`App launched on port ${this.port}`);
    }

    private initialize() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    private setRoutes() {
        try {
            this.router.routes.forEach(route =>
                this.app.use(
                    route.path !== '/' ? `${apiOptions.baseUrl}${route.path}` : route.path,
                    route.router
                )
            );
        } catch (err) {
            Logger.error(err);
        }
    }
}
