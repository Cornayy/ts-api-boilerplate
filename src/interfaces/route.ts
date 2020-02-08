import * as express from 'express';

export interface IRoute {
    path: string;
    router: express.Router;
}
