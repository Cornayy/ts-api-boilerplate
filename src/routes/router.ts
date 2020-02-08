import { IRoute } from './../interfaces/route';
import { UserRoute } from './user.route';

export class Router {
    public routes: IRoute[];

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.routes.push(new UserRoute());
    }
}
