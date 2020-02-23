import 'reflect-metadata';
import * as express from 'express';
import * as cors from 'cors';
import * as swaggerUi from 'swagger-ui-express';
import * as swaggerJSDoc from 'swagger-jsdoc';
import { Logger } from './utils/logger';
import { Router } from './routes/router';
import { Service } from 'typedi';
import { Database } from './database/database';
import { options } from './config/swagger';
import { apiOptions } from './config/options';

@Service()
export class App {
    public app: express.Application;
    private port: string | number;
    private router: Router;

    constructor(router: Router) {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.router = router;

        this.setup();
    }

    private setup() {
        this.initialize();
        this.setRoutes();
        this.app.listen(this.port);

        Database.initialize();
        Logger.info('App launched.');
    }

    private initialize() {
        this.app.use(cors());
        this.app.use(express.json());
    }

    private setRoutes() {
        try {
            const swaggerSpec = swaggerJSDoc(options);
            this.app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
            this.router.routes.forEach(route => this.app.use(apiOptions.baseUrl, route.router));
        } catch (err) {
            Logger.error(err);
        }
    }
}
