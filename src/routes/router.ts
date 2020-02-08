import { UserService } from '../services/user.service';
import { UserController } from '../controllers/user.controller';
import { IRoute } from './../interfaces/route';
import { UserRoute } from './user.route';
import { Service } from 'typedi';

@Service()
export class Router {
    public routes: IRoute[];

    constructor() {
        this.routes = [];
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.routes.push(new UserRoute(new UserController(new UserService())));
    }
}
