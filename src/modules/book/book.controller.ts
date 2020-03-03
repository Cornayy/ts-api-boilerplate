import { IController, IBook } from '../../types';
import { Service } from 'typedi';
import { BookService } from './book.service';
import { Request, Response, NextFunction } from 'express';

@Service()
export class BookController implements IController {
    private service: BookService;

    constructor(service: BookService) {
        this.service = service;
    }

    /**
     * @swagger
     * /books:
     *   get:
     *     tags:
     *     - Book
     *     summary: Returns all books.
     *     description: This endpoint will return every book in the database.
     *     responses:
     *       200:
     *         description: Receive all books.
     *         schema:
     *            $ref: '#definitions/Book'
     */
    getAll = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const books: IBook[] = await this.service.getBooks();
            res.status(200).json(books);
        } catch (err) {
            next(err);
        }
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
