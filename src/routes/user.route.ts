import { IRoute } from '../interfaces/route';
import * as express from 'express';
import { IController } from '../interfaces/controller';
import { UserController } from '../controllers/user.controller';

export class UserRoute implements IRoute {
    public path: string;
    public router: express.Router;
    public controller: IController;

    constructor(controller: UserController) {
        this.controller = controller;
        this.router = express.Router();
        this.path = '/users';
        this.setRoutes();
    }

    private setRoutes(): void {
        this.router.get(this.path, this.controller.getAll);
    }
}
