import swaggerUiExpress from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import { Router } from 'express';
import { IRoute } from '../types';
import { Service } from 'typedi';
import { options } from '../config/swagger';

@Service()
export class DocsRoute implements IRoute {
    private swaggerSpec: object;
    public path: string;
    public router: Router;

    constructor() {
        this.swaggerSpec = swaggerJsdoc(options);
        this.router = Router();
        this.path = '/docs';
        this.setRoutes();
    }

    private setRoutes(): void {
        this.router.use('/', swaggerUiExpress.serve, swaggerUiExpress.setup(this.swaggerSpec));
    }
}
