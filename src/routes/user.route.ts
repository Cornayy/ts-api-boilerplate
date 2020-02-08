import { IRoute } from '../interfaces/route';
import * as express from 'express';
import { IController } from 'src/interfaces/controller';
import { UserController } from 'src/controllers/user.controller';
import { Inject } from 'typedi';

export class UserRoute implements IRoute {
    public path: string;
    public router: express.Router;

    @Inject(type => UserController)
    public controller: IController;

    constructor() {
        this.router = express.Router();
        this.path = '/users';
        this.setRoutes();
    }

    private setRoutes(): void {
        this.router.get(this.path, this.controller.getAll);
    }
}
