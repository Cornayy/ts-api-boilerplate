import * as swaggerUi from 'swagger-ui-express';
import * as swaggerJSDoc from 'swagger-jsdoc';
import { Router } from 'express';
import { IRoute } from '../interfaces/route';
import { Service } from 'typedi';
import { options } from '../config/swagger';

@Service()
export class DocsRoute implements IRoute {
    private swaggerSpec: object;
    public path: string;
    public router: Router;

    constructor() {
        this.swaggerSpec = swaggerJSDoc(options);
        this.router = Router();
        this.path = '/docs';
        this.setRoutes();
    }

    private setRoutes(): void {
        this.router.use(this.path, swaggerUi.serve, swaggerUi.setup(this.swaggerSpec));
    }
}
