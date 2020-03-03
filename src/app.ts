import 'reflect-metadata';
import * as express from 'express';
import * as cors from 'cors';
import * as passport from 'passport';
import * as bodyParser from 'body-parser';
import { Logger } from './utils/logger';
import { Router } from './routes/router';
import { Service } from 'typedi';
import { Database } from './database/database';
import { apiOptions } from './config/options';
import { jwtStrategy } from './middleware/auth.middleware';
import { error } from './middleware/error.middleware';

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
        this.setStrategies();
        this.setRoutes();
        this.setMiddleware();
        this.app.listen(this.port);

        this.database.initialize();
        Logger.info('App launched.');
    }

    private initialize() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(passport.initialize());
    }

    private setMiddleware() {
        this.app.use(error);
    }

    private setStrategies() {
        passport.use(jwtStrategy);
    }

    private setRoutes() {
        try {
            this.router.routes.forEach(route => this.app.use(apiOptions.baseUrl, route.router));
        } catch (err) {
            Logger.error(err);
        }
    }
}
