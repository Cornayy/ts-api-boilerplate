import 'reflect-metadata';
import { UserRoute } from './user.route';
import { IRoute } from '../types';
import { DocsRoute } from './docs.route';
import { AuthorRoute } from './author.route';
import { BookRoute } from './book.route';
import { Service, Container } from 'typedi';

@Service()
export class Router {
    public routes: IRoute[];

    constructor() {
        this.routes = [];
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.routes.push(Container.get(BookRoute));
        this.routes.push(Container.get(AuthorRoute));
        this.routes.push(Container.get(UserRoute));
        this.routes.push(Container.get(DocsRoute));
    }
}
