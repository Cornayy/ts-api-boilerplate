import { NextFunction, Request, Response } from 'express';

export interface IRouteParameters {
    req: Request;
    res: Response;
    next: NextFunction;
}

export interface IController {
    getAll(params: IRouteParameters): void;
    get(params: IRouteParameters): void;
    update(params: IRouteParameters): void;
    create(params: IRouteParameters): void;
    delete(params: IRouteParameters): void;
}
