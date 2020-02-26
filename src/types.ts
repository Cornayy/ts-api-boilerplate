import { Document, Model } from 'mongoose';
import { NextFunction, Request, Response, Router } from 'express';

export interface IAuthor extends Document {
    _id: string;
    firstName: string;
    lastName: string;
    birthDate: Date;
    country: string;
    ranking: number;
    books: string[];
}

export interface IBook extends Document {
    _id: string;
    title: string;
    publishDate: Date;
    category: string;
    chapter: IChapter[];
}

export interface IChapter extends Document {
    title: string;
    numberOfPages: number;
}

export interface ISeed {
    Model: Model<Document>;
    data: object[];
}

export interface IRouteParameters {
    req: Request;
    res: Response;
    next: NextFunction;
}

export interface IRoute {
    path: string;
    router: Router;
}

export interface IController {
    getAll(params: IRouteParameters): void;
    get(params: IRouteParameters): void;
    update(params: IRouteParameters): void;
    create(params: IRouteParameters): void;
    delete(params: IRouteParameters): void;
}
