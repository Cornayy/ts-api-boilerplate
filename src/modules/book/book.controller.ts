import { IController, IBook } from '../../../types';
import { Service } from 'typedi';
import { BookService } from './book.service';
import { Request, Response, NextFunction } from 'express';

@Service()
export class BookController implements IController {
    private service: BookService;

    constructor(service: BookService) {
        this.service = service;
    }

    getAll = async (req: Request, res: Response, next: NextFunction) => {
        const books: IBook[] = await this.service.getBooks();
        res.status(200).json(books);
    };

    get(): void {
        throw new Error('Method not implemented.');
    }

    update(): void {
        throw new Error('Method not implemented.');
    }

    create(): void {
        throw new Error('Method not implemented.');
    }

    delete(): void {
        throw new Error('Method not implemented.');
    }
}
